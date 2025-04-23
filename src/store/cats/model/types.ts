export type CatState = {
  list: CatType[];
};

export type ImageBreeds = [
  {
    weight: {
      imperial: string;
      metric: string;
    };
    id: string;
    name: string;
    temperament: string; // Comma delimited string
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: string;
    wikipedia_url: string;
  },
];

export type CatType = {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: ImageBreeds;
  favourite?: object;
};

export type Order = 'ASC' | 'DESC' | 'RAND';

export type GetCatParams = {
  limit?: number; // default = 1 (1-100)
  page?: number; // default = 0 (0-n)
  order?: Order;
  has_breeds?: 1 | 0;
  breed_ids?: string; // Comma delimited string
  category_ids?: string; // Comma delimited string
  sub_id?: string;
};
