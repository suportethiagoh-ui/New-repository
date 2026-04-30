# Guia de Deploy — INFOGERAL

Passos para colocar o sistema em produção em um servidor Linux (Ubuntu/Debian).
Adapte conforme seu provedor (VPS, Fly.io, Railway, etc.).

---

## Pré-requisitos no servidor

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- MySQL 8+ (local ou gerenciado, ex: PlanetScale, Railway MySQL)
- Proxy reverso com HTTPS: Nginx + Certbot, ou Caddy

---

## 1. Instalar dependências de segurança

```bash
pnpm add helmet express-rate-limit
```

> Essas libs não estão no `package.json` original do template.
> Sem elas o servidor ainda funciona, mas sem os headers de segurança.

---

## 2. Configurar variáveis de ambiente

```bash
cp .env.example .env
nano .env   # preencha todos os valores
```

Valores obrigatórios:
- `DATABASE_URL` — string de conexão MySQL
- `JWT_SECRET` — gere com `openssl rand -base64 48`
- `VITE_APP_ID` e `OAUTH_SERVER_URL` — do painel Manus
- `OWNER_OPEN_ID` — seu openId para ser admin

---

## 3. Criar as tabelas no banco

```bash
pnpm db:push
```

---

## 4. Build do frontend

```bash
pnpm build
```

Isso gera `dist/` com o frontend compilado.

---

## 5. Iniciar o servidor

```bash
NODE_ENV=production node dist/index.js
```

Ou com PM2 para manter rodando:

```bash
npm install -g pm2
pm2 start dist/index.js --name infogeral
pm2 save
pm2 startup   # configura auto-start no boot
```

---

## 6. Configurar Nginx como proxy reverso

```nginx
server {
    listen 80;
    server_name seudominio.com.br;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name seudominio.com.br;

    ssl_certificate     /etc/letsencrypt/live/seudominio.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/seudominio.com.br/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;  # <- essencial para HTTPS
        proxy_cache_bypass $http_upgrade;
    }
}
```

> O header `X-Forwarded-Proto` é o que permite ao Express detectar HTTPS corretamente
> e definir o cookie de sessão como `secure: true`.

---

## 7. Certificado SSL com Certbot

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d seudominio.com.br
```

---

## Checklist final antes de ir ao ar

- [ ] `NODE_ENV=production` no `.env`
- [ ] `JWT_SECRET` tem pelo menos 32 caracteres e é aleatório
- [ ] `DATABASE_URL` aponta para banco de produção
- [ ] `.env` está no `.gitignore` e **nunca foi commitado**
- [ ] HTTPS está configurado (Nginx + Certbot ou Caddy)
- [ ] `pnpm db:push` foi executado com sucesso
- [ ] `pnpm build` foi executado com sucesso
- [ ] Testou o login via OAuth em produção
- [ ] PM2 está configurado para reiniciar no boot

---

## Variáveis que NÃO devem ir para o frontend (Vite)

Variáveis com prefixo `VITE_` são embutidas no bundle JavaScript e ficam visíveis
para qualquer usuário. Use `VITE_` apenas para valores públicos:

✅ Pode ser `VITE_`: `VITE_APP_ID`, `VITE_OAUTH_PORTAL_URL`  
❌ Nunca `VITE_`: senhas, `JWT_SECRET`, `DATABASE_URL`, chaves de API privadas
