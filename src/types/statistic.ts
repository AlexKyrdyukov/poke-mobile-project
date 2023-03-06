export type PokemonLink = {
  name: string;
  url: string;
};

export type StatisticList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonLink[];
};
