import IstiyorumSwitch from "./istiyorum-swithch";

const SectionTemplate = ({ desc }: { desc: string }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-gray-500 text-sm">{desc}</p>
      <IstiyorumSwitch />
    </div>
  );
};

export default SectionTemplate;
