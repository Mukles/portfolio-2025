declare module "faq-types" {
  export interface FaqItem {
    question: string;
    answer: string;
  }

  export interface Faq {
    title: string;
    questions: FaqItem[];
  }
}

declare module "homepage-service" {
  export interface ServiceItem {
    title: string;
    content: string;
  }
  export interface Service {
    title: string;
    description: string;
    services: ServiceItem[];
    button: {
      enable: boolean;
      label: string;
      link: string;
    };
  }
}
