import { Button } from "@/components/ui/button";
import { FaBan } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";

const EngellenenFirmalar = () => {
  return (
    <div className="mt-5 flex flex-col bg-gray-100">
      <Button className=" mt-5 mr-2 mx-2 ml-auto  flex gap-2 p-2 ">
        <FaBan className=" text-white w-5 h-5" />
        <p> Firma Engelle</p>
      </Button>

      <div className="bg-white shadow-md  mt-5  flex items-center gap-5 mx-5 rounded-md">
        <PiWarningCircleBold
          className="w-10 h-10 bg-red-600 text-white  py-2 px-2 
rounded-l-lg"
        />
        <p>Engellenen firma bulunamadı</p>
      </div>
    </div>
  );
};

export default EngellenenFirmalar;
