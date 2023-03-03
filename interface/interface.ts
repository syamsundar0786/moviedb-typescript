import { NextApiRequest, NextApiResponse } from "next";

export interface HomeProp{
    data:HomeData;
    search:string;
  }
  
  export interface HomeData{
    page: number,
    total_pages:number,
    total_results:number,
    results:Array<HomeResultData>
  }
  
  export interface HomeResultData{
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity:number,
    release_date: string,
    video: boolean,
    vote_average: string,
    vote_count: number,
    spoken_languages?:Array<LanguagesEnglish>
  }
  
  export interface LanguagesEnglish{
    english_name:string
  }
  
  export interface ReqRes{
    req:NextApiRequest;
    res:NextApiResponse
  }

  export interface MovieDetailsType{
    movie:HomeResultData
  }
  
  export type MovieList = "Trailer" | "Clip" | "Featurette"
  
  export interface MovieVideo{
      type?:MovieList,
      key?:number
    
  }

  export interface HeaderProps {
    searchterm: string;
    setSearchterm:(value:string)=>void
  
  }

 export interface LayoutProps  { 
    children: React.ReactElement
  }


export interface MovieResultData{
    movie:HomeResultData
   }