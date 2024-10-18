import{_ as o,M as i,p as d,q as r,R as a,t as s,N as c,a1 as t}from"./framework-35a8e870.js";const u={},l={href:"https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-18-04-pt",target:"_blank",rel:"noopener noreferrer"};function p(m,e){const n=i("ExternalLinkIcon");return d(),r("div",null,[e[3]||(e[3]=a("h1",{id:"docker-install",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker-install","aria-hidden":"true"},"#"),s(" Docker Install")],-1)),a("blockquote",null,[a("p",null,[e[1]||(e[1]=s("Brian Hogan. Como Instalar e Usar o Docker no Ubuntu 18.04. ")),a("a",l,[e[0]||(e[0]=s("Referência")),c(n)]),e[2]||(e[2]=s(". Acesso em 09 fev 2019. Instalação do docker dentro do Ubuntu/Mint Pré-requisitos"))])]),e[4]||(e[4]=t(`<blockquote><p>Para seguir este tutorial, você precisará do seguinte:</p></blockquote><p>Um servidor Ubuntu 18.04 configurado seguindo o guia Configuração Inicial de servidor com Ubuntu 18.04, incluindo um usuário sudo não-root e um firewall. Uma conta no Docker Hub se você deseja criar suas próprias imagens e enviá-las ao Docker Hub, como mostrado nos passos 7 e 8.</p><p>Passo 1 — Instalando o Docker O pacote de instalação do Docker disponível no repositório oficial do Ubuntu pode não ser a versão mais recente. Para garantir que teremos a última versão, vamos instalar o Docker a partir do repositório oficial do projeto. Para fazer isto, vamos adicionar uma nova fonte de pacotes, adicionar a chave GPG do Docker para garantir que os downloads são válidos, e então instalar os pacotes.</p><p>Primeiro, atualize sua lista atual de pacotes:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Em seguida, instale alguns pacotes de pré-requisitos que permitem que o apt utilize pacotes via HTTPS:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Então adicione a chave GPG para o repositório oficial do Docker em seu sistema:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adicione o repositório do Docker às fontes do APT:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A seguir, atualize o banco de dados de pacotes com os pacotes Docker do repositório recém adicionado:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Certifique-se de que você irá instalar a partir do repositório do Docker em vez do repositório padrão do Ubuntu:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-cache</span> policy docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Você verá uma saída como esta, embora o número da versão do Docker possa estar diferente:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Output of <span class="token function">apt-cache</span> policy docker-ce

docker-ce:
Installed: <span class="token punctuation">(</span>none<span class="token punctuation">)</span>
Candidate: <span class="token number">18.03</span>.1~ce~3-0~ubuntu
Version table:
<span class="token number">18.03</span>.1~ce~3-0~ubuntu <span class="token number">500</span>
<span class="token number">500</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Observe que o docker-ce não está instalado, mas o candidato para instalação é do repositório do Docker para o Ubuntu 18.04 (bionic).</p><p>Finalmente, instale o Docker:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O Docker agora deve ser instalado, o daemon iniciado e o processo ativado para iniciar na inicialização. Verifique se ele está sendo executado:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A saída deve ser semelhante à seguinte, mostrando que o serviço está ativo e executando:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Output
● docker.service - Docker Application Container Engine
Loaded: loaded <span class="token punctuation">(</span>/lib/systemd/system/docker.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2018</span>-07-05 <span class="token number">15</span>:08:39 UTC<span class="token punctuation">;</span> 2min 55s ago
Docs: https://docs.docker.com
Main PID: <span class="token number">10096</span> <span class="token punctuation">(</span>dockerd<span class="token punctuation">)</span>
Tasks: <span class="token number">16</span>
CGroup: /system.slice/docker.service
├─10096 /usr/bin/dockerd <span class="token parameter variable">-H</span> fd://
└─10113 docker-containerd <span class="token parameter variable">--config</span> /var/run/docker/containerd/containerd.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A instalação do Docker agora oferece não apenas o serviço Docker (daemon), mas também o utilitário de linha de comando docker ou o cliente Docker. Vamos explorar como usar o comando docker mais adiante neste tutorial.</p><h2 id="passo-2-—-executando-o-comando-docker-sem-sudo-opcional" tabindex="-1"><a class="header-anchor" href="#passo-2-—-executando-o-comando-docker-sem-sudo-opcional" aria-hidden="true">#</a> Passo 2 — Executando o Comando Docker sem Sudo (Opcional)</h2><p>Por padrão o comando docker só pode ser executado pelo usuário root ou por um usuário do grupo docker, que é automaticamente criado durante o processo de instalação do Docker. Se você tentar executar o comando docker sem prefixá-lo com sudo ou sem estar no grupo docker, você obterá uma saída como esta:</p><p>Output docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?. See &#39;docker run --help&#39;. Se você quiser evitar digitar sudo sempre que você executar o comando docker, adicione seu nome de usuário ao grupo docker:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> nome-do-usuario
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para aplicar a nova associação ao grupo, efetue logout do servidor e faça logon novamente ou digite o seguinte:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> - nome-do-usuario
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Você será solicitado a entrar com seu usuário e senha para continuar.</p><p>Confirme que seu usuário está agora adicionado ao grupo docker digitando:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">id</span> <span class="token parameter variable">-nG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Saida:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Output
sammy <span class="token function">sudo</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Se você precisar adicionar um usuário ao grupo docker com o qual você não está logado, declare o nome do usuário explicitamente usando:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> nome-do-usuário
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O restante desse artigo assume que você está executando o comando docker como um usuário do grupo docker. Se você optar por não fazê-lo, por favor, prefixe os comandos com sudo.</p><p>😃</p>`,40))])}const b=o(u,[["render",p],["__file","index.html.vue"]]);export{b as default};