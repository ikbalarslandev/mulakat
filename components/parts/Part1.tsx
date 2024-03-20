import Template from "../acordion-template";
import KisiselBilgiler from "../widgets/kisisel-bilgiler";

const Part1 = () => {
  return (
    <Template
      triggerh="Kisisel Bilgiler"
      triggerp="Ad, soyad, e-posta ve telefon bilgilerini düzenleyebilirsin."
      item={<KisiselBilgiler />}
    />
  );
};

export default Part1;
