import Template from "../acordion-template";
import EpostaBildirimleri from "../widgets/eposta-bildirimleri";

const Part3 = () => {
  return (
    <Template
      triggerh="E-posta Bildirimleri"
      triggerp="isbul.net’ten iş fırsatları ve bilgilendirme e-postaları alma konusunda tercihini belirleyebilirsin."
      item={<EpostaBildirimleri />}
    />
  );
};

export default Part3;
