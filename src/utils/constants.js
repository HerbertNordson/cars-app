const CARS_BRAND_MOCK = {
  cars: [
    {
      id: 55,
      timestamp_cadastro: 1696549488,
      modelo_id: 88,
      ano: 2014,
      combustivel: "FLEX",
      num_portas: 4,
      cor: "BRANCA",
      nome_modelo: "ETIOS",
      valor: 36.000,
      brand: 1,
    },
    {
      id: 23,
      timestamp_cadastro: 1696531236,
      modelo_id: 77,
      ano: 2014,
      combustivel: "FLEX",
      num_portas: 4,
      cor: "PRETO",
      nome_modelo: "COROLLA",
      valor: 120.000,
      brand: 1,
    },
    {
      id: 3,
      timestamp_cadastro: 16965354321,
      modelo_id: 79,
      ano: 1993,
      combustivel: "DIESEL",
      num_portas: 4,
      cor: "AZUL",
      nome_modelo: "HILLUX SW4",
      valor: 47.500,
      brand: 1,
    },
  ],
};

const BRANDS = [
  { id: 0, value: "HONDA" },
  { id: 1, value: "TOYOTA" },
  { id: 2, value: "FIAT" },
  { id: 3, value: "VOLKSWAGEN" },
  { id: 4, value: "CHERRY" },
];

export { CARS_BRAND_MOCK, BRANDS };
