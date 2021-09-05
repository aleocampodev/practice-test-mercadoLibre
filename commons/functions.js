export const api = (searchQuery) =>
  // eslint-disable-next-line semi
  `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`;
