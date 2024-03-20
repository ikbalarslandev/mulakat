import Template from "../acordion-template";
import SmsBildirimleri from "../widgets/sms-bildirimleri";

const Part4 = () => {
  return (
    <Template
      triggerh="SMS Bildirimleri"
      triggerp="İsbul.net'ten iş fırsatları ve bilgilendirme SMS’leri alma konusunda tercihini belirleyebilirsin."
      item={<SmsBildirimleri />}
    />
  );
};

export default Part4;
