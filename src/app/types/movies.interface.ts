
export interface IResults {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    key?:string,
    site?:string,
    name?:string,
  }




export interface IRequest {
    dates?: object,
    page: number,
    results: IResults[],
    total_pages: number,
    total_results: number,
    id?:number
  }