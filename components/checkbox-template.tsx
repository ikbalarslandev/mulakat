import { Checkbox } from "@/components/ui/checkbox";

const CheckboxTemplate = ({ desc }: { desc: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={desc} />
      <label htmlFor={desc} className="text-gray-500">
        {desc}
      </label>
    </div>
  );
};

export default CheckboxTemplate;
