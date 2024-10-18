import{_ as n,p as e,q as s,a1 as o}from"./framework-35a8e870.js";const i={};function r(d,a){return e(),s("div",null,a[0]||(a[0]=[o(`<h1 id="python-instalacao-ubuntu-mint" tabindex="-1"><a class="header-anchor" href="#python-instalacao-ubuntu-mint" aria-hidden="true">#</a> Python - Instalação Ubuntu/Mint</h1><p>Inicialmente o Python já vem instalado no Ubuntu/Mint (ou qualquer outra distribuição Linux), mas ele vem na versão 2.7.</p><p>Para deixar ele na versão 3 faça o seguinte procedimento:</p><p>Verifique se ele já está instalado:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ele irá retornar a versão do Python.</p><p>Agora basta mudarmos para deixar o link simbólico da chamada do comando correto, fazendo o seguinte:</p><h2 id="passo-1-remover-o-antigo-link" tabindex="-1"><a class="header-anchor" href="#passo-1-remover-o-antigo-link" aria-hidden="true">#</a> Passo 1: Remover o antigo link:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> /usr/bin/python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="passo-2-criando-o-novo-link-apontando-para-python3" tabindex="-1"><a class="header-anchor" href="#passo-2-criando-o-novo-link-apontando-para-python3" aria-hidden="true">#</a> Passo 2: Criando o novo link apontando para Python3</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> python3 /usr/bin/python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pronto! agora digitando o comando &#39;python&#39; ele já ira funcionar na versão 3.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13)]))}const l=n(i,[["render",r],["__file","index.html.vue"]]);export{l as default};