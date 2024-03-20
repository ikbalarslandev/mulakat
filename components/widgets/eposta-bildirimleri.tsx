import { Button } from "@/components/ui/button";

import SectionTemplate from "../section-template";
import Ilan from "../eposta-section/ilan";
import Kampanya from "../eposta-section/kampanya";
import Mesaj from "../eposta-section/mesaj";
import Ozgecmis from "../eposta-section/ozgecmis";

const EpostaBildirimleri = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <SectionTemplate desc="E-posta bildirimleri" />

      <Ilan />
      <Kampanya />
      <Mesaj />
      <Ozgecmis />

      <Button variant="kaydet" className="ml-auto mt-5">
        Kaydet
      </Button>
    </div>
  );
};

export default EpostaBildirimleri;
