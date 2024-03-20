import { Accordion } from "@/components/ui/accordion";
import Part1 from "./parts/Part1";
import Part2 from "./parts/Part2";
import Part3 from "./parts/Part3";
import Part4 from "./parts/Part4";
import Part5 from "./parts/Part5";
import Part6 from "./parts/Part6";

export function Mulakat() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[40vw] flex flex-col gap-2"
    >
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
    </Accordion>
  );
}
