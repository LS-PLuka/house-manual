# Manual da Hospedagem

Protótipo de uma página de regras e orientações para hóspedes de uma hospedagem em Caraguatatuba, no litoral norte de São Paulo. O acesso é pensado principalmente para smartphones por meio de QR Codes.

## Tecnologias

- HTML semântico;
- CSS mobile-first;
- JavaScript puro.

O projeto não utiliza dependências externas, gerenciador de pacotes ou sistema de build.

## Identidade visual

A marca rearq_ é usada apenas como identidade visual. A finalidade do site é exclusivamente o manual de regras de hospedagem. Nunca use textos, slogans ou palavras-chave do board da marca relacionados a cerâmica, arquitetura ou ao atelier como conteúdo do site.

A página usa a identidade visual da marca **rearq_**, de Gláucia Montes. As referências ficam em `docs/brand/`.

- Paleta, em variáveis no `:root` de `css/style.css`: terracota `#B56D52`, areia `#D8C5AE`, cinza `#BFC0BC`, carvão `#2C2C2C` e fundo `#F2EEE8`.
- Fontes self-hosted em `assets/fonts/`, sem CDN: Cormorant Garamond (logotipo e títulos), Montserrat (corpo e labels) e Allura (assinatura). Todas são distribuídas sob a SIL Open Font License; as licenças acompanham os arquivos.

## Estrutura

```text
index.html          Conteúdo e estrutura da página
css/style.css       Estilos globais e responsivos
js/main.js          Reveal dos blocos ao rolar (IntersectionObserver), carregado com defer
assets/icons/       Ícones das categorias (sprite SVG)
assets/fonts/       Fontes .woff2 self-hosted e licenças OFL
docs/brand/         Referências visuais da marca
favicon.svg         Símbolo da marca
AGENTS.md           Diretrizes operacionais do projeto
```

## Visualização local

Abra `index.html` diretamente no navegador. Nesta fase, não é necessário executar comandos de instalação ou compilação.

## Conteúdo provisório

As regras presentes no protótipo são exemplos curtos para validar a arquitetura da informação. Elas deverão ser substituídas pelo conteúdo oficial da hospedagem.
