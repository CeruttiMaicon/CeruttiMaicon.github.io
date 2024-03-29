---
sidebar: auto
---
# Instalação de programas

Com o PC zerado acesse a documentação de tema que desejar na aba Sistemas Operacionais.

## Programas essenciais

Instale o VSCode do Gerenciador de Aplicativos ou do [site oficial](https://code.visualstudio.com/).

## Configurações VSCode

### Setting Sync

Apenas instale a extenção do [Setting Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) que você pode encontrar dentro do VSCode.

Após fazer a instalação, faça o login no seu GitHub atraves da extenção Setting Sync. E vincule ao seu unico repositorio de Gists.

<img src="/images/setting-sync.png">

Após fazer isso. Feche o seu VSCode e abra novamente.

Para baixar as configurações do Gists do seu GitHub utilize o atalho.

```
Shift + Alt + D
```

Está será a saida em seu terminal.
<img src="/images/output-setting-sync-download-extensions.png">

E reinicie seu VSCode.

Ao inserir novas extenções para atualizar o seu Gist utilize o atalho.

```
Shift + Alt + U
```

## Fira Code

Instale a fonte com o comando:

```bash
sudo apt install fonts-firacode
```

## Programas a serem instalados

### Já possuem instruções de instalação

- [Docker](/docker-install/)
- [Docker-compose](/docker-compose/)
- Containers Laradock
- Postman
- [Bootsnote](https://boostnote.io/)
- [Spotify](https://www.spotify.com/br/download/linux/)

### NPM

Atualize os pacotes

```bash
sudo apt update
```

Instale o NVM (é um gerenciador de versão do node):

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Acesse o site do Node para saber a versão mais atual.
> 16.13.2 LTS (atualizado em: 02-02-2022)

```bash
nvm install 16.13.2
```

```bash
nvm use 16.13.2
```

Para verificar qual versão do Node.js você tem instalada após esses passos iniciais, digite:

```bash
nodejs -v
```

### PNPM

Instalação do PNPM

```bash
npm install -g pnpm
```

### ZSH

```bash
sudo apt install zsh
```

> Após ter o NPM instalado você também pode instalar o spaceship-prompt

```bash
npm install spaceship-prompt
```

**zsh-autosuggestions**: vai sugerir comandos baseados no seu histórico.

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions SH_CUSTOM/plugins/zsh-autosuggestions
```

Daí adicione zsh-autosuggestions na lista de plugins do seu “~/.zshrc”:

**~/.zshrc**:
```
plugins=(git sudo zsh-autosuggestions)
```



### Identidade Git

Criando Identidade Git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Verificando se está tudo certo

```bash
git config --list
user.name=John Doe
user.email=johndoe@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

### Chave SSH

Criando chave SSH

```bash
ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/schacon/.ssh/id_rsa):
Created directory '/home/schacon/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/schacon/.ssh/id_rsa.
Your public key has been saved in /home/schacon/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 schacon@mylaptop.local
```

Verificando chave

```
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== schacon@mylaptop.local
```

## Referências

[Brennen Bearnes](https://www.digitalocean.com/community/users/bpb) e [Kathleen Juell](https://www.digitalocean.com/community/users/katjuell). **Como instalar o Node.js no Ubuntu 18.04**. [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-pt](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-pt) Acesso em 14 dez 2019.

[Git no Servidor Generating Your SSH Public Key](https://git-scm.com/book/pt-pt/v2/Git-no-Servidor-Generating-Your-SSH-Public-Key)

[Getting Started First Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
