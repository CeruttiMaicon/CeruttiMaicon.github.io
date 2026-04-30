import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default {
  bundler: viteBundler(),
  lang: 'pt-br',
  description: "Minhas competências, anotações e documentações :)",
  title: "Maicon Cerutti",
  head: [
    [
      "script",
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        "data-ad-client": "ca-pub-7563330699889675",
        async: true,
      },
    ],
    [
      "script",
      {},
      "(adsbygoogle = window.adsbygoogle || []).push({  google_ad_client: <your code here>,  enable_page_level_ads: true });",
    ],
  ],
  theme: defaultTheme({
    logo: "/images/perfil.jpeg",
    darkMode: true,
    searching: true,
    navbar: [
      {
        text: 'Documentações',
        children: [
          { text: 'Amazon', link: '/docs/amazon/' },
          { text: 'Docker', link: '/docs/docker/' },
          { text: 'Git', link: '/docs/git/' },
          { text: 'Laravel', link: '/docs/laravel/' },
          { text: 'Linux', link: '/docs/linux/' },
          { text: 'Lumen', link: '/docs/lumen/' },
          { text: 'Neovim', link: '/docs/nvim/' },
          { text: 'Postgres', link: '/docs/postgres/' },
          { text: 'Python', link: '/docs/python/' },
          { text: 'SonarQube', link: '/docs/sonarqube/' },
          { text: 'Vue.js', link: '/docs/vue-js/' },
          { text: 'VuePress', link: '/docs/vuepress/' },
          { text: 'Monitores', link: '/docs/monitores/' },
          { text: 'Kernel para NVMe em Linux', link: '/docs/kernel-para-nvme-em-linux/' },
          { text: 'Cedilha', link: '/docs/cedilha/' },
          { text: 'Windows', link: '/docs/windows/' },
        ],
      },
      {
        text: "Sobre",
        link: "/sobre/README.md"
      },
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/maicon-cerutti-516918114/",
      },
      {
        text: "Meu GitHub",
        link: "https://github.com/CeruttiMaicon",
      },
      {
        text: "Este projeto",
        link: "https://github.com/CeruttiMaicon/CeruttiMaicon.github.io",
      },
    ],
    sidebar: [
      {
        text: "Postgres",
        children: ["/docs/postgres/"],
      },
      {
        text: "Python",
        children: ["/docs/python/"],
      },
      {
        text: "Docker",
        children: [
          "/docs/docker/laradock/",
          "/docs/docker/install/",
          "/docs/docker/docker-compose/",
        ],
      },
      {
        text: "Linux",
        children: [{
            text: "Linux Mint",
            children: ["/docs/linux/mint-tema-mac/"]
          },
          {
            text: "Linux Ubuntu",
            children: ["/docs/linux/ubuntu-tema-mac/"]
          },
          {
            text: "Zero Absoluto",
            children: ["/docs/linux/install-programns/"]
          },
        ],
      },
      {
        text: "Amazon",
        children: ["/docs/amazon/"],
      },
      {
        text: "Laravel",
        children: [
          "/docs/laravel/uploud-de-imagem/",
          "/docs/laravel/uploud-de-anexo/",
          "/docs/laravel/datatable-server-side/",
          "/docs/laravel/dompdf/",
          "/docs/laravel/laravel-homestad/",
          "/docs/laravel/relationship/",
          "/docs/laravel/laravel-vue-validation-for-laravel/",
        ],
      },
      {
        text: "Lumen",
        children: ["/docs/lumen/JWT-Authenticated-API-with-lumen/"],
      },
      {
        text: "Vue.JS",
        children: ["/docs/vue-js/"],
      },

      {
        text: "GIT",
        children: ["/docs/git/"],
      },
      {
        text: "SonarQuebe",
        children: ["/docs/sonarqube/instalacao-inicial/", "/docs/sonarqube/utilizacao-rapida/"],
      },
    ],
  }),
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
            // allow searching the `tags` frontmatter
            maxSuggestions: 10,
            hotKeys: ['s', '/'],
            isSearchable: (page) => page.path !== '/',
          }
        },
      },
    ],
  ],
};