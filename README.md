<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
    <h3 align="center">Let's know some dogs!</h3>
    <img src="./src/assets/puppy.png" alt="Logo" width="80">
    <p align="center">
        Conheça diversas raças de cães, suas características, fotos e se apaixone!
    </p>
</div>

## Sobre o Projeto

![Know some dogs Screenshot][project-screenshot]

Este projeto foi criado como resultado de um desafio proposto pela Oxeanbits, para a carga de desenvolvedor front end. Ele traz o consumo de uma API de cachorros (The Dog API) e lista resultados sobre diversas raças de cães.

Escolha uma raça específica, ou gere uma lista de cães aleatórios, e confira os resultados:
* Foto com nome da raça
* Altura
* Peso
* Expectativa de vida
* Temperamento

Adicionalmente, ao clicar sobre a foto de qualquer cachorro, uma nova aba irá se abrir contendo a página da wikipedia (em inglês) sobre aquela raça de cachorro.

<p align="right">(<a href="#readme-top">início ↑</a>)</p>

### Construído com

Este site foi criado com:
* [![React][React.js]][React-url]
* [![Kendo][Kendo]][Kendo-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]
* [![Jest][Jest]][Jest-url]

O projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

<p align="right">(<a href="#readme-top">início ↑</a>)</p>

## Iniciando

Para obter uma cópia local e rodar o projeto, siga os passos a seguir.

### Pré-requisitos

É preciso ter a ferramente npm instalada em seu dispositivo. Caso não tenha, instale [Node.js](https://nodejs.org/en), e a ferramenta virá junto com ele.

Para verificar se sua máquina já possui tanto Node.js quando npm instalados, abra o Terminal, ou outra ferramente de linha de comando, e digite:

* Para verificar a versão do node.js:
```sh
>node -v
v19.1.0
```

* Para verificar a versão do npm:
```sh
>npm -v
8.19.3
```

Não é preciso que os números das versões sejam exatamente os mesmos mostrados acima. Basta que alguma versão esteja presente.

### Instalação

1. Obtenha uma chave gratuita para a API

O projeto utiliza [The Dog API](https://www.thedogapi.com/), uma API cuja licença precisa ser obtida previamente. Sem uma licença, a API tem retorno muito limitado, o que torna diminui em muito as funcionalidades do site.

Uma chave gratuita de utilização da API pode ser obtida [neste link](https://www.thedogapi.com/signup). Após o registro, você receberá uma chave por email. Ela será utilizada em outro passo abaixo.

2. (Opcional) Obtenha uma licença de teste para o Kendo UI

O projeto utiliza KendoReact, uma biblioteca de componentes gráficos da Progress para React. O projeto pode rodar sem uma licença, mas terá o risco de apresentar marcas d'água sobre seus componentes, além de alertas de falta de licença no console.

Para obter uma licença gratuita de 30 dias, [crie uma conta](https://www.telerik.com/try/kendo-react-ui) na Progress e siga os passos. Após solicitar a chave de teste e logar na conta, você poderá baixar um arquivo chamado kendo-ui-license.txt. Ele será utilizado mais adiante.

3. Faça um clone do repositório
```sh
git clone https://github.com/ChristianPerrotta/challenge-react-dog-api.git
```

4. Com a pasta do projeto aberta, instale os pacotes via npm
```sh
npm install
```

5. Crie um arquivo `.env` na raiz do projeto e inclua sua chave da The Dog API recebia por email anteriormente. É importante que o nome da variável seja exatamente esta, iniciada com `REACT_APP_`. Inclua sua chave sem aspas e sem os sinais de  `[ ]`.
```sh
REACT_APP_DOG_API_KEY=[SUA CHAVE AQUI]
```

6. (Opcional) Ative sua licença teste para o Kendo UI

Caso tenha obtido uma licença teste, você terá um arquivo kendo-ui-license.txt baixado. Copie o arquivo inteiro para a raiz do projeto e, em seguida, rode o seguinte comando no terminal:
```sh
npx kendo-ui-license activate
```
Por vezes, mesmo que a licença tenha sido ativada, o console pode ainda acusar o contrário. Para casos como este, caso queira, consulte as [orientações do Kendo React](https://www.telerik.com/kendo-react-ui/components/my-license/).

<p align="right">(<a href="#readme-top">início ↑</a>)</p>

## Scripts disponíveis

No diretório do projeto, você pode rodar:

### `npm start`

Roda o app em modo de desenvolvimento. Uma janela abrirá automaticamente em seu navegador, ou você pode abrir manualmente em [http://localhost:3000](http://localhost:3000).

A página irá recarregar automaticamente quando você fizer mudanças.

### `npm test`

Inicia os testes criados na pasta `/test`, com jester, e ativa seu `watch mode`.

### `npm run build`

Monta o app para produção na pasta `build`.

<p align="right">(<a href="#readme-top">início ↑</a>)</p>

## Contato

Christian Perrotta - chr.perrotta@gmail.com

Link do projeto: [https://github.com/ChristianPerrotta/challenge-react-dog-api](https://github.com/ChristianPerrotta/challenge-react-dog-api)

<p align="right">(<a href="#readme-top">início ↑</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/ChristianPerrotta/challenge-react-dog-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/christian-perrotta-17422b114/
[project-screenshot]: src/assets/project-screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Kendo]: https://img.shields.io/badge/Kendo_UI-limegreen?style=for-the-badge&logo=progress&logoColor=white
[Kendo-url]: https://www.telerik.com/kendo-react-ui
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/pt-BR/