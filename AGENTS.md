# AGENTS.md

## Finalidade deste documento

Este arquivo é a referência operacional principal para todos os agentes que trabalharem neste repositório. Leia-o por completo antes de iniciar qualquer tarefa e combine estas regras com o escopo explícito da solicitação atual.

Em caso de conflito, siga esta ordem de prioridade:

1. requisitos explícitos da tarefa atual;
2. regras e objetivos deste documento;
3. simplicidade adequada ao projeto;
4. recomendações relevantes das skills disponíveis.

Não antecipe fases futuras nem amplie o escopo por iniciativa própria.

## Contexto e objetivo do produto

O projeto é um manual digital para hóspedes de uma hospedagem/aluguel por temporada em Caraguatatuba, litoral norte de São Paulo. O acesso será feito principalmente por QR Codes distribuídos pela hospedagem.

A página atende pessoas que já estão hospedadas. Ela deve permitir que o hóspede encontre uma regra ou orientação com o mínimo possível de esforço e tempo:

1. escaneia o QR Code pelo celular;
2. a página carrega rapidamente;
3. reconhece imediatamente o manual da hospedagem;
4. identifica a categoria relacionada à dúvida;
5. abre a categoria;
6. encontra a orientação e encerra a interação.

Não incentive navegação longa ou exploração. Este não é um site comercial e não deve incluir reservas, apresentação de quartos, preços, login, cadastro, backend, banco de dados, painel administrativo, e-commerce ou formulários comerciais.

## Escopo técnico

Use somente:

- HTML;
- CSS;
- JavaScript puro, apenas quando uma interação realmente precisar dele.

Priorize recursos nativos da Web Platform e progressive enhancement. Não use React, Next.js, Vue, Angular, Tailwind, Bootstrap, jQuery, frameworks, bundlers, sistemas de build, npm ou bibliotecas externas sem necessidade real e justificativa compatível com a tarefa.

O projeto terá uma única página. Mantenha a estrutura próxima de:

```text
index.html
css/
js/
assets/
```

Não introduza abstrações, camadas ou diretórios desnecessários. Mantenha as regras preferencialmente no HTML; não as converta em objetos JavaScript, JSON ou renderização dinâmica sem necessidade real. HTML e CSS bem organizados são suficientes para facilitar futuras trocas de conteúdo e identidade visual.

## Mobile-first e responsividade

Projete primeiro para smartphones, com atenção especial a larguras entre 320 px e 430 px. Desktop é secundário: em telas maiores, preserve uma largura confortável de leitura, bom espaçamento e centralização quando fizer sentido, sem criar uma experiência diferente.

Áreas interativas devem ser confortáveis ao toque e o conteúdo principal deve permanecer imediatamente legível em telas pequenas.

## Arquitetura da informação

As categorias iniciais de referência são:

- Quarto;
- Banheiro;
- Quintal;
- Ducha;
- Tanque;
- Lixo;
- Convivência;
- Check-out;
- Informações importantes;
- Ajuda/Contato.

Essas categorias são provisórias e devem acompanhar as regras reais quando forem fornecidas. Enquanto o conteúdo definitivo não existir, use apenas textos fictícios curtos e plausíveis. Nunca use Lorem Ipsum para representar regras.

## Interação principal

A interação prevista é um conjunto de categorias expansíveis:

- use um accordion por categoria, não um por regra;
- não crie accordions aninhados;
- permita que mais de uma categoria permaneça aberta;
- regras importantes para todos podem ficar visíveis fora dos accordions;
- preserve interação simples, suporte a teclado, foco visível e semântica adequada;
- prefira elementos HTML nativos quando atenderem corretamente ao caso.

Não implemente sem solicitação explícita: busca, menu hambúrguer, navbar complexa, expandir/recolher tudo, botão de voltar ao topo, favoritos, compartilhamento, avaliações, chatbot, mapa, login, PWA, notificações, analytics, carrossel, galeria, animações complexas ou funções comerciais.

Se uma funcionalidade adicional parecer útil, apresente primeiro a sugestão e sua justificativa; não a implemente automaticamente.

## Direção visual

A interface deve evocar uma **casa caiçara contemporânea**: clara, leve, arejada, acolhedora, natural, simples, moderna e sutilmente artesanal. A hospedagem é predominantemente branca e possui espaços abertos, flores, vegetação, pranchas, remos e referências ao litoral.

A identidade deve vir principalmente de cores, tipografia, espaçamento, composição, pequenos detalhes gráficos e ícones discretos. Evite aparência de landing page comercial, hotel de luxo, resort, dashboard, SaaS, aplicativo complexo, site corporativo ou template genérico de IA.

Evite também excesso de cards e sombras, glassmorphism, gradientes azul/roxo, decoração tropical exagerada, ondas gigantes, coqueiros como clichê, elementos decorativos sem função, animações gratuitas e muitos valores diferentes de `border-radius`.

