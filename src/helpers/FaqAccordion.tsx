import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import type { Faq } from "faq-types";
import { markdownify } from "../lib/markdownify";

type Props = {
  faqItems: Faq["questions"];
};

export default function FaqAccordion({ faqItems }: Props) {
  return (
    <Accordion className="stagger-reveal" type="multiple">
      {faqItems.map((faq) => {
        return (
          <AccordionItem value={faq.question} key={faq.question}>
            <AccordionTrigger className="group">
              <span className="text-[22px]">{faq.question}</span>
              <div className="bg-background/15 border-background relative size-10 flex-none rounded-full border">
                <span className="bg-primary absolute top-1/2 left-1/2 block h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out group-[[data-state=open]]:opacity-0" />
                <span className="bg-primary absolute top-1/2 left-1/2 block h-0.5 w-4 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="max-w-[480px] py-2 text-base [&>*]:mb-5.5"
                dangerouslySetInnerHTML={{
                  __html: markdownify(faq.answer),
                }}
              />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
