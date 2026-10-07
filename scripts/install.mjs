import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const kitRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targetArg = process.argv[2];

if (!targetArg) {
  console.error('Uso: node scripts/install.mjs <pasta-do-tema>');
  process.exit(1);
}

const target = path.resolve(targetArg);
const manifest = JSON.parse(fs.readFileSync(path.join(kitRoot, 'kit', 'manifest.json'), 'utf8'));

function isTheme(dir) {
  return (
    fs.existsSync(path.join(dir, 'layout', 'theme.liquid')) &&
    fs.existsSync(path.join(dir, 'config', 'settings_schema.json'))
  );
}

if (path.resolve(target) === path.resolve(kitRoot)) {
  console.error('O alvo é o próprio kit. Passe a pasta do tema Shopify.');
  process.exit(1);
}

if (!isTheme(target)) {
  console.error(
    `Não parece um tema Shopify: falta layout/theme.liquid ou config/settings_schema.json em ${target}`,
  );
  process.exit(1);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(from, to) {
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
}

function removePath(dest) {
  const stat = fs.lstatSync(dest);
  if (stat.isSymbolicLink()) {
    fs.unlinkSync(dest);
    return;
  }
  fs.rmSync(dest, { recursive: true, force: true });
}

function linkOrCopy(source, dest, kind) {
  ensureDir(path.dirname(dest));
  if (fs.existsSync(dest)) {
    const stat = fs.lstatSync(dest);
    const managedCopy = !stat.isSymbolicLink() && fs.existsSync(path.join(dest, '.installed-by-copy'));
    const managedFile = !stat.isSymbolicLink() && kind === 'file';
    if (stat.isSymbolicLink() || managedCopy || managedFile) {
      removePath(dest);
    } else {
      console.log(`mantido (não é symlink do kit): ${path.relative(target, dest)}`);
      return;
    }
  }

  try {
    if (kind === 'dir' && process.platform === 'win32') {
      fs.symlinkSync(source, dest, 'junction');
    } else if (kind === 'dir') {
      const rel = path.relative(path.dirname(dest), source);
      fs.symlinkSync(rel, dest);
    } else {
      const rel = path.relative(path.dirname(dest), source);
      fs.symlinkSync(process.platform === 'win32' ? source : rel, dest);
    }
    console.log(`symlink ${path.relative(target, dest)}`);
  } catch (error) {
    if (kind === 'dir') {
      fs.cpSync(source, dest, { recursive: true });
      fs.writeFileSync(path.join(dest, '.installed-by-copy'), 'copy fallback\n');
      console.log(`cópia (symlink recusado: ${error.message}) ${path.relative(target, dest)}`);
    } else {
      copyFile(source, dest);
      console.log(`cópia de arquivo (symlink recusado) ${path.relative(target, dest)}`);
    }
  }
}

function copyIfMissing(from, to) {
  if (fs.existsSync(to)) {
    console.log(`já existe: ${path.relative(target, to)}`);
    return;
  }
  copyFile(from, to);
  console.log(`criado: ${path.relative(target, to)}`);
}

function installClaudeMd() {
  const dest = path.join(target, 'CLAUDE.md');
  const template = fs.readFileSync(path.join(kitRoot, 'kit', 'templates', 'CLAUDE.md'), 'utf8');
  const start = '<!-- shopify-claude-kit -->';
  const end = '<!-- /shopify-claude-kit -->';
  if (!fs.existsSync(dest)) {
    fs.writeFileSync(dest, template);
    console.log('criado: CLAUDE.md');
    return;
  }
  const current = fs.readFileSync(dest, 'utf8');
  if (current.includes(start)) {
    console.log('já existe: CLAUDE.md (bloco do kit presente)');
    return;
  }
  const block = template.slice(template.indexOf(start));
  fs.writeFileSync(dest, `${current.trimEnd()}\n\n${block}`);
  console.log('atualizado: CLAUDE.md (bloco do kit acrescentado)');
}

function installGitignore() {
  const dest = path.join(target, '.gitignore');
  const marker = '# shopify-claude-kit';
  const block = `${marker}
.env
.env.*
!.env.example
shopify.commands.json
playwright-report/
test-results/
qa-artifacts/
`;
  if (!fs.existsSync(dest)) {
    fs.writeFileSync(dest, `${block}`);
    console.log('criado: .gitignore');
    return;
  }
  const current = fs.readFileSync(dest, 'utf8');
  if (current.includes(marker)) {
    console.log('já existe: .gitignore (bloco do kit presente)');
    return;
  }
  fs.writeFileSync(dest, `${current.trimEnd()}\n\n${block}`);
  console.log('atualizado: .gitignore');
}

for (const name of manifest.skills) {
  const source = path.join(kitRoot, '.claude', 'skills', name);
  if (!fs.existsSync(path.join(source, 'SKILL.md'))) {
    console.error(`Skill canônica ausente: ${name}`);
    process.exit(1);
  }
  linkOrCopy(source, path.join(target, '.claude', 'skills', name), 'dir');
}

for (const file of manifest.agents) {
  const source = path.join(kitRoot, '.claude', 'agents', file);
  if (!fs.existsSync(source)) {
    console.error(`Agent canônico ausente: ${file}`);
    process.exit(1);
  }
  linkOrCopy(source, path.join(target, '.claude', 'agents', file), 'file');
}

copyFile(
  path.join(kitRoot, '.claude', 'hooks', 'block-dangerous.js'),
  path.join(target, '.claude', 'hooks', 'block-dangerous.js'),
);
console.log('atualizado: .claude/hooks/block-dangerous.js');

copyIfMissing(
  path.join(kitRoot, '.claude', 'settings.json'),
  path.join(target, '.claude', 'settings.json'),
);
copyIfMissing(path.join(kitRoot, '.mcp.json'), path.join(target, '.mcp.json'));
copyIfMissing(
  path.join(kitRoot, 'kit', 'templates', 'env.example'),
  path.join(target, '.env.example'),
);
copyIfMissing(
  path.join(kitRoot, 'kit', 'templates', 'shopify.commands.example.json'),
  path.join(target, 'shopify.commands.example.json'),
);
copyIfMissing(
  path.join(kitRoot, 'kit', 'templates', 'pull_request_template.md'),
  path.join(target, '.github', 'pull_request_template.md'),
);

for (const memory of ['codebase.md', 'dev-patterns.md', 'system-design.md', 'design-system.md']) {
  copyIfMissing(
    path.join(kitRoot, 'kit', 'templates', 'memory', memory),
    path.join(target, '.claude', 'memory', memory),
  );
}

installClaudeMd();
installGitignore();

console.log('');
console.log('Instalação concluída.');
console.log('Próximo, com o dev: claude nesta pasta, aceitar o trust, /mcp para Notion e Figma.');
console.log('Não publique o tema por aqui.');
