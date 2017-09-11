export class Coordinates {
  latitude: number;
  longitude: number;
}

export class Venue {
  id: string;
  name: string;
  image_url: string;
  url: string;
  price: string;
  rating: number;
  photos: [string];
  address: string;
  coordinates: Coordinates;
}
