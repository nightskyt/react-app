export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
