import { Artist, Image } from "../artist/artist";

export class Artwork {
  id: number;
  name: string;
  year: number;
  description: string;
  type: string;
  images: Image[];
  artist: Artist;

  constructor(id: number, name: string, year: number, description: string, type: string, images: Image[], artist: Artist) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.description = description;
    this.type = type;
    this.images = images;
    this.artist = artist;
  }
}
