# Team Longhini BJJ

Site estático responsivo em HTML, CSS e JavaScript, sem dependências ou compilação.

## Visualizar

Na pasta do projeto, execute `python -m http.server 4173` e acesse http://localhost:4173. Você também pode hospedar o conteúdo desta pasta em qualquer serviço de arquivos estáticos.

## Editar

- `config.js`: preço, WhatsApp, endereço, Instagram e grade de horários. Horários estão em formato de 24 horas. Mantenha os nomes de público `Adulto` e `Infantil` para os filtros.
- `index.html`: conteúdo da página e metadados de busca e compartilhamento.
- `styles.css`: cores, fontes, composição e regras responsivas.
- `app.js`: filtros, mensagens do WhatsApp, dados comerciais e menu móvel.
- `assets/`: fotografias e fontes locais. Se substituir imagens, atualize também dimensões e descrições no HTML. Se trocar de domínio, ajuste a imagem absoluta `og:image` no HTML.

Os botões abrem uma conversa no WhatsApp com uma mensagem preenchida. O envio depende do visitante; não há reserva automática, cobrança, cadastro ou armazenamento de dados.

## Conteúdo e fontes

Preço de R$ 120/mês para adulto e infantil e endereço Rua Pajé, 108, sala 3, Santo Antônio, Osasco/SP definidos pelo solicitante. WhatsApp confirmado na biografia do perfil oficial.

Grade transcrita da publicação https://www.instagram.com/teamlonghinibjj/p/DayiMdLJYAL/ de 14/07/2026. O site mostra a data e o link de origem. Confirmar eventuais alterações com a academia ao atualizar o conteúdo.

Fotografias do perfil https://www.instagram.com/teamlonghinibjj/, utilizadas conforme autorização do solicitante:

- Professor: postagem visível do perfil de Rogério Longhini (18/09/2026), compartilhada no perfil da escola.
- Treino: https://www.instagram.com/teamlonghinibjj/reel/DcTVhJYRMv3/
- Equipe: https://www.instagram.com/teamlonghinibjj/p/Dbjp7aHpiMc/
- Infantil: https://www.instagram.com/ilhadamadeirafc/p/DbEkrSukQXL/

Imagens convertidas em WebP e hospedadas localmente; o site não depende de URLs temporárias do Instagram. O mapa incorporado consulta o Google Maps e tem link externo alternativo.

Barlow e Barlow Condensed distribuídas sob a SIL Open Font License 1.1. Os termos e créditos ficam em `assets/OFL-*.txt`.

## Publicação no GitHub Pages

Site público: https://pedrot-git.github.io/team-longhini-bjj/

O GitHub Pages publica a raiz da branch `main`. A cada push, o GitHub atualiza o site automaticamente. O arquivo `.nojekyll` permite servir os arquivos estáticos diretamente, sem compilação ou dependências.

Edite os arquivos na raiz, faça commit e envie para `main`. O preço, endereço, contato e horários ficam em `config.js`. Todas as referências a imagens e fontes são relativas, compatíveis com o caminho `/team-longhini-bjj/`.

## Verificação da versão inicial

- Layout conferido no navegador em 375, 768, 1024 e 1440 px, sem transbordamento horizontal.
- Grade com 22 aulas: 13 no filtro Adulto e 9 no Infantil. Horários, níveis e Open Match conferidos com a publicação de origem.
- Menu móvel, navegação por âncoras, filtros e mensagens específicas por turma verificados.
- Imagens e fontes locais carregadas; mapa do endereço exibido corretamente.
- Links do WhatsApp conferidos sem enviar mensagens; a matrícula e a disponibilidade são tratadas diretamente com a academia.
- Sintaxe dos arquivos JavaScript validada com `node --check`.
