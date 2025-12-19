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

# Obtém o commit atual
CURRENT_COMMIT=$(git rev-parse HEAD)

# Verifica se a tag já existe localmente
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  TAG_COMMIT=$(git rev-parse "$TAG_NAME")
  if [ "$TAG_COMMIT" != "$CURRENT_COMMIT" ]; then
    echo "⚠️  Tag $TAG_NAME já existe localmente apontando para commit diferente!"
    echo "   Tag atual aponta para: ${TAG_COMMIT:0:7}"
    echo "   Commit atual: ${CURRENT_COMMIT:0:7}"
    echo "🔄 Recriando tag apontando para o commit atual..."
    # Deleta a tag local
    git tag -d "$TAG_NAME" 2>/dev/null || true
  else
    echo "ℹ️  Tag $TAG_NAME já existe localmente e aponta para o commit atual."
  fi
fi

# Verifica se a tag existe remotamente
TAG_EXISTS_REMOTE=false
if git ls-remote --tags origin "$TAG_NAME" | grep -q "$TAG_NAME"; then
  REMOTE_TAG_COMMIT=$(git ls-remote --tags origin "$TAG_NAME" | cut -f1)
  if [ "$REMOTE_TAG_COMMIT" != "$CURRENT_COMMIT" ]; then
    echo "⚠️  Tag $TAG_NAME já existe remotamente apontando para commit diferente!"
    echo "   Tag remota aponta para: ${REMOTE_TAG_COMMIT:0:7}"
    echo "   Commit atual: ${CURRENT_COMMIT:0:7}"
    echo "🔄 A tag remota será atualizada para apontar para o commit atual."
    TAG_EXISTS_REMOTE=true
  else
    echo "ℹ️  Tag $TAG_NAME já existe remotamente e aponta para o commit atual."
    echo "⚠️  Se o workflow não foi acionado, pode ser cache. Tentando forçar atualização..."
    TAG_EXISTS_REMOTE=true
  fi
fi

# Criar tag apontando para o HEAD atual (se não existir)
if ! git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  git tag "$TAG_NAME"
  echo "✅ Tag criada localmente: $TAG_NAME"
else
  echo "✅ Tag local já existe e está correta: $TAG_NAME"
fi

# Push da tag (isso aciona o workflow automaticamente)
echo "⬆️  Fazendo push da tag..."
if [ "$TAG_EXISTS_REMOTE" = true ]; then
  # Usa --force para atualizar a tag remota se já existir e apontar para commit diferente
  git push origin "$TAG_NAME" --force
  echo "✅ Tag remota atualizada com sucesso!"
else
  git push origin "$TAG_NAME"
  echo "✅ Tag enviada com sucesso!"
fi

echo ""
echo "✅ Tag criada e enviada! O workflow será acionado automaticamente."
echo "📊 Acompanhe em: https://github.com/nubrell/analise-tecnica-lib-verniz/actions"
