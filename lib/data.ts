export type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tags: string[];
  image: string;
  alt: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    index: '01',
    title: 'Aster Health',
    category: 'Digital health platform',
    description: 'A calmer way to find care, understand progress, and make better health decisions.',
    impact: '42% more completed onboarding flows',
    tags: ['Product strategy', 'UX direction', 'Design system'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=82',
    alt: 'Abstract close-up of a modern wellness environment',
  },
  {
    index: '02',
    title: 'Lume OS',
    category: 'B2B operating system',
    description: 'Turning complex operations into a focused workspace for ambitious teams.',
    impact: '3x faster task completion in testing',
    tags: ['Product design', 'Prototyping', 'Motion'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=82',
    alt: 'Laptop showing a data dashboard in a dark workspace',
  },
  {
    index: '03',
    title: 'Common Ground',
    category: 'Brand and digital experience',
    description: 'A warm, tactile identity for a new kind of third place in the city.',
    impact: 'Sold out first two launch events',
    tags: ['Brand identity', 'Art direction', 'Web design'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82',
    alt: 'Minimal creative studio with warm light and furniture',
  },
  {
    index: '04',
    title: 'Northstar',
    category: 'Climate intelligence',
    description: 'Making a high-stakes climate data product feel clear, useful, and human.',
    impact: 'Raised $8.2M after launch',
    tags: ['UX strategy', 'Interface design', 'Storytelling'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=82',
    alt: 'Person working at a laptop in a dark room',
  },
];

export const services: Service[] = [
  {
    number: '01',
    title: 'Product direction',
    description: 'Clarity from the first question to the final decision. I turn ambiguity into a sharp, shared point of view.',
  },
  {
    number: '02',
    title: 'Experience design',
    description: 'Thoughtful systems and expressive interfaces that make ambitious products easier to understand and use.',
  },
  {
    number: '03',
    title: 'Brand worlds',
    description: 'Visual identities with enough character to be remembered and enough structure to scale with the business.',
  },
];

export const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];
