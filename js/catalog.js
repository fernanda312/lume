// LUME — catalogue. Prices in MT only, chosen for this build.
// Unpriced items (price null) can be discussed in chat but can NEVER
// be paid online: the server refuses them at checkout.
const PRODUCTS = [
  {id:"a01", name:"Máquina de café preta", cat:"Máquinas de café", price:24500, img:"images/lume-hero.jpg", desc:"Máquina de café preta, de desenho limpo e compacto."},
  {id:"a02", name:"Máquina de soda branca mate", cat:"Máquinas de soda", price:18900, img:"images/lume-soda-branca.webp", desc:"Máquina de soda branca mate, para água com gás em casa."},
  {id:"a03", name:"Máquina de soda preta", cat:"Máquinas de soda", price:19900, img:"images/lume-soda-preta.png", desc:"Máquina de soda preta, de desenho alto e simples."},
  {id:"a04", name:"Máquina de soda cinzenta", cat:"Máquinas de soda", price:17900, img:"images/lume-soda-cinzenta.webp", desc:"Máquina de soda cinzenta, para água com gás em casa."},
  {id:"a05", name:"Máquina de soda prateada", cat:"Máquinas de soda", price:22900, img:"images/lume-soda-prateada.webp", desc:"Máquina de soda prateada, de acabamento brilhante."},
  {id:"a06", name:"Máquina de soda dourada", cat:"Máquinas de soda", price:25900, img:"images/lume-soda-dourada.webp", desc:"Máquina de soda dourada, de desenho elegante."},
  {id:"a07", name:"Máquina de soda preta luxo", cat:"Máquinas de soda", price:21900, img:"images/lume-soda-preta-luxo.webp", desc:"Máquina de soda preta, de desenho sóbrio e elegante."},
  {id:"a08", name:"Máquina de soda cinzenta mate", cat:"Máquinas de soda", price:16900, img:"images/lume-soda-cinzenta-mate.webp", desc:"Máquina de soda cinzenta mate, de linhas simples."},
  {id:"a09", name:"Máquina de soda em aço", cat:"Máquinas de soda", price:19900, img:"images/lume-soda-prateada-2.webp", desc:"Máquina de soda em aço, fotografada em uso em casa."},
  {id:"a10", name:"Cilindro de gás", cat:"Acessórios", price:4500, img:"images/lume-cilindro.webp", desc:"Cilindro de gás para as máquinas de soda."},
  {id:"a11", name:"Xarope de pêssego", cat:"Xaropes", price:1200, img:"images/lume-xarope-pessego.jpg", desc:"Xarope de pêssego para água com gás."},
  {id:"a12", name:"Xarope de manga", cat:"Xaropes", price:1200, img:"images/lume-xarope-manga.jpg", desc:"Xarope de manga para água com gás."},
  {id:"a13", name:"Garrafas reutilizáveis", cat:"Acessórios", price:1800, img:"images/lume-garrafas.jpg", desc:"Garrafas reutilizáveis para água com gás."}
];
// Trusted price list, mirrored server-side in the payment Edge Function.
// The server never trusts a price sent by the browser.
const TRUSTED_PRICES = {};
PRODUCTS.forEach(function(p){ if (p.price !== null) TRUSTED_PRICES[p.id] = p.price; });
function fmtMT(v){ return v.toLocaleString("pt-PT").replace(/,/g, ".") + " MT"; }
function productById(id){ return PRODUCTS.find(function(x){ return x.id === id; }); }