### Paleta provisória

Quando a interface for implementada, centralize a paleta em CSS Custom Properties:

- fundo quente: `#FAF9F5`;
- superfícies: `#FFFFFF`;
- azul principal: `#397C8C`;
- azul claro: `#DCECEF`;
- verde vegetal: `#66856B`;
- areia: `#E9DFC9`;
- terracota discreto: `#C7795B`;
- texto principal: `#263238`.

As cores são provisórias e devem ser fáceis de trocar posteriormente.

### Tipografia e ícones

Priorize fontes do sistema. Não adicione Google Fonts ou fontes externas apenas por estética.

Ícones devem ajudar a reconhecer categorias, acompanhar texto, ter estilo consistente e discreto e nunca ser a única forma de comunicação. Quando necessários, prefira SVGs pequenos, locais e otimizados. Não carregue uma biblioteca completa para usar poucos símbolos.

## Acessibilidade

Considere acessibilidade desde o início:

- HTML semântico e hierarquia correta de headings;
- contraste adequado;
- foco claramente visível;
- navegação completa por teclado;
- áreas de toque confortáveis;
- rótulos compreensíveis;
- ARIA apenas quando necessário;
- respeito a `prefers-reduced-motion` quando houver movimento;
- conteúdo compreensível sem depender de elementos decorativos, cor ou ícones.

Não use ARIA para substituir um elemento HTML semântico adequado.

## Performance

O acesso poderá ocorrer por 4G/5G. Mantenha HTML pequeno, CSS enxuto, JavaScript mínimo, poucas requisições e nenhum asset pesado. Use imagens somente quando forem realmente necessárias, SVGs otimizados e nenhuma fonte ou dependência externa sem justificativa.

A simplicidade do projeto deve torná-lo naturalmente rápido; não transforme otimização em complexidade arquitetural.

## Conteúdo e personalização futura

Este desenvolvimento inicial é um protótipo. Regras, textos, nome, contato, cores, fotos, referências visuais e elementos de identidade ainda serão fornecidos.

Mantenha conteúdo e decisões visuais fáceis de localizar e alterar, mas não crie CMS, arquivo de configuração, JSON ou outro sistema complexo para isso. Preserve decisões anteriores que continuarem válidas quando novos materiais chegarem.

## Uso de skills

Antes de cada fase, verifique as skills realmente disponíveis na sessão e use apenas as relevantes ao escopo. Na criação inicial deste documento, foram identificadas como potencialmente úteis para fases futuras:

- `sites:sites-building`: construção ou modificação do site completo, quando a implementação for solicitada;
- `computer-use:computer-use`: inspeção e validação da página em navegador, quando necessária;
- `visualize:visualize`: protótipos ou visualizações interativas, somente quando ajudarem a tarefa e forem compatíveis com o escopo.

Não foi identificada nesta sessão uma skill separada com o nome exato de “responsive design” ou “frontend accessibility”. Ainda assim, responsividade e acessibilidade são requisitos obrigatórios deste projeto e devem ser aplicadas diretamente. A disponibilidade de skills pode mudar; confira novamente a lista exposta pelo ambiente em cada nova fase.

Antes de usar uma skill, leia integralmente suas instruções. Não siga recomendações de skills que conflitem com a tarefa atual, este documento ou a simplicidade do projeto. Skills devem melhorar decisões de design, responsividade, acessibilidade ou validação — nunca justificar complexidade desnecessária.

## Critério para decisões

Escolha sempre a solução mais simples que resolva corretamente o problema. Antes de adicionar algo, pergunte:

- ajuda o hóspede a encontrar uma informação?
- melhora a legibilidade?
- melhora a acessibilidade?
- melhora a performance?
- realmente precisa existir?

Se a resposta for não, provavelmente não deve ser implementado. Simplicidade não significa falta de acabamento: a meta é uma interface pequena, bem projetada e deliberada.

## Fluxo obrigatório de trabalho

Ao receber uma nova fase:

1. leia este `AGENTS.md` por completo;
2. analise o estado atual do repositório e preserve alterações existentes;
3. confira e leia as skills relevantes disponíveis;
4. implemente somente o escopo solicitado;
5. preserve decisões anteriores que continuem válidas;
6. não adicione funcionalidades não solicitadas;
7. evite refatorações sem relação com a tarefa;
8. mantenha o código simples, legível e compatível com progressive enhancement;
9. revise o resultado em telas pequenas, acessibilidade básica e performance, na proporção do risco da mudança;
10. ao finalizar, informe resumidamente o que foi alterado e como foi validado.

Se houver uma decisão importante não coberta pela tarefa ou por este documento, explique a questão em vez de assumir uma solução complexa.

## Git

- Não crie branches.
- Não faça commits automaticamente.
- Não faça push.
- O responsável pelo projeto fará o controle de Git manualmente.
