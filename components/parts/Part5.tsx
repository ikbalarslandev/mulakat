import Template from "../acordion-template";
import Izinler from "../widgets/izinler";

const Part5 = () => {
  return (
    <Template
      triggerh="İzinler"
      triggerp="İletişim ve özgeçmiş görüntüleme ile ilgili izinlerinizi aşağıdan yönetebilirsiniz."
      item={<Izinler />}
    />
  );
};

export default Part5;
