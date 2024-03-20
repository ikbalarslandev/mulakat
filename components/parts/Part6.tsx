import Template from "../acordion-template";
import EngellenenFirmalar from "../widgets/engellenen-firmalar";

const Part6 = () => {
  return (
    <Template
      triggerh="Engellenen Firmalar"
      triggerp="Engellediğiniz firmaların listesine ve engellemek istediğiniz firmaları aşağıdan yönetebilirsiniz."
      item={<EngellenenFirmalar />}
    />
  );
};

export default Part6;
