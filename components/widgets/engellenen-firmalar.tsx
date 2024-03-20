import { Button } from "@/components/ui/button";
import { FaBan } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";

const EngellenenFirmalar = () => {
  return (
    <div className="mt-5 flex flex-col mx-5 ">
      <Button className=" mt-5  ml-auto  flex gap-2 p-2  bg-mblue">
        <FaBan className=" text-white w-5 h-5" />
        <p> Firma Engelle</p>
      </Button>

      <div className="bg-white border shadow-md  mt-5  flex items-center gap-5  rounded-md">
        <PiWarningCircleBold
          className="w-12 h-12 bg-red-600 text-white  py-3 px-2 
rounded-l-lg"
        />
        <p>Engellenen firma bulunamadı</p>
      </div>
    </div>
  );
};

export default EngellenenFirmalar;
