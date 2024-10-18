import{_ as e,p as s,q as n,a1 as o}from"./framework-35a8e870.js";const i="/images/terminalamazon.png",d={};function t(r,a){return s(),n("div",null,a[0]||(a[0]=[o(`<h1 id="amazon-s3-download-bucket-s3" tabindex="-1"><a class="header-anchor" href="#amazon-s3-download-bucket-s3" aria-hidden="true">#</a> Amazon S3 Download bucket S3</h1><h2 id="fazendo-o-download-completo-de-um-bucket-no-amazon-s3" tabindex="-1"><a class="header-anchor" href="#fazendo-o-download-completo-de-um-bucket-no-amazon-s3" aria-hidden="true">#</a> Fazendo o Download completo de um Bucket no Amazon S3</h2><p>Primeiramente é necessário fazer a instalação do AWS CLI, uma ferramenta da Amazon para fazer o gerenciamento de suas tecnologias.</p><h2 id="instalacao-das-ferramentas-necessarias" tabindex="-1"><a class="header-anchor" href="#instalacao-das-ferramentas-necessarias" aria-hidden="true">#</a> Instalação das ferramentas necessárias.</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python2.7
<span class="token function">curl</span> <span class="token parameter variable">-O</span> https://bootstrap.pypa.io/get-pip.py
<span class="token function">sudo</span> python2.7 get-pip.py
<span class="token function">sudo</span> pip <span class="token function">install</span> awscli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se a instalação der certo execute este comando, e terá em vista manual com todos os comandos disponíveis.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aws <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configura-aws-cli" tabindex="-1"><a class="header-anchor" href="#configura-aws-cli" aria-hidden="true">#</a> Configura AWS CLI</h2><p>A próxima etapa é configurar o AWS CLI</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aws configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Daqui em diante é necessário ter a chave de acesso dada do sistema da AWS, para ver estas configurações entre no sistema da AWS, e em seguida clique no seu nome de usuário, abrirá um menu dropdown, e vá na seguinte configuração &quot;My Security Credentials&quot;.</p><p><em>Ao entrar nesta pagina clique em &quot;Continue to Security Credentials&quot;.</em></p><p>Em seguida na categoria de menu com o nome &quot;Chaves de acesso (ID da chave de acesso e a chave de acesso secreta)&quot;. Se já existir uma chave de acesso a utilize, ou crie uma nova e depois a torne inativa depois de fazer seu uso(apenas como medida de segurança).</p><p>No ultimo comando dado acima insira as seguintes informações:</p><img src="`+i+`"><p>Após esta configuração você já esta credenciado a trabalhar com a ferramenta do AWS CLI.</p><p>Para fazer o download do seu Bucket, crie uma pasta por terminal de comando, (dentro desta pasta os arquivos do Bucket seram baixados).</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/DownloadBucketS3
<span class="token builtin class-name">cd</span> ~/DownloadBucketS3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>E agora para baixar o conteúdo do bucket faça o seguinte comando:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aws s3 <span class="token function">sync</span> s3://mybucket <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>No lugar de <strong>&quot;mybucket&quot;</strong> coloque o nome real do bucket que você pretende baixar.</p><p>Seu download começara imediatamente...</p><p>Após terminar suas tarefas, se desejar, você pode deletar a chave de acesso para aumentar ainda mais a segurança do seu bucket.</p>`,23)]))}const u=e(d,[["render",t],["__file","index.html.vue"]]);export{u as default};
