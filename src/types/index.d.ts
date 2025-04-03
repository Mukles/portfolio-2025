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

declare module "about-types" {
  export interface Tool {
    name: string;
    img: string;
    size: number;
  }

  export interface About {
    image: string;
    myself: {
      title: string;
      descriptions: string[];
    };
    skills: {
      title: string;
      description: string;
    };
    tools: Tool[];
  }
}
