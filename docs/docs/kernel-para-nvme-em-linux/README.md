# Ajuste de Kernel para NVMe em Linux

## Reduzir Travamentos e Aumentar Estabilidade

Problema ocorria muito, muitos travamentos do computador ao usar Docker, ou mesmo ao abrir o navegador com muitas abas.
A solução é simples e rápida, mas pode fazer uma grande diferença na estabilidade do sistema.

## Resumo

- **Problema**: Discos NVMe de alta velocidade entram em modo de economia de energia, causando travamentos e quedas de performance.
- **Solução**: Desabilitar os estados de economia de energia do NVMe no kernel Linux.
- **Resultado**: Sistema mais estável, sem travamentos repentinos, especialmente sob carga intensa de I/O.

## Introdução

Em ambientes Linux modernos com discos NVMe de alta velocidade (especialmente PCIe Gen4 ou Gen5), o kernel padrão permite que o SSD entre em estados de economia de energia.  
Embora isso ajude a reduzir consumo energético, pode **gerar travamentos repentinos** ou **quedas de performance** quando o sistema precisa acessar rapidamente o disco sob alta carga de I/O (como rodando Docker, testes pesados, ou aplicativos que fazem muitas leituras/escritas).

Para evitar esse problema, é recomendado **desabilitar os estados de economia de energia no NVMe**.  
Isso mantém o disco sempre ativo e elimina travamentos relacionados a latência de acesso.

## Solução

Ajustar o kernel adicionando o parâmetro:

```bash
nvme_core.default_ps_max_latency_us=0
```

Esse parâmetro:

- Desativa modos de economia de energia do NVMe
- Mantém o SSD sempre pronto para acesso
- Previne travamentos e quedas para tela initramfs
- Consome uma quantidade desprezível a mais de energia, sem impactos reais em desktop

## Passos para aplicar a solução

### 1. Editar o arquivo de configuração do GRUB

Abra o terminal e edite o GRUB:

```bash
sudo nano /etc/default/grub
```

### 2. Localizar a linha de parâmetros do kernel

Procure pela linha:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```
e modifique para:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nvme_core.default_ps_max_latency_us=0"
```

::: tip NOTA
Se já existirem outros parâmetros dentro das aspas, apenas adicione `nvme_core.default_ps_max_latency_us=0` ao final, separado por espaço.
:::

### 3. Atualizar o GRUB

Após salvar a alteração (Ctrl + O, Enter, depois Ctrl + X para sair), atualize o GRUB:

```bash
sudo update-grub
```
### 4. Reiniciar o computador

Finalmente, reinicie a máquina para aplicar a nova configuração:

```bash
sudo reboot
```

## Por que esse ajuste é necessário?

- Discos NVMe de alta performance são muito rápidos, mas o padrão do Linux permite que eles "durmam" para economizar energia.
- Quando o sistema precisa acessar o disco que está "adormecido", há uma latência de wake-up que pode causar:
  - Travamentos rápidos
  - Quedas de performance
  - Tela de recuperação (initramfs) se o disco não responde a tempo

- Desativando o modo de economia (default_ps_max_latency_us=0), o disco permanece totalmente acordado e elimina os problemas de latência.

- Essa solução é altamente recomendada para quem usa Ubuntu, Fedora, Arch, ou derivados com hardware moderno.

## Resultado Esperado

Após aplicar esse ajuste:

- Sistema muito mais estável mesmo sob uso intenso (ex.: containers Docker, grandes operações de disco).
- Nenhum travamento relacionado a NVMe esperado.
- SSD funcionando no máximo desempenho o tempo todo.