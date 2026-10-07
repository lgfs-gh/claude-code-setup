const { stdin } = process;
const chunks = [];

stdin.on('data', (chunk) => chunks.push(chunk));
stdin.on('end', () => {
  const raw = Buffer.concat(chunks).toString('utf8');
  let command = '';
  try {
    const data = JSON.parse(raw);
    const input = data.tool_input || data.input || {};
    command = String(input.command || input.cmd || '');
  } catch {
    command = raw;
  }

  const denied = [
    [/shopify\s+theme\s+publish\b/i, 'shopify theme publish fica fora do agente. Rode no seu terminal se for publicar a loja.'],
    [/shopify\s+theme\s+delete\b/i, 'shopify theme delete fica fora do agente.'],
    [/git\s+push\b[^\n]*--force\b/i, 'force-push está bloqueado.'],
    [/git\s+push\b[^\n]*(^|\s)-f(\s|$)/i, 'git push -f está bloqueado.'],
    [/git\s+reset\s+--hard\b/i, 'git reset --hard está bloqueado.'],
  ];

  for (const [pattern, message] of denied) {
    if (pattern.test(command)) {
      process.stderr.write(`Guardrail do tema Shopify: ${message}\n`);
      process.exit(2);
    }
  }

  process.exit(0);
});
