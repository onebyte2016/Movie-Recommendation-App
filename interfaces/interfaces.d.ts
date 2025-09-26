interface Movie {
    id: number;
    title: number;
    adult: string;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface TrendingMovie {
    searchTerm: string;
    movie_id: number;
    title:string;
    count: number;
    poster_url: string;
}

// interface MovieDetails {
//     adult: boolean;
//     backdrop_path: string | null;
//     belongs_to_collection: {

//     }
// }
// Shared type for a genre
export interface Genre {
    id: number;
    name: string;
  }
  
  // Production company
  export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }
  
  // Production country
  export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  // Spoken language
  export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  // Belongs to collection (if any)
  export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  }
  
  // The detailed movie type from TMDB
  export interface MovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: BelongsToCollection | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    poster_url: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;        // e.g. "2010-07-15"
    revenue: number;
    runtime: number | null;
    spoken_languages: SpokenLanguage[];
    status: string;              // e.g. "Released"
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  // A “lighter” movie result for lists (from endpoints like “now playing”, “popular”, etc.)
  export interface MovieListItem {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];         // array of genre IDs
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }
  
  // Example: TrendingMovie might have extra fields
  export interface TrendingMovie extends MovieListItem {
    // add any custom fields you use, e.g.:
    searchTerm?: string;
    count?: number;
    poster_url?: string;
  }
  