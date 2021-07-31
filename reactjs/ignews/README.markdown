---
title: "Ignews"
output: html_document
---

# IGNEWS
Aplicação para iscrição em newsletter com assinatura via stripe.

<p align="center">
<a href="#sobre">Sobre o projeto</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#requisitos-do-ambiente">Configurações</a> |
<a href="#licença">Lincença</a> |
<a href="#autor">Autor</a>
</p>

---

<br />
<br />

## Sobre
---
Este projeto tem como objetivo de estudo o desenvolvimento de aplicações ReactJS com o framework [NextJS](https://nextjs.org/) (criado pela [Vercel](https://vercel.com/)) aplicado neste exemplo para controle de listagem de posts em um sistema de inscrição por assinatura.

Foi projeto usando a exemplo o consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), [STRIPE](https://stripe.com/) (plataforma de pagamentos) para o gerenciamento das assinaturas, [NextAuth.js](https://next-auth.js.org/) para a autenticação com o Github, [FaunaDB](https://fauna.com/) para armazenar informações dos usuários em banco de dados e [Prismic CMS](https://prismic.io/) para gerenciar o conteúdo da newsletter.

- Projeto desenvolvido na prática durante as aulas do [Ignite](https://rocketseat.com.br/ignite) da [Rocketseat](https://rocketseat.com.br/)


<br />
<br />

## Tecnologias
---
Abaixo está detalhado a lista das principais tecnologias usadas para a construção da aplicação:

| Ferramenta  | Leia mais                                                        |
| ----------- | ---------------------------------------------------------------- |
| ReactJS     | [https://reactjs.org](https://reactjs.org)                       |
| NextJS      | [https://nextjs.org](https://nextjs.org)                         |
| TypeScript  | [https://www.typescriptlang.org](https://www.typescriptlang.org) |
| SASS        | [https://sass-lang.com](https://sass-lang.com)                   |
| Next-Auth   | [https://next-auth.js.org](https://next-auth.js.org)             |
| Stripe      | [https://stripe.com](https://stripe.com)                         |
| FaunaDB     | [https://fauna.com](https://fauna.com)                           |
| Prismic CMS | [https://prismic.io](https://prismic.io)                         |

<br />
<br />

## Requisitos do ambiente
Para executar o projeto você precisará ter instalado em seu sistema operacional as seguintes ferramentas:

| Ferramenta | Leia mais                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Git        | [Git](https://git-scm.com/)                                                                                      |
| npm        | [npm](https://github.com/nodesource/distributions/blob/master/README.md) ou  [yarn](https://classic.yarnpkg.com) |
| Stripe CLI | [Stripe CLI](https://stripe.com/docs/stripe-cli)                                                                 |

## Serviços externos
Você precisa ter uma conta ativa nos serviços usados neste projeto. Para criar a conta é bem simples, caso ainda não tenha uma.

| Serviço     | Leia mais                          |
| ----------- | ---------------------------------- |
| Stripe      | [Stripe](https://stripe.com/)      |
| FaunaDB     | [FaunaDB](https://fauna.com/)      |
| Prismic CMS | [Prismic CMS](https://prismic.io/) |


# Fazendo o download do Stripe-CLI
---

### Linux
1.  Baixe o arquivo ``tar.gz`` com a última versão do stripe para linux em [https://github.com/stripe/stripe-cli/releases/latest](https://github.com/stripe/stripe-cli/releases/latest)

**Nota**: Salve este arquivo dentro da pasta **stripe-cli** que está na raiz do projeto Ignews se desejar continuar usando o comando ``yarn stripe``.

2. Descompacte o arquivo usando a seguinte linha de comando estando dentro da pasta onde você baixou o arquivo compactado:
```sh
$ tar -xvf stripe_X.X.X_linux_x86_64.tar.gz
```
**Nota**: A descrição do arquivo ``stripe_X.X.X_linux_x86_64.tar.gz``, você deve substituir pelo nome correto do arquivo baixado (ex: ``stripe_1.7.0_linux_x86_64.tar.gz``).

<br />

---

<br />

### Microsoft Windows
1.  Baixe o arquivo ``stripe_X.X.X_windows_x86_64.zip`` em sua última versão do stripe para Windows em [https://github.com/stripe/stripe-cli/releases/latest](https://github.com/stripe/stripe-cli/releases/latest)

**Nota**: Salve este arquivo dentro da pasta **stripe-cli** que está na raiz do projeto Ignews se desejar continuar usando o comando ``yarn stripe``.

2. Descompacte o arquivo dentro da pasta **stripe-cli** que está na raiz do projeto Ignews.

<br />

---

<br />

### Mac-OS
1.  Baixe o arquivo ``tar.gz`` com a última versão do stripe para mac-os em [https://github.com/stripe/stripe-cli/releases/latest](https://github.com/stripe/stripe-cli/releases/latest)

**Nota**: Salve este arquivo dentro da pasta **stripe-cli** que está na raiz do projeto Ignews se desejar continuar usando o comando ``yarn stripe``.

2. Descompacte o arquivo usando a seguinte linha de comando estando dentro da pasta onde você baixou o arquivo compactado:
```sh
$ tar -xvf stripe_X.X.X_mac-os_x86_64.tar.gz
```
**Opcional**: Você pode instalar o binário para ser executado de forma global copiando-o para a pasta de uso global (ex: /usr/local/bin).

<br />
<br />

## Clonando o projeto Ignews
---
1. Vá até a pasta onde você quer baixar o prjeto.
2. Execute o comando abaixo para clonar o repositório:
```sh
$ git clone https://github.com/andrelinos/ignews.git && cd ignews
```

<br />

3. Para baixar as dependências necesárias do projeto, execute o comando abaixo:
```sh
# Para npm, mesmo procedimento, basta executar "npm" no lugar do yarn

$ yarn
```
4. Agora crie o arquivo de variáveis de ambiente com o comando abaixo:
```sh
$ cp .env.local.example .env.local
```

<br />
<br />

## O que fazer no Prismic CMS
---
### Criando estrutura dos posts no Prismic CMS
1. Crie um [novo repository](https://prismic.io/dashboard/new-repository) no Prismic CMS.
2. Informe no campo `Respository name` um nome para seu repositório (ex: meu-ignews).
3. Em `Display name (optional)` pode deixar como está.
4. Agora em `What is your role/job title?` escolha ``Developer``.
5. No campo `What technology do you plan to use in your repository?` escolha ``Next.js``
6. Escolha em `Available plans` o plano ``Free`` e clique no botão ``Create repository``
7. Selecione o Respository que você acaba de criar clicando nele.
8. Na tela seguinte, escolha ``Portuguese - Brazil`` e clique no botão ``Define as the main language`` (esta parte é apenas relacionado a configurações para o idioma, não quer dizer que o prismic ficará em português).
9. Clique agora no botão ``Create custom type`` para criar o tipo de post para seu projeto.
10. Escolha agora ``Repeatable Type`` para continuar (formato selecionado para este projeto).
11. No campo `Enter your type name`, informe a palavra ``Post`` (nome usado neste projeto).
12. Na próxima página, arrast o item ``UID`` e no campo ``Field name*`` digite ``UID`` e clique no botão ``OK``.
13. Em seguida, arraste o item ``Title`` e no campo ``Field name*`` digite ``Title`` e clique no botão ``OK``.
14. Em seguida, arraste o item ``Rich Text field`` e no campo ``Field name*`` digite ``Content``, no campo ``API ID*`` digite ``content`` e clique no botão ``OK``.
15. Por fim, clique em ``Save`` para salvar seu projeto.

### Criando seus posts
1. Clique no ícone ``Documents`` (na parte superior esquerda da tela abaixo do ícone do Prismic).
2. Agora clique no botão ``Create new`` localizado na parte superior direita da tela.
3. Então, informe o título (Title) para seu post e o conteúdo (Content).
4. Para finalizar clique em ``Save`` (na parte superior direita da tela).
5. Em seguida, no mesmo local estava `Save`, clique em ``Publish`` e em seguinte, clique em ``Publish`` novamente para publicar seu post.
6. Pronto!, está tudo certo no Prismic para você testar o projeto.
**Nota**: Publique uns 5 posts para ter uma melhor experiencia na aplicação.

<br />
<br />


## Executando o Stripe CLI
---
5. Digite no terminal estando dentro da pasta raiz do projeto Ignews o comando abaixo:

- Linux
```sh
# ./stripe listen  --forward-to localhost:3000/api/webhooks

$ yarn stripe
```

- Windows
```sh
# stripe.exe listen  --forward-to localhost:3000/api/webhooks

~ yarn stripe
```

**Nota**:
- Este script executa o comando para escutar a api do stripe. O mesmo está alistado nos scripts do arquivo.**package.json** (``./stripe listen  --forward-to localhost:3000/api/webhooks``).
- Par executar comando acima, você precisa ter o arquivo ``stripe`` dentro da pasta **stripe-cli** que está na raiz do projeto Ignews.

<br />
<br />

6. Por fim, execute a aplicação usando o comando abaixo:
```sh
# Para o npm, basta executar da mesma forma, "npm dev"

yarn dev
```

87 Pronto, basta abrir a aplicação em seu navegador acessando o endereço [http://localhost:3000](http://localhost:3000) e testar suas funcionalidades.

<br />
<br />

---

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

**Free Software, Hell Yeah!**

<br />
<br />

---

## Autor
<div
  style="
    width: 100%;
    background: #141414;
    border-radius: 8px;
    display:flex;
    justify-content: space-beteen;
    align-items: center;
    flex-wrap: wrap;
  ">
<span
  style="
    max-width: 260px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4px;
    text-align: center;
   ">
<img
  style="
    max-width:150px;
    border-radius: 4px;"
    src="https://github.com/andrelinos.png"
    alt="Avatar do autor" />
<sub><br /><b>
Andrelino Silva 🚀</b></sub></a>
</span>
<div style="margin-left:10px; flex:3">
<p
style="
  color: #9759c1;
  padding: 40px 0 40px;
  width: 100%;
  ">
    Sou apaixonado por tecnologias e quero muito criar coisas grandes e de ajudar as pessoas. Estou na luta para estudar e conciliar família, estudos, trabalho.
  </p>

  <div style="flex: 1; background: #202024;overflow-x: scroll">

  | Rede social | Saiba mais |
  | --- | --- |
  | GitHub | [https://github.com/andrelinos](https://github.com/andrelinos) |
  | Linkedin | [https://linkedin.com// in/andrelinosilva](https://linkedin.com//in/andrelinosilva) |
  | Twitter| [https://twitter.com/ _andrelinosilva](https://twitter.com/_andrelinosilva) |
  | Facebook | [https://facebook.com/ andrelinossilva](https://facebook.com/andrelinossilva/) |
  | Instagram| [https://instagram.com/andrelinossilva](https://instagram.com/andrelinossilva/) |
  | Youtube | [https://youtube.com/ c/AndrelinoSilvas](https://youtube.com/c/AndrelinoSilvas/) |
  | Rocketseat | [https://app.rocketseat.com.br/ me/andrelinosilva](https://app.rocketseat.com.br/me/andrelinosilva) |

</div>
</div>
</div>
<br>

---
<p align="center">Made with 💜 by Andrelino Silva</p>
