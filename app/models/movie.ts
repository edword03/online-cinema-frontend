import { ActorModel } from "./actor";
import { GenreModel } from "./genre";

export interface Parameters {
  year: number;
  duration: number;
  country: string;
}

export interface MovieModel {
  _id: string;
  poster: string;
  bigPoster: string;
  title: string;
  description: string;
  slug: string;
  parameters?: Parameters;
  rating?: number;
  countViews: number;
  videoUrl: string;
  genres: GenreModel;
  actors: ActorModel;
  isSendTelegram: boolean;
}