# 🏢 Orprocon Contabilidade — Site Institucional

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20produção-success)
![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github)
![LGPD](https://img.shields.io/badge/LGPD-conforme-0F2C59)

**Site institucional da Orprocon Contabilidade — Tubarão/SC.** Página de vitrine, captação de leads e apresentação institucional de um escritório de contabilidade com mais de 50 anos de atuação.

🔗 **Acesso:** [clientesorprocon.com.br](https://clientesorprocon.com.br)

---

## 📋 Sobre o projeto

O site nasceu de uma reformulação completa de uma versão antiga (um único `index.html` monolítico, com CSS e JS inline, sem organização de pastas). A v2 reorganiza tudo em uma arquitetura multi-página, com identidade visual própria, LGPD, SEO e responsividade mobile — mantendo a stack deliberadamente simples (sem framework, sem build), já que é um site institucional estático, não uma aplicação com estado complexo.

| | |
|---|---|
| **Quem usa** | Visitantes do site buscando um escritório de contabilidade em Tubarão/SC; clientes atuais acessando a Área do Cliente |
| **Páginas** | Início, Quem Somos, Serviços, Segmentos, Contato, Política de Privacidade, Área do Cliente |
| **Qualidade** | SEO (meta tags, Open Graph, Schema.org), LGPD (cookies + política), responsivo mobile-first |
| **Entrega** | Estático, publicado via GitHub Pages, sem backend nem processo de build |

---

## 🖼️ Telas

| Início | Serviços |
|---|---|
| ![Home](screenshots/home-desktop.jpg) | ![Serviços](screenshots/servicos-desktop.jpg) |

| Quem Somos | Contato |
|---|---|
| ![Quem Somos](screenshots/quem-somos-desktop.jpg) | ![Contato](screenshots/contato-desktop.jpg) |

---

## ✨ Funcionalidades

### 🏠 Página Inicial (`index.html`)
- Hero com foto real do escritório, selo "50 Anos de Tradição" e estatísticas de credibilidade
- Seção institucional (missão, visão, diferenciais)
- Catálogo resumido de serviços em cards
- Grade da equipe (17 colaboradores) com overlay de nome/cargo e lightbox de zoom
- FAQ com as dúvidas mais comuns de quem está trocando de contador
- Formulário de contato integrado

### 🧭 Quem Somos (`quem-somos.html`)
- História, valores e diferenciais do escritório em formato editorial

### 🧾 Serviços (`servicos.html`)
- Catálogo completo por departamento (Abertura de Empresas, Gestão Contábil, Planejamento Tributário, Departamento Pessoal, Fiscal, Societário, Certificação Digital, Alvarás)
- Metodologia de atendimento em 3 passos
- FAQ específico de contratação de serviços

### 🏭 Segmentos (`segmentos.html`)
- Conteúdo adaptado por tipo de negócio (Saúde, Comércio e Varejo, Prestadores de Serviços/TI, Engenharia e Construção Civil)

### ✉️ Contato (`contato.html`)
- Formulário com campo de serviço de interesse, canais diretos (telefone, WhatsApp, e-mail) e localização

### 🔐 Área do Cliente (`area-do-cliente/`)
- Mini-aplicação isolada para consulta de extratos bancários pelos clientes (login Google + geração de relatório em Excel)

### 🍪 LGPD e privacidade
- Banner de consentimento de cookies (`localStorage`, sem bibliotecas externas)
- Página dedicada de Política de Privacidade (`privacidade.html`)

---

## 🛠️ Stack tecnológica

| Camada | Tecnologia | Finalidade |
|---|---|---|
| Estrutura | HTML5 semântico | Marcação de todas as páginas |
| Estilo | CSS3 (custom properties, Grid, Flexbox) | Design system próprio, sem framework CSS |
| Tipografia | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts) | Identidade visual moderna |
| Ícones | [Font Awesome 6](https://fontawesome.com/) | Ícones de UI em toda a navegação e cards |
| Interatividade | JavaScript vanilla (sem build, sem dependências) | Menu mobile, lightbox, banner de cookies |
| Formulário | [FormSubmit](https://formsubmit.co/) | Envio de mensagens sem backend próprio |
| Hospedagem | GitHub Pages | Deploy direto do branch `main` |

---

## 📁 Estrutura de pastas

```
├── index.html              # Página inicial
├── quem-somos.html          # Institucional
├── servicos.html            # Catálogo de serviços
├── segmentos.html           # Conteúdo por segmento de cliente
├── contato.html             # Formulário e canais de contato
├── obrigado.html            # Confirmação de envio do formulário
├── privacidade.html         # Política de Privacidade (LGPD)
├── area-do-cliente/
│   └── index.html            # Mini-app de extratos bancários (autocontido)
├── assets/
│   ├── css/
│   │   ├── base.css           # Variáveis de cor + reset (todas as páginas)
│   │   ├── layout.css          # Header, menu, rodapé, WhatsApp, cookies (compartilhado)
│   │   ├── pages.css            # Estilos das páginas internas (Quem Somos, Serviços, Segmentos, Contato)
│   │   ├── home.css              # Estilos específicos da página inicial
│   │   ├── legal.css              # Tipografia de páginas de conteúdo longo
│   │   └── obrigado.css            # Estilos da página de confirmação
│   ├── js/
│   │   ├── header.js           # Menu hambúrguer (todas as páginas)
│   │   ├── cookies.js           # Banner de consentimento LGPD
│   │   └── home.js               # Lightbox da equipe + comportamentos da home
│   └── img/
│       ├── logo-orprocon.png, hero-banner.png, escritorio.jpg
│       ├── favicon/              # Ícones do site em múltiplos tamanhos
│       └── equipe/                # Fotos dos 17 colaboradores
├── robots.txt
├── sitemap.xml
└── _nao-usadas/              # Imagens do projeto original sem uso atual (preservadas, não publicadas)
```

> Credenciais de domínio e acesso à Área do Cliente **não** ficam neste repositório — são mantidas fora do versionamento, em um arquivo local ignorado pelo Git.

---

## 🚀 Como rodar localmente

Não há passo de build — é um site estático puro.

```bash
# Clone o repositório
git clone https://github.com/orprocondigital-web/Site-Orprocon-2.0.git
cd Site-Orprocon-2.0

# Abra index.html diretamente no navegador, ou sirva com um servidor local:
python3 -m http.server 8080
# ou
npx serve .
```

---

## ✅ SEO e conformidade

- Meta description, Open Graph e Twitter Card em todas as páginas públicas
- Dados estruturados Schema.org (`AccountingService`) com endereço, telefone e e-mail
- `robots.txt` e `sitemap.xml` configurados
- `noindex` na página de agradecimento (não deve aparecer em buscas)
- Banner de cookies e Política de Privacidade conforme a LGPD

---

## 🗺️ Roadmap

- [ ] Unificar tipografia do `obrigado.html` com o restante do site
- [ ] Ajustar posicionamento do banner de cookies na página de Contato
- [ ] Avaliar inclusão de depoimentos de clientes e seção de avaliações
- [ ] Revisar textos alternativos (`alt`) das imagens da equipe

---

## 👤 Autor

Desenvolvido pela equipe de TI da Orprocon Contabilidade.

## 📄 Licença

Todos os direitos reservados © Orprocon Contabilidade. Conteúdo e identidade visual de uso exclusivo da empresa.
