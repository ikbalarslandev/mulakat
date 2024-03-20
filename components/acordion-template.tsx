import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Template = ({ triggerh, triggerp, item }: any) => {
  return (
    <AccordionItem className="shadow-md  bg-white" value={triggerh}>
      <AccordionTrigger className="p-3 ">
        <div className="flex flex-col items-start">
          <h6 className="font-semibold text-blue-800  ">{triggerh}</h6>
          <p className="text-sm text-gray-500">{triggerp}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <hr />
        {item}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Template;
