export interface Property {
  id: string;
  title: string;
  price: string;
  numericPrice: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'For Sale' | 'For Rent';
  type: 'Apartment' | 'Villa' | 'Commercial' | 'Land';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
