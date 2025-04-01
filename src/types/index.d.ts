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
