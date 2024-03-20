import SectionTemplate from "../section-template";

const Kampanya = () => {
  return (
    <div className="w-full">
      <h3 className="border border-mblue rounded-sm  w-full my-5 px-4 py-2 text-mblue font-bold">
        ÖZGEÇMİŞ VE HESAP BİLGİLENDİRMELERİ
      </h3>
      <div className="flex flex-col w-full gap-4">
        <SectionTemplate desc="isbul.net hesabım ile ilgili hatırlatmalar, bilgilendirmeler" />
        <hr />
        <SectionTemplate desc="Başvurumun firmaya iletildiğine dair bilgilendirme" />
        <hr />
        <SectionTemplate desc="Firma özgeçmişimi görüntülediğine dair bildirimler" />
        <hr />
      </div>
    </div>
  );
};

export default Kampanya;
