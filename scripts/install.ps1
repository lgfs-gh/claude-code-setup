param(
  [Parameter(Mandatory = $true)]
  [string]$Target
)

$ErrorActionPreference = 'Stop'
node (Join-Path $PSScriptRoot 'install.mjs') $Target
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
