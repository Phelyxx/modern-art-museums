import { Artwork } from "../artwork/artwork";

export class Museum {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  image: Image;
  artworks: Artwork[];

  constructor( id: number, name: string, description: string, address: string, city: string, image: Image, artworks: Artwork[] ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.address = address;
      this.city = city;
      this.image = image;
      this.artworks = artworks;
    }
}

export class Image {
  id: number;
  source: string;
  altText: string;
  height: number;
  width: number;

  constructor(id: number, source: string, altText: string, height: number, width: number) {
    this.id = id;
    this.source = source;
    this.altText = altText;
    this.height = height;
    this.width = width;
  }
}
