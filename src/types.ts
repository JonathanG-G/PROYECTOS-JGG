export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkStep {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  avatarSeed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteEstimate {
  name: string;
  phone: string;
  origin: string;
  destination: string;
  size: string; // "monoambiente" | "casa-chica" | "casa-grande" | "oficina" | "flete-chico" | "flete-grande"
  services: string[]; // ["embalaje", "peones", "desarmado"]
  message: string;
}
