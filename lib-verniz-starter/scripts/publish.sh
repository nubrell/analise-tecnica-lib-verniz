#!/bin/bash

# Script para publicar um componente automaticamente
# Uso: yarn publish:component <nome-do-componente>
# Exemplo: yarn publish:component menu

set -e

COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
  echo "❌ Erro: Nome do componente é obrigatório"
  echo "Uso: yarn publish:component <nome-do-componente>"
  echo "Exemplo: yarn publish:component menu"
  exit 1
fi

# Encontra a raiz do repositório Git
GIT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || echo "")

if [ -z "$GIT_ROOT" ]; then
  echo "❌ Erro: Não foi possível encontrar a raiz do repositório Git"
  exit 1
fi

# Navega para a raiz do repositório
cd "$GIT_ROOT"

# Define o caminho do package.json
PACKAGE_JSON="lib-verniz-starter/packages/components/$COMPONENT_NAME/package.json"

# Verifica se o componente existe
if [ ! -f "$PACKAGE_JSON" ]; then
  echo "❌ Erro: Componente '$COMPONENT_NAME' não encontrado"
  echo "Verifique se existe: $PACKAGE_JSON"
  exit 1
fi

# Pega a versão do package.json
VERSION=$(grep -o '"version": "[^"]*"' "$PACKAGE_JSON" | cut -d'"' -f4)

if [ -z "$VERSION" ]; then
  echo "❌ Erro: Não foi possível detectar a versão no package.json"
  exit 1
fi

TAG_NAME="nubrell/$COMPONENT_NAME@$VERSION"

echo "🚀 Publicando @nubrell/$COMPONENT_NAME@$VERSION..."
echo "📦 Versão detectada do package.json: $VERSION"
echo "📝 Criando tag: $TAG_NAME"

# Verifica se a tag já existe
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  echo "⚠️  Tag $TAG_NAME já existe!"
  read -p "Deseja fazer push mesmo assim? (s/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Cancelado"
    exit 1
  fi
else
  # Criar tag
  git tag "$TAG_NAME"
fi

# Push da tag (isso aciona o workflow automaticamente)
echo "⬆️  Fazendo push da tag..."
git push origin "$TAG_NAME"

echo ""
echo "✅ Tag criada e enviada! O workflow será acionado automaticamente."
echo "📊 Acompanhe em: https://github.com/nubrell/analise-tecnica-lib-verniz/actions"
