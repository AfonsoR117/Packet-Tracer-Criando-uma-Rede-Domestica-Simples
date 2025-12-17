
## Packet Tracer – Criação de uma Rede Simples

### Objetivo

O objetivo desta atividade foi projetar e implementar uma rede simples utilizando o **Cisco Packet Tracer**, no ambiente **Logical Workspace**, realizando a configuração básica dos dispositivos finais (PC e Laptop) e verificando a conectividade com a Internet.

---

## Parte 1: Construção da Rede

### 1. Adição dos Dispositivos de Rede

Foram inseridos no ambiente de simulação os seguintes dispositivos:

* **PC** (End Devices > PC)
* **Laptop** (End Devices > Laptop)
* **Cable Modem** (Network Devices > WAN Emulation > Cable Modem)

O **cable modem** foi utilizado como equipamento intermediário para conectar a rede local ao provedor de serviços de Internet (ISP), utilizando um cabo coaxial. Esse dispositivo tem a função de converter o sinal coaxial em uma conexão Ethernet, permitindo a comunicação com os dispositivos da rede interna.

---

### 2. Alteração dos Nomes dos Dispositivos

Para facilitar a identificação no ambiente de trabalho, os dispositivos tiveram seus nomes de exibição alterados da seguinte forma:

* PC → **PC**
* Laptop → **Laptop**
* Cable Modem → **Cable Modem**

---

### 3. Cabeamento Físico

A interligação dos dispositivos foi realizada conforme descrito abaixo:

* **PC ao Roteador Sem Fio**: Utilizou-se um cabo de cobre do tipo *straight-through*, conectado à interface **FastEthernet 0** do PC e à interface **Ethernet 1** do roteador sem fio.
* **Roteador Sem Fio ao Cable Modem**: Foi utilizado outro cabo *straight-through*, conectado à interface **Internet** do roteador sem fio e à **Porta 1** do cable modem.
* **Cable Modem à Internet**: A conexão com a Internet foi realizada por meio de um cabo **coaxial**, ligando a **Porta 0** do cable modem à interface **coaxial 7** da nuvem de Internet.

---

## Parte 2: Configuração dos Dispositivos Finais e Testes de Conectividade

### 1. Configuração do PC e do Laptop

* O **PC** foi conectado à rede por meio de uma interface Ethernet cabeada.
* No **Laptop**, a placa de rede cabeada foi substituída por uma **placa de rede sem fio (Wireless NIC)**, permitindo sua conexão ao roteador sem fio.

---

### 2. Verificação da Conectividade

Após a configuração dos endereços IP nos dispositivos finais (PC e Laptop), foi realizado um teste de conectividade com o endereço **cisco.srv**.
A atribuição dos endereços IP permitiu a identificação dos dispositivos na rede e a comunicação entre eles, respeitando as regras do **Protocolo IP (Internet Protocol)**.

---

## Conclusão

Com a realização desta atividade, foi possível criar e configurar com sucesso uma rede simples no Cisco Packet Tracer, conectando dispositivos finais a um ISP por meio de um cable modem. Os testes confirmaram que tanto o PC quanto o Laptop estavam devidamente configurados e aptos a acessar a Internet, demonstrando o funcionamento correto da infraestrutura de rede implementada.
