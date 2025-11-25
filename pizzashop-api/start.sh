#!/bin/bash

# Aguarda o PostgreSQL estar pronto
echo "Aguardando PostgreSQL..."
while ! pg_isready -h postgres -p 5432 -U docker; do
  sleep 1
done

echo "PostgreSQL está pronto!"

# Executa as migrações
echo "Executando migrações..."
bun src/db/migrate.ts

# Verifica se o banco já foi populado
echo "Verificando se o banco já foi populado..."
USER_COUNT=$(PGPASSWORD=docker psql -h postgres -U docker -d pizzashop -t -c "SELECT COUNT(*) FROM users;" 2>/dev/null | xargs)

if [ "$USER_COUNT" = "0" ] || [ -z "$USER_COUNT" ]; then
  echo "Banco vazio. Executando seed..."
  bun src/db/seed.ts
else
  echo "Banco já foi populado ($USER_COUNT usuários encontrados). Pulando seed."
fi

# Inicia o servidor
echo "Iniciando servidor..."
bun --watch src/http/server.ts