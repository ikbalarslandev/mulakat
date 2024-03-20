import { Button } from "@/components/ui/button";

import IstiyorumSwitch from "../istiyorum-swithch";

const SectionTemplate = ({ desc }: { desc: string }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-gray-500 text-sm">{desc}</p>
      <IstiyorumSwitch />
    </div>
  );
};

const EpostaBildirimleri = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <SectionTemplate desc="E-posta bildirimleri" />
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
          <SectionTemplate desc="Başvurduğum ilanların mülakat daveti detaylarına dair bilgilendirmeler" />
          <hr />
        </div>
      </div>
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
      <div className="w-full">
        <h3 className="border border-mblue rounded-sm  w-full my-5 px-4 py-2 text-mblue font-bold">
          MESAJ BİLGİLENDİRMELERİ
        </h3>
        <div className="flex flex-col w-full gap-4">
          <SectionTemplate desc="Görmediğim mesajların bilgilendirmeleri" />
          <hr />
        </div>
      </div>
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
      <Button variant="kaydet" className="ml-auto mt-5">
        Kaydet
      </Button>
    </div>
  );
};

export default EpostaBildirimleri;
