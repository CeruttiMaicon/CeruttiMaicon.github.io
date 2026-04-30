# Portfolio de Maicon Cerutti

Criado e desenvolvido por [Maicon Cerutti](https://github.com/CeruttiMaicon)

## Documentações

Criado com o framework [VuePress](https://vuepress.vuejs.org/) para anotações de documentações que eu julgue importante.

---

## Tecnologias

| Ferramenta | Versão |
|---|---|
| VuePress | `2.0.0-rc.28` |
| Vue | `^3.5.33` |
| Node.js | `18+` |
| Gerenciador de pacotes | `pnpm` |

---

## Instalação e execução local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm docs:dev

# Gerar build de produção
pnpm docs:build
```

---

## Deploy automático com Git Flow + GitHub Actions

Este projeto utiliza **Git Flow** como estratégia de versionamento e **GitHub Actions** para deploy automático na branch `gh-pages`.

### Como funciona

```
develop ──────────────────────────────────────────────────►
          │                              ▲
          │  git flow release start      │ merge (PR)
          ▼                              │
        release/x.x.x ─────────────────►┘
                                         │
                                         ▼
                                        main ──► GitHub Actions ──► gh-pages
```

### Fluxo passo a passo

1. **Abrir a release** a partir da branch `develop`:

   ```bash
   git flow release start x.x.x
   ```

2. **Finalizar a release** (merge para `main` e `develop`):

   ```bash
   git flow release finish x.x.x
   ```

   > Isso faz o merge da release para a branch `main` e para a branch `develop` automaticamente, além de criar a tag da versão.

3. **Enviar as branches e a tag para o repositório remoto:**

   ```bash
   git push origin main
   git push origin develop
   git push origin --tags
   ```

4. **Deploy automático** — ao detectar o push na branch `main`, o GitHub Actions executa o workflow `.github/workflows/docs.yml`, que:
   - Instala as dependências com `pnpm`
   - Executa o build do VuePress (`pnpm docs:build`)
   - Faz o deploy do conteúdo gerado para a branch `gh-pages`
   - O site é publicado automaticamente via **GitHub Pages**

### Arquivo de workflow

O pipeline está definido em [`.github/workflows/docs.yml`](.github/workflows/docs.yml) e é acionado por:

- **Push na branch `main`** — deploy automático ao fechar uma release
- **Disparo manual** — via `workflow_dispatch` no painel do GitHub Actions