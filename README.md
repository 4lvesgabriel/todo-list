# Lista de tarefas simples desenvolvida 100% utilizando um celular android

A proposta desse projeto era tentar configurar um ambiente para desenvolver projetos simples em um celular com Android 13. É possivel baixar o repositório e rodar o código localmente,
ou acessar o link construido com o GitHub Pages, [clicando aqui](https://4lvesgabriel.github.io/todo-list/). O projeto em si é relativamente simples, apenas uma lista de tarefas utilizando HTML, CSS e JavaScript. Nele, é possivel adicionar e excluir itens. O projeto não tem uma conexão de banco de dados, então não salva os registros quando a página é recarregada. 
<br><br>
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/4lvesgabriel/todo-list)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/4lvesgabriel/todo-list)

## Tecnologias usadas nesse projeto

![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![VsCode](https://img.shields.io/badge/VsCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## A minha experiência com Termux e o Debian

Eu utilizei apenas um Samsung Galaxy M32 com Android 13 de 2020 para configurar o ambiente, iniciar o repositório, desenvolver e testar o projeto. Eu testei um teclado e um mouse utilizando um hub usb e apesar de ser possível, por conta da tela pequena e o comportamento um pouco estranho do teclado virtual do dispositivo enquanto o teclado estava conectado, o meu workflow foi um pouco prejudicado e eu decidi seguir o desenvolvimento apenas usando o celular.

<br>

Esse projeto não foi feito diretamente no android, por que até o momento não encontrei nenhuma IDE/Editor de Texto nativo que consegue substituir uma mais comum ([VsCode](https://code.visualstudio.com/docs), [VIM](https://www.vim.org/docs.php), [NANO](https://www.nano-editor.org/docs.php)...). Então, ele só foi possivel de ser feito utilizando o [Termux](https://termux.dev/en/), um emulador de terminal que torna possivel executar comandos de linux em celulares android. Com ele, pude instalar uma versão modificada pela equipe do aplicativo [Andronix](https://docs.andronix.app/) da distro linux [Debian](https://www.debian.org/) para processadores com arquitetura ARM com a interface gráfica XFCE, e acessar o sistema por meio de um servidor VNC do próprio celular.

<br>

Eu também testei a distro [Ubuntu](https://ubuntu.com/), porém tive uma experiência melhor com o Debian, pois no Ubuntu algumas coisas não funcionaram muito bem e no Debian o processo foi mais rápido. O processo de instalação é bem simples, apenas seguindo os tutoriais nas documentações do Termux e do Andronix é possivel realizar a instalação de diversas distros sem muitos problemas, depois a maior parte da preparação/configuração acontece dentro do ambiente linux, então basta seguir tutoriais e a documentação do que você quer instalar para a distro escolhida.

<br>

Utilizando o terminal, eu instalei o GIT, o VsCode com algumas extensões que eu costumo usar. Também fiz algumas customizações na interface gráfica, e deixei a UI mais parecida com o MacOS, instalei o Nautilus pra gerenciar os arquivos. Depois disso tudo iniciei o repositório, desenvolvi a página e realizei testes usando a extensão LiveServer pra acessar um servidor local.

<br>

Usar apenas a touchscreen do celular não é a forma mais produtiva de escrever códigos (na minha opinião), mas dá pro gasto. Eu usei o RealVNC, e podia controlar um mouse com a tela e tinha alguns botões e comandos pra usar o segundo clique, rolar e emular alguns comandos que são mais comuns num desktop. Pra projetos mais complicados (ou que tenham mais de 3 arquivos) provavelmente usar um hub, uma dock ou periféricos bluetooth provavelmente são a melhor escolha, mas eu recomendaria algum tipo de tela se o seu celular não tem uma tela tão grande (a minha tem 6.4 polegadas). Em questão de performance, por mais que não seja das melhores, nem tão fluida como em um computador convencional, é bem aceitavel. Com um Helio G80 MediaTek e 6gb de memória ram eu consegui me adaptar bem. Mas em dispositivos mais antigos ou menos potentes, também é possivel instalar as distros apenas com o terminal, e utilizar algo como o Nano ou o Vim pra desenvolver (entre os dois, preferi o Vim mas ainda tô mais acostumado com o vscode), e se você quiser mais praticidade ainda você não precisa nem instalar uma distro, apenas usando o Termux você consegue desenvolver com o terminal ou instalar o [code-server](https://coder.com/docs/code-server) (uma versão do vscode que é acessada pelo navegador), mas com meu conhecimento atual eu me senti limitado e tive mais problemas para fazer funcionar.

<br>

Resumidamente, é completamente possível desenvolver projetos simples ou só editar um código utilizando um celular android, o Termux te dá uma liberdade bem grande pra fazer bastante coisa e tem uma compatibilidade bem grande com diversos aplicativos (até onde eu sei, todos que tiverem suporte a arquitetura arm), principalmente pra quem tá começando a estudar programação e só tem um celular (ou quer aprender mais sobre linux) é uma ferramenta muito poderosa de aprendizado, e isso é só a ponta do iceberg.
