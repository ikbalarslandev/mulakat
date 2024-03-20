import { Button } from "@/components/ui/button";
import IstiyorumSwitch from "../istiyorum-swithch";

const SectionTemplate = ({ desc }: { desc: string }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-gray-500 text-sm">{desc}</p>
      <IstiyorumSwitch />
    </div>
  );
};

const SmsBildirimleri = () => {
  return (
    <div className="flex flex-col gap-5 items-center m-5">
      <SectionTemplate desc="SMS bildirimi almak istiyor musun?" />

      <Button variant="kaydet" className="ml-auto mt-5">
        Kaydet
      </Button>
    </div>
  );
};

export default SmsBildirimleri;
