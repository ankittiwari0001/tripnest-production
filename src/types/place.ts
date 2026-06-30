// Unified Place type for OpenStreetMap nearby places

export interface Place {

  id: number;

  lat: number;

  lon: number;

  tags: {

    name?: string;

    tourism?: string;

    amenity?: string;
  };
}

/* EXTENDED PLACE */

export interface ExtendedPlace
  extends Place {

  image?: string;

  rating?: number;

  budget?: string;

  vibe?: string;

  summary?: string;
}

/* TOURIST / FESTIVAL / EXPLORE PLACES */

export interface CatalogPlace {

  _id: string;

  name: string;

  description: string;

  image: string;
}

/* DATABASE MAP PLACE */

export interface DatabaseMapPlace {

  _id?: string;

  name?: string;

  type?: string;

  image?: string;

  rating?: number;

  price?: number;

  category?: string;

  location?: {

    coordinates: [
      number,
      number
    ];
  };
}

