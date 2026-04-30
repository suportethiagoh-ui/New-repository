#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "INFOGERAL Dashboard Local"
echo "Projeto: $(pwd)"
echo "Abrindo em: http://localhost:3000"
echo
pnpm dev --host 0.0.0.0
