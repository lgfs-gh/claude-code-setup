import fs from 'node:fs';
import path from 'node:path';

const base = process.env.BASE_URL;
if (!base) {
  console.error('Defina BASE_URL com a preview ou a loja. Este script não lê .env.');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Instale o browser: npm install -D playwright && npx playwright install chromium');
  process.exit(1);
}

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const out = path.resolve(process.cwd(), 'qa-artifacts', stamp);
fs.mkdirSync(out, { recursive: true });

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

function assertNoCheckout(url) {
  if (/\/checkouts?(\/|$|\?)/.test(url)) {
    throw new Error(`Parado no checkout: ${url}`);
  }
}

async function shot(page, file) {
  await page.screenshot({ path: file, fullPage: false });
  return file;
}

async function audit(page) {
  return page.evaluate(() => {
    const text = (el) => (el.innerText || el.getAttribute('aria-label') || '').trim();
    const imagesMissingAlt = [...document.images].filter(
      (img) => !img.alt && img.getAttribute('aria-hidden') !== 'true',
    ).length;
    const buttonsWithoutName = [...document.querySelectorAll('button, [role="button"]')].filter(
      (el) => !text(el),
    ).length;
    const inputsWithoutLabel = [...document.querySelectorAll('input, select, textarea')].filter((el) => {
      if (el.getAttribute('type') === 'hidden') return false;
      const id = el.id;
      const labelled =
        (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) ||
        el.getAttribute('aria-label') ||
        el.closest('label');
      return !labelled;
    }).length;
    return {
      title: document.title,
      h1: document.querySelectorAll('h1').length,
      imagesMissingAlt,
      buttonsWithoutName,
      inputsWithoutLabel,
    };
  });
}

async function clickHref(page, selector) {
  const link = page.locator(selector).first();
  if ((await link.count()) === 0) return false;
  await link.click();
  await page.waitForLoadState('domcontentloaded', { timeout: 20000 }).catch(() => {});
  assertNoCheckout(page.url());
  return true;
}

const report = { base, out, passed: true, steps: [] };

const browser = await chromium.launch({ headless: true });
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    const record = async (name, ok, note) => {
      assertNoCheckout(page.url());
      const file = path.join(out, `${viewport.name}-${name}.png`);
      await shot(page, file);
      const step = {
        viewport: viewport.name,
        name,
        url: page.url(),
        screenshot: path.relative(process.cwd(), file),
        ok,
        note: note || '',
        audit: await audit(page),
      };
      report.steps.push(step);
      if (!ok) report.passed = false;
    };

    await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 45000 });
    assertNoCheckout(page.url());
    await record('01-home', true);

    const wentCollection = await clickHref(page, 'a[href*="/collections/"]');
    await record('02-collection', wentCollection, wentCollection ? '' : 'Nenhum link de coleção');

    const wentProduct = await clickHref(page, 'a[href*="/products/"]');
    await record('03-product', wentProduct, wentProduct ? '' : 'Nenhum link de produto');

    const add = page.locator('form[action*="/cart/add"] [type="submit"], button[name="add"]').first();
    let added = false;
    if ((await add.count()) > 0) {
      await add.click();
      await page.waitForTimeout(1200);
      assertNoCheckout(page.url());
      added = true;
    }
    await record('04-add-to-cart', added, added ? '' : 'Botão de adicionar não encontrado');

    const wentCart = await clickHref(page, 'a[href$="/cart"], a[href*="/cart?"]');
    if (!wentCart && !page.url().includes('/cart')) {
      await page.goto(new URL('/cart', base).href, { waitUntil: 'domcontentloaded', timeout: 30000 });
    }
    assertNoCheckout(page.url());
    await record('05-cart', page.url().includes('/cart') || wentCart, 'Para antes do checkout');
    await page.close();
  }
} catch (error) {
  report.passed = false;
  report.error = error instanceof Error ? error.message : String(error);
  console.error(report.error);
} finally {
  await browser.close();
}

fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
console.log(path.join(out, 'report.json'));
process.exit(report.passed ? 0 : 1);
