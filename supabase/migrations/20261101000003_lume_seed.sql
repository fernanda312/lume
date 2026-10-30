-- LUME — seed: the exact catalogue from js/catalog.js, same ids, same
-- MT prices, same descriptions. Slugs are the frontend ids (a01…a13, b01…b08) so
-- the frontend catalogue and the database agree. Run AFTER the RLS migration.
-- Storage buckets are created in the dashboard (see README.md); the image
-- paths below are the site paths and are replaced by Storage URLs
-- when the admin uploads a new photo by file.

insert into public.site_settings (id) values (1)
  on conflict (id) do nothing;

insert into public.products (slug, name, category, description, price_mt, image_url, sort_order, published) values
  ('a01', 'Máquina de café preta', 'Máquinas de café', 'Máquina de café preta, de desenho limpo e compacto.', 24500, 'images/lume-cafe-produto.jpg', 1, true),
  ('a02', 'Máquina de soda branca mate', 'Máquinas de soda', 'Máquina de soda branca mate, para água com gás em casa.', 18900, 'images/lume-soda-branca.webp', 2, true),
  ('a03', 'Máquina de soda preta', 'Máquinas de soda', 'Máquina de soda preta, de desenho alto e simples.', 19900, 'images/lume-soda-preta.png', 3, true),
  ('a04', 'Máquina de soda cinzenta', 'Máquinas de soda', 'Máquina de soda cinzenta, para água com gás em casa.', 17900, 'images/lume-soda-cinzenta.webp', 4, true),
  ('a05', 'Máquina de soda prateada', 'Máquinas de soda', 'Máquina de soda prateada, de acabamento brilhante.', 22900, 'images/lume-soda-prateada.webp', 5, true),
  ('a06', 'Máquina de soda dourada', 'Máquinas de soda', 'Máquina de soda dourada, de desenho elegante.', 25900, 'images/lume-soda-dourada.webp', 6, true),
  ('a07', 'Máquina de soda preta luxo', 'Máquinas de soda', 'Máquina de soda preta, de desenho sóbrio e elegante.', 21900, 'images/lume-soda-preta-luxo.webp', 7, true),
  ('a08', 'Máquina de soda cinzenta mate', 'Máquinas de soda', 'Máquina de soda cinzenta mate, de linhas simples.', 16900, 'images/lume-soda-cinzenta-mate.webp', 8, true),
  ('a09', 'Máquina de soda em aço', 'Máquinas de soda', 'Máquina de soda em aço, fotografada em uso em casa.', 19900, 'images/lume-soda-prateada-2.webp', 9, true),
  ('a10', 'Cilindro de gás', 'Acessórios', 'Cilindro de gás para as máquinas de soda.', 4500, 'images/lume-cilindro.webp', 10, true),
  ('a11', 'Xarope de pêssego', 'Xaropes', 'Xarope de pêssego para água com gás.', 1200, 'images/lume-xarope-pessego.jpg', 11, true),
  ('a12', 'Xarope de manga', 'Xaropes', 'Xarope de manga para água com gás.', 1200, 'images/lume-xarope-manga.jpg', 12, true),
  ('a13', 'Garrafas reutilizáveis', 'Acessórios', 'Garrafas reutilizáveis para água com gás.', 1800, 'images/lume-garrafas.jpg', 13, true),
  ('b01', 'Liquidificadora', 'Cozinha', 'Liquidificadora para sumos e batidos em casa.', 8900, 'images/lume-liquidificadora.jpg', 14, true),
  ('b02', 'Fritadeira de ar', 'Cozinha', 'Fritadeira de ar preta, para cozinhar sem óleo.', 14500, 'images/lume-fritadeira.jpg', 15, true),
  ('b03', 'Micro-ondas preto', 'Cozinha', 'Micro-ondas preto, para aquecer e cozinhar todos os dias.', 16900, 'images/lume-microondas.jpg', 16, true),
  ('b04', 'Batedeira cinzenta', 'Cozinha', 'Batedeira cinzenta, para bolos e massas em casa.', 11900, 'images/lume-batedeira.jpg', 17, true),
  ('b05', 'Chaleira elétrica em aço', 'Casa', 'Chaleira elétrica em aço, para água quente rápida.', 4900, 'images/lume-chaleira.jpg', 18, true),
  ('b06', 'Torradeira em aço', 'Casa', 'Torradeira em aço, para pão torrado no pequeno-almoço.', 5900, 'images/lume-torradeira.jpg', 19, true),
  ('b07', 'Ferro de engomar a vapor', 'Casa', 'Ferro de engomar a vapor, branco, para roupa lisa.', 6500, 'images/lume-ferro.jpg', 20, true),
  ('b08', 'Aspirador azul', 'Casa', 'Aspirador azul, para a casa limpa todos os dias.', 12900, 'images/lume-aspirador.jpg', 21, true)
  on conflict (slug) do nothing;
