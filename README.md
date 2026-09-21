Orprocon — Site 2.0
Site institucional da Orprocon Contabilidade (Tubarão - SC). HTML, CSS e JavaScript puros — sem framework, sem build.

Estrutura
├── index.html                  ← página inicial
├── obrigado.html                ← confirmação do formulário de contato
├── privacidade.html             ← política de privacidade (LGPD)
├── area-do-cliente/
│   └── index.html                ← extratos bancários (app autocontido)
├── assets/
│   ├── css/
│   │   ├── base.css               ← variáveis de cor + reset (todas as páginas)
│   │   ├── layout.css              ← header, menu, rodapé, WhatsApp, banner de cookies (todas as páginas)
│   │   ├── legal.css                ← tipografia de páginas de conteúdo longo (privacidade.html)
│   │   ├── home.css                  ← estilos específicos de index.html (hero, serviços, equipe, contato)
│   │   └── obrigado.css               ← estilos específicos de obrigado.html
│   ├── js/
│   │   ├── header.js               ← menu hambúrguer (todas as páginas com header)
│   │   ├── cookies.js               ← banner de consentimento de cookies (todas as páginas)
│   │   └── home.js                   ← menu "Nossa Equipe" + lightbox de fotos (só index.html)
│   └── img/
│       ├── logo-orprocon.png, hero-banner.png, escritorio.jpg
│       └── equipe/                    ← 17 fotos da equipe
└── _nao-usadas/                  ← imagens do projeto original sem uso atual (não apagadas, só isoladas)
Fora do repositório (nunca deve ser versionado nem publicado):

privado-nao-subir/
├── dominio-orprocon.txt        ← acesso ao domínio
└── senha-area-do-cliente.txt   ← credencial da área do cliente
Por que essa
base.css: núcleos da marca e reset, num único lugar.
layout.css: tudo que se repete em mais de uma página (cabeçalho, menu, rodapé, botão do WhatsApp, banner de cookies), pra não duplicar CSS/JS toda vez que uma página nova é criada.
CSS/JS por página ( home.*, obrigado.css, legal.css): cada página carrega apenas o que é exclusivo dela.
area-do-cliente/: mini-app autocontido (login Google, geração de relatório em Excel) — isolado em pasta própria, sem alterar o código interno dele.
privado-nao-subir/: credenciais não têm razão para estar dentro do que é publicado; fica fora do repositório e do servidor.
Funcionalidades
Responsivo com menu hambúrguer no mobile — o desktop permanece inalterado; logo abaixo de 768px o menu vira um painel expansível.
Botão flutuante do WhatsApp — visível em qualquer tamanho de tela, redirecionado para conversa direta com o escritório.
LGPD : banner de consentimento de cookies ( localStorage, sem bibliotecas externas) e página de Política de Privacidade ( privacidade.html), cobrindo dados obtidos, especificamente, compartilhamento com terceiros completos (FormSubmit, Google) e direitos do titular.
Formulário de contato via FormSubmit , sem necessidade de backend próprio.
Desenvolvimento
Como é um site estático, basta abrir index.htmlno navegador ou servir a pasta com qualquer servidor HTTP simples — não há passo de construção.

Ao criar uma nova página que deva ter o mesmo cabeçalho/rodapé do site, reaproveite base.css+ layout.css+ assets/js/header.js (e cookies.js, se quiser o banner de cookies nela também).
