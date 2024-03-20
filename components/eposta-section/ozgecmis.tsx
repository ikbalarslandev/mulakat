import SectionTemplate from "../section-template";

const Ozgecmis = () => {
  return (
    <div className="w-full">
      {" "}
      <h3 className="border border-mblue rounded-sm  w-full my-5 px-4 py-2 text-mblue font-bold">
        KAMPANYA VE PROMOSYONLAR BİLGİLENDİRMELERİ
      </h3>
      <div className="flex flex-col w-full gap-4">
        <SectionTemplate desc="Seminer – Etkinlik Duyuruları" />
        <hr />
        <SectionTemplate desc="İsbul.net ürünleri ile ilgili tanıtımlar" />
        <hr />
        <SectionTemplate desc="İsbul.net iş ortaklarının kampanya ve tanıtım duyuruları" />
        <hr />
        <SectionTemplate desc="Başvurduğum ilanların mülakat daveti detaylarına dair bilgilendirmeler" />
        <hr />
      </div>
    </div>
  );
};

export default Ozgecmis;
