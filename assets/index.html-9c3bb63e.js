import{_ as i,M as r,p as l,q as d,a1 as t,R as s,t as e,N as o}from"./framework-de6eff89.js";const c={},p={href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"},u={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},m={href:"http://localhost:9000",target:"_blank",rel:"noopener noreferrer"},v={start:"3"},k={href:"http://localhost:9000",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost:9000/account/security",target:"_blank",rel:"noopener noreferrer"},g={href:"http://localhost:9000/projects",target:"_blank",rel:"noopener noreferrer"};function f(x,n){const a=r("ExternalLinkIcon");return l(),d("div",null,[n[18]||(n[18]=t('<h1 id="sonarqube-instalacao-inicial" tabindex="-1"><a class="header-anchor" href="#sonarqube-instalacao-inicial" aria-hidden="true">#</a> Sonarqube - Instalação inicial</h1><h2 id="instalacao-projeto" tabindex="-1"><a class="header-anchor" href="#instalacao-projeto" aria-hidden="true">#</a> Instalação projeto</h2><h3 id="requerimentos-tecnicos" tabindex="-1"><a class="header-anchor" href="#requerimentos-tecnicos" aria-hidden="true">#</a> Requerimentos técnicos</h3>',3)),s("p",null,[n[1]||(n[1]=e("Docker - ",-1)),s("a",p,[n[0]||(n[0]=e("https://www.docker.com/get-started",-1)),o(a)])]),s("p",null,[n[3]||(n[3]=e("Git - ",-1)),s("a",u,[n[2]||(n[2]=e("https://git-scm.com/downloads",-1)),o(a)])]),n[19]||(n[19]=t(`<h2 id="primeiros-passos" tabindex="-1"><a class="header-anchor" href="#primeiros-passos" aria-hidden="true">#</a> Primeiros passos</h2><p>Configuração SonarQube</p><ol><li>Execute o servidor SonarQube</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name sonarqube -p 9000:9000 sonarqube:7.5-community
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O projeto Sonarquebe deve estar iniciando.</p>`,5)),s("p",null,[n[5]||(n[5]=e("Entre em ",-1)),s("a",m,[n[4]||(n[4]=e("http://localhost:9000",-1)),o(a)]),n[6]||(n[6]=e(".",-1))]),n[20]||(n[20]=t(`<ol start="2"><li>Execute e verifique se um servidor está instalado e executando:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2)),s("ol",v,[s("li",null,[s("p",null,[n[8]||(n[8]=e("Aguarde o servidor iniciar e efetue login no servidor SonarQube em ",-1)),s("a",k,[n[7]||(n[7]=e("http://localhost:9000",-1)),o(a)]),n[9]||(n[9]=e(" Utilize credenciais padrão: login: admin password:admin",-1))])]),s("li",null,[s("p",null,[n[11]||(n[11]=e("Acesse: ",-1)),s("a",b,[n[10]||(n[10]=e("http://localhost:9000/account/security",-1)),o(a)]),n[12]||(n[12]=e(" e gere um token.",-1))])]),n[13]||(n[13]=s("li",null,[s("p",null,"Copie o valor do token e salve-o em algum lugar, pois você não poderá vê-lo novamente! Você precisará mais tarde neste tutorial.")],-1)),n[14]||(n[14]=s("li",null,[s("p",null,"Crie uma nova pasta para a imagem do Scanner SonarQube dockerfile.")],-1))]),n[21]||(n[21]=t(`<p>Está pasta será responsável para executar os scanners de código dos projetos que você precisar.</p><p>Execute:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir sonarqube-scanner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Agora entraremos na pasta para criar os arquivos docker.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd sonarqube-scanner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Criaremos o Dockerfile.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Agora edite este arquivo com estas informações:</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># This is docker file for our sonarqube-scanner. You don&#39;t need to read it since</span>
<span class="token comment"># the goal of this tutorial isn&#39;t about teaching docker or about presenting the best</span>
<span class="token comment"># way for creating Sonarqube scanner image. Of course feel free to check on it if you like.</span>
<span class="token comment"># Get dotnetcore SDK</span>
<span class="token instruction"><span class="token keyword">FROM</span> microsoft/dotnet:2.2.104-sdk <span class="token keyword">AS</span> sonarqube</span>
<span class="token comment"># Install OpenJDK-8</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y openjdk-8-jdk &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y ant &amp;&amp; <span class="token operator">\\</span>
    apt-get clean;</span>
<span class="token comment"># Fix certificate issues</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; <span class="token operator">\\</span>
    apt-get install ca-certificates-java &amp;&amp; <span class="token operator">\\</span>
    apt-get clean &amp;&amp; <span class="token operator">\\</span>
    update-ca-certificates -f;</span>
<span class="token comment"># Setup JAVA_HOME</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/</span>
<span class="token instruction"><span class="token keyword">RUN</span> export JAVA_HOM</span>
<span class="token comment"># Env variables</span>
<span class="token instruction"><span class="token keyword">ENV</span> NODE_VERSION 10.13.0</span>
<span class="token instruction"><span class="token keyword">ENV</span> NODE_DOWNLOAD_SHA b4b5d8f73148dcf277df413bb16827be476f4fa117cbbec2aaabc8cc0a8588e1</span>
<span class="token comment"># Install node.js</span>
<span class="token instruction"><span class="token keyword">RUN</span> curl -SL <span class="token string">&quot;https://nodejs.org/dist/v\${NODE_VERSION}/node-v\${NODE_VERSION}-linux-x64.tar.gz&quot;</span> --output nodejs.tar.gz <span class="token operator">\\</span>
    &amp;&amp; echo <span class="token string">&quot;$NODE_DOWNLOAD_SHA nodejs.tar.gz&quot;</span> | sha256sum -c - <span class="token operator">\\</span>
    &amp;&amp; tar -xzf <span class="token string">&quot;nodejs.tar.gz&quot;</span> -C /usr/local --strip-components=1 <span class="token operator">\\</span>
    &amp;&amp; rm nodejs.tar.gz <span class="token operator">\\</span>
    &amp;&amp; ln -s /usr/local/bin/node /usr/local/bin/nodejs</span>
<span class="token comment"># Install global tools</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet tool install -g dotnetsay</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet tool install --global dotnet-sonarscanner --version 4.5.0</span>
<span class="token comment"># Add global tools folder to PATH</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH=<span class="token string">&quot;\${PATH}:/root/.dotnet/tools&quot;</span></span>
<span class="token comment"># Get required packages for sonar scanner</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get -y install curl bash unzip yarn bzip2</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /root</span>
<span class="token instruction"><span class="token keyword">ENV</span> LATEST=<span class="token string">&#39;sonar-scanner-cli-3.3.0.1492-linux.zip&#39;</span></span>
<span class="token comment"># Get &amp; install sonar scanner</span>
<span class="token instruction"><span class="token keyword">RUN</span> env &amp;&amp; <span class="token operator">\\</span>
    curl -OL <span class="token string">&#39;https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/&#39;</span><span class="token variable">$LATEST</span> &amp;&amp; <span class="token operator">\\</span>
    mkdir sonar_scanner &amp;&amp; unzip -d sonar_scanner <span class="token variable">$LATEST</span> &amp;&amp; mv sonar_scanner/* sonar_home &amp;&amp; <span class="token operator">\\</span>
    rm -rf sonar_scanner <span class="token variable">$LATEST</span></span>
<span class="token comment"># Add sonar scanner to PATH</span>
<span class="token instruction"><span class="token keyword">ENV</span> SONAR_RUNNER_HOME=/root/sonar_home</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${SONAR_RUNNER_HOME}</span>/bin:<span class="token variable">$PATH</span></span>
<span class="token instruction"><span class="token keyword">ARG</span> SONAR_HOST</span>
<span class="token instruction"><span class="token keyword">ARG</span> SONAR_LOGIN_TOKEN</span>
<span class="token comment"># make temporary folder for seed analysis for javascript scanner</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/temp1</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir src</span>
<span class="token instruction"><span class="token keyword">RUN</span> touch src/test.js</span>
<span class="token comment"># Init sonarscanner cache with plugins</span>
<span class="token instruction"><span class="token keyword">RUN</span> sonar-scanner -Dsonar.host.url=<span class="token variable">$SONAR_HOST</span> -Dsonar.login=<span class="token variable">$SONAR_LOGIN_TOKEN</span> -Dsonar.analysis.mode=preview -Dsonar.projectKey=<span class="token string">&quot;pluginsSeedJS&quot;</span> -Dsonar.sources=<span class="token string">&quot;src&quot;</span></span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /root</span>
<span class="token comment"># Remove temporary folder</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm /root/temp1 -rf</span>
<span class="token comment"># make temporary folder for seed analysis</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/temp2</span>
<span class="token comment"># Init sonarscanner cache with plugins for .NET scanner</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet sonarscanner begin /k:<span class="token string">&quot;pluginsSeedNET&quot;</span> /d:sonar.host.url=<span class="token variable">$SONAR_HOST</span> /d:sonar.login=<span class="token variable">$SONAR_LOGIN_TOKEN</span> /d:sonar.analysis.mode=preview</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet new sln --name FooBar</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet new mvc --name Foo --output Foo</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet new console --name Bar --output Bar</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet sln add ./Foo/Foo.csproj</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet sln add ./Bar/Bar.csproj</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet restore</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet build FooBar.sln</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet sonarscanner end /d:sonar.login=<span class="token variable">$SONAR_LOGIN_TOKEN</span> ; exit 0</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /root</span>
<span class="token comment"># Remove temporary folder</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm /root/temp2 -rf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ainda dentro da pasta que acabamos de criar executaremos o seguinte comando:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build --network=host --tag sonar-scanner-image:latest --build-arg SONAR_HOST=&quot;http://localhost:9000&quot; --build-arg SONAR_LOGIN_TOKEN=&quot;TOKEN_VALUE&quot; .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lembre-se de substituir &quot;TOKEN_VALUE&quot; pelo seu token criado na etapa 4.</p><p>Pronto!</p><h2 id="executando-o-scanner-em-um-projeto" tabindex="-1"><a class="header-anchor" href="#executando-o-scanner-em-um-projeto" aria-hidden="true">#</a> Executando o Scanner em um projeto</h2><p>Agora baixe o(s) projeto(s) que deve(m) passar pelo scanner nesta pasta.</p><ol><li>Entre no diretório do projeto e crie o .dockerignore</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch .dockerignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Neste arquivo que acabamos de criar adicione o seguinte (e as demais pastas que deseje que o sonarquebe ignore durante o scanner):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.dockerignore
.vs
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Crie um Dockerfile dentro do projeto a ser scanneado, e adicione o seguinte código:</li></ol><blockquote><p>OBS: (caso ele já exista o substitua).</p></blockquote><blockquote><p>SONAR_PROJECT_KEY = Nome do projeto Scanneado</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># It is our freshly build sonar-scanner-image from previous steps that
# is used here as a base image in docker file that we will be working on
FROM sonar-scanner-image:latest AS sonarqube_scan
# Here we are setting up a working directory to /app. It is like using \`cd app\` command
WORKDIR /app
# Copying all files from the project directory to our current location (/app) in image
# except patterns mention in .dockerignore
COPY . .
# Execution of example command. Here it is used to show a list of files and directories.
# It will be useful in later exercises in this tutorial.
RUN ls -list
# To execute sonar-scanner we just need to run &quot;sonar-scanner&quot; in the image.
# To pass Sonarqube parameter we need to add &quot;-D&quot;prefix to each as in the example below
# sonar.host.url is property used to define URL of Sonarqube server
# sonar.projectKey is used to define project key that will be used to distinguish it in
# sonarqube server from other projects
# sonar.sources directory for sources of project
RUN sonar-scanner \\
    -Dsonar.host.url=&quot;http://localhost:9000&quot; \\
    -Dsonar.projectKey=&quot;SONAR_PROJECT_KEY&quot; \\
    -Dsonar.sources=. \\

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Agora, ainda dentro do diretório do projeto execute:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build --network=host --no-cache .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25)),s("p",null,[n[16]||(n[16]=e("Após o termino do scanner. Ao entrar em ",-1)),s("a",g,[n[15]||(n[15]=e("http://localhost:9000/projects",-1)),o(a)]),n[17]||(n[17]=e(" você verá o seu projeto.",-1))])])}const h=i(c,[["render",f],["__file","index.html.vue"]]);export{h as default};
