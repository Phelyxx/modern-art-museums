export class Artist {
  id: number;
  name: string;
  birthplace: string;
  birthdate: any;
  image: Image;

  constructor(id: number, name: string, birthplace: string, birthdate: any, image: Image) {
    this.id = id;
    this.name = name;
    this.birthplace = birthplace;
    this.birthdate = birthdate;
    this.image = image;
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
