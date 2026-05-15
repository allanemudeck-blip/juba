import { Property, Service, Testimonial } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Luxury Penthouse',
    price: '$450,000',
    numericPrice: 450000,
    location: 'Nakasero, Kampala',
    beds: 3,
    baths: 3,
    sqft: 2400,
    status: 'For Sale',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80'
    ],
    description: 'Breathtaking views of the Kampala skyline from this ultra-modern penthouse in the heart of Nakasero.',
    features: ['Swimming Pool', '24/7 Security', 'Gym', 'Private Balcony', 'High-speed Internet'],
    agent: {
      name: 'John Doe',
      phone: '+256 772 000000',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'prop-2',
    title: 'Elegant Family Villa',
    price: '$650,000',
    numericPrice: 650000,
    location: 'Munyonyo, Kampala',
    beds: 5,
    baths: 4,
    sqft: 4200,
    status: 'For Sale',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80'
    ],
    description: 'A luxurious 5-bedroom villa with a private garden and proximity to the lake shore in Munyonyo.',
    features: ['Garden', 'Lake View', 'Garage', 'Guest Wing'],
    agent: {
      name: 'Jane Smith',
      phone: '+256 772 111111',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'prop-3',
    title: 'Premium Office Space',
    price: '$2,500/mo',
    numericPrice: 2500,
    location: 'Kololo, Kampala',
    beds: 0,
    baths: 2,
    sqft: 1500,
    status: 'For Rent',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
    ],
    description: 'Prime commercial building in Kololo, suitable for corporate headquarters or upscale offices.',
    features: ['Parking', 'Elevator', 'Meeting Rooms', 'Security'],
    agent: {
      name: 'Alex Johnson',
      phone: '+256 772 222222',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'prop-4',
    title: 'Sunset View Apartments',
    price: '$1,200/mo',
    numericPrice: 1200,
    location: 'Buziga, Kampala',
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: 'For Rent',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    gallery: [],
    description: 'Modern 2-bedroom apartment with a stunning view of Lake Victoria.',
    features: ['Balcony', 'Modern Kitchen', 'Parking'],
    agent: {
      name: 'Maria K.',
      phone: '+256 772 333333',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?auto=format&fit=crop&q=80'
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Property Sales',
    description: 'Expert guidance for buying and selling premium residential and commercial properties.',
    icon: 'Home'
  },
  {
    id: 's2',
    title: 'Property Rentals',
    description: 'Find the perfect luxury apartment or home for rent across Kampala.',
    icon: 'Key'
  },
  {
    id: 's3',
    title: 'Property Management',
    description: 'Comprehensive management solutions to maximize your property value and ROI.',
    icon: 'Settings'
  },
  {
    id: 's4',
    title: 'Investment Advisory',
    description: 'Strategic advice for real estate investments in the growing Ugandan market.',
    icon: 'TrendingUp'
  },
  {
    id: 's5',
    title: 'Virtual Tours',
    description: 'High-quality 3D virtual tours allowing you to explore properties from anywhere.',
    icon: 'Video'
  },
  {
    id: 's6',
    title: 'Valuation Services',
    description: 'Professional and accurate property valuation for various purposes.',
    icon: 'ClipboardCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    content: 'JUBA Properties provided the most professional service I have experienced in Kampala. Their knowledge of the market is unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 't2',
    name: 'Sarah Namubiru',
    role: 'Homeowner',
    content: 'Finding our dream home in Kololo was effortless with JUBA. They understood exactly what our family needed.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't3',
    name: 'David Wilson',
    role: 'Expat Professional',
    content: 'The virtual tour feature saved me so much time. I was able to narrow down my choices before even landing in Uganda.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=david'
  }
];
