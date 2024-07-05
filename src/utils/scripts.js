export function transformPricePTBR(price) {
  return price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}
