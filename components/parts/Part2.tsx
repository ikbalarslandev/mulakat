import Template from "../acordion-template";
import SifreyiDegistir from "../widgets/sifreyi-degistir";

const Part2 = () => {
  return (
    <Template
      triggerh="Şifreyi Değiştir"
      triggerp="Şifreni değiştirebilir veya sıfırlayabilirsin."
      item={<SifreyiDegistir />}
    />
  );
};

export default Part2;
