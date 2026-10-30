// Trusted price list (MT), mirrored from js/catalog.js and the seed.
// The server NEVER trusts a price or a total sent by the browser.
// A product absent here has no online price and cannot be paid online,
// and any attempt to pay for one is rejected with 400.
export const TRUSTED_PRICES: Record<string, number> = {
  a01: 24500,
  a02: 18900,
  a03: 19900,
  a04: 17900,
  a05: 22900,
  a06: 25900,
  a07: 21900,
  a08: 16900,
  a09: 19900,
  a10: 4500,
  a11: 1200,
  a12: 1200,
  a13: 1800,
  b01: 8900,
  b02: 14500,
  b03: 16900,
  b04: 11900,
  b05: 4900,
  b06: 5900,
  b07: 6500,
  b08: 12900,
};

// Display names, so server-written order items keep the real product name
// (the browser-sent name is never trusted for price, but the name itself
// is only used for display in the order and receipt).
export const PRODUCT_NAMES: Record<string, string> = {
  a01: "Máquina de café preta",
  a02: "Máquina de soda branca mate",
  a03: "Máquina de soda preta",
  a04: "Máquina de soda cinzenta",
  a05: "Máquina de soda prateada",
  a06: "Máquina de soda dourada",
  a07: "Máquina de soda preta luxo",
  a08: "Máquina de soda cinzenta mate",
  a09: "Máquina de soda em aço",
  a10: "Cilindro de gás",
  a11: "Xarope de pêssego",
  a12: "Xarope de manga",
  a13: "Garrafas reutilizáveis",
  b01: "Liquidificadora",
  b02: "Fritadeira de ar",
  b03: "Micro-ondas preto",
  b04: "Batedeira cinzenta",
  b05: "Chaleira elétrica em aço",
  b06: "Torradeira em aço",
  b07: "Ferro de engomar a vapor",
  b08: "Aspirador azul",
};

export function recalculateTotal(
  items: Array<{ id?: string; product_id?: string; qty: number }>,
): { total: number; lines: Array<{ product_id: string; qty: number; unit_price_mt: number }> } {
  const lines = items.map((item) => {
    const productId = item.product_id ?? item.id ?? "";
    const price = TRUSTED_PRICES[productId];
    if (price === undefined) {
      throw new Error(
        `Product ${productId} has no online price and cannot be paid online.`,
      );
    }
    const qty = Math.floor(Number(item.qty));
    if (!Number.isFinite(qty) || qty < 1) throw new Error("Invalid quantity.");
    return { product_id: productId, qty, unit_price_mt: price };
  });
  const total = lines.reduce((sum, l) => sum + l.unit_price_mt * l.qty, 0);
  return { total, lines };
}
