import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import type { ServiceItem } from "homepage-service";
import { markdownify } from "../lib/markdownify";

type Props = {
  serviceItems: ServiceItem[];
};

export default function ServiceAccordion({ serviceItems }: Props) {
  return (
    <Accordion type="multiple">
      {serviceItems.map((service, index) => {
        return (
          <AccordionItem value={service.title} key={service.title}>
            <AccordionTrigger className="group justify-start">
              <span className="w-[84px]">0{index + 1}/</span>
              <span className="text-left text-[32px]">{service.title}</span>
              <div className="bg-background/15 border-background relative ml-auto size-10 flex-none rounded-full border">
                <span className="bg-primary absolute top-1/2 left-1/2 block h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out group-[[data-state=open]]:opacity-0" />
                <span className="bg-primary absolute top-1/2 left-1/2 block h-0.5 w-4 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="ml-[84px] max-w-[340px] py-2 text-base [&>*]:mb-5.5"
                dangerouslySetInnerHTML={{
                  __html: markdownify(service.content),
                }}
              />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
