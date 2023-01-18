import { Artwork } from "../artwork/artwork";
import { Artist } from "./artist";
import { Image } from "./artist";

export class ArtistDetail extends Artist {
  artworks: Array<Artwork> = [];
  movements: Array<Movement> = [];

  constructor(
    id: number,
    name: string,
    birthplace: string,
    birthdate: any,
    movements: Array<Movement>,
    artworks: Array<Artwork>,
    image: Image) {
    super(id, name, birthplace, birthdate, image);
    this.movements = movements;
    this.artworks = artworks;
  }
}

export class Movement {
  id: number;
  name: string;
  description: string;
  countryOfOrigin: string;

  constructor(id: number, name: string, description: string, countryOfOrigin: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.countryOfOrigin = countryOfOrigin;
  }
}

