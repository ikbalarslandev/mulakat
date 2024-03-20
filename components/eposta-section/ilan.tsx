import SectionTemplate from "../section-template";

const Ilan = () => {
  return (
    <div className="w-full">
      {" "}
      <h3 className="border border-mblue rounded-sm  w-full my-5 px-4 py-2 text-mblue font-bold">
        İLAN BİLGİLENDİRMELERİ
      </h3>
      <div className="flex flex-col w-full gap-4">
        <SectionTemplate desc="İş Habercisi ayarları ile düzenlediğim kriterlere uygun ilanların gönderimi" />
        <hr />
        <SectionTemplate desc="Özgeçmişime/Tercihlerime uygun iş ilanları gönderimi" />
        <hr />
        <SectionTemplate desc="Takip ettiğim ilanların kapanma tarihlerine dair bilgilendirme" />
        <hr />
        {/* <SectionTemplate desc="Başvurduğum ilanların mülakat daveti detaylarına dair bilgilendirmeler" />
        <hr /> */}
      </div>
    </div>
  );
};

export default Ilan;
