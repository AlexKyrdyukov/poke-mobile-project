export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
};

export type Sprites = {
  [x: string]: string | Record<string, string | object>;
};
