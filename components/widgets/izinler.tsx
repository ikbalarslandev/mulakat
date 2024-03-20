import { IoWarningOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import CheckboxTemplate from "../checkbox-template";

const Izinler = () => {
  return (
    <div>
      <div className="bg-mblue mt-4 mx-3 px-2 py-3 rounded flex gap-7 items-center ">
        <IoWarningOutline className="text-white w-8 h-8" />
        <p className="text-white">
          Aşağıdaki seçenekler yalnızca özgeçmiş havuzu içindir. Başvuru
          yaptığınız firmalar özgeçmişinizin tamamını görüntüleyebilir.
        </p>
      </div>
      <div className="border rounded mt-3 mx-3 px-3 py-4">
        <div className="  flex flex-col gap-3 ">
          <CheckboxTemplate desc="Özgeçmiş havuzu aramalarında görüntülenmesine izin ver" />
          <CheckboxTemplate desc="Is arama durumunu aktif et" />
          <CheckboxTemplate desc="Referans bilgilerimi isveren firmaya gosterme" />
          <CheckboxTemplate desc="Calismakta oldugum firmayi gizle" />
        </div>
        <div className="flex justify-between items-end ">
          <Button variant="link" className=" mt-5 mx-0 px-0">
            Üyelikten Ayrılmak istiyorum
          </Button>
          <Button variant="kaydet" className=" mt-5 mr-2">
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Izinler;
