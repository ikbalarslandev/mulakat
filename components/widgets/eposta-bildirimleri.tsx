"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const IstiyorumSwitch = () => {
  const [iwant, setIwant] = useState(false);
  const handleIwant = () => {
    setIwant(!iwant);
  };
  return (
    <div className="flex items-center space-x-2">
      <Label className="w-20" htmlFor="airplane-mode">
        {iwant ? "istiyorum" : "istemiyorum"}
      </Label>
      <Switch onClick={handleIwant} checked={iwant} id="airplane-mode" />
    </div>
  );
};

const SectionTemplate = ({ desc }: any) => {
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
        <h3 className="border border-blue-700 rounded-sm  w-full my-5 px-4 py-2 text-blue-700 font-bold">
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
        <h3 className="border border-blue-700 rounded-sm  w-full my-5 px-4 py-2 text-blue-700 font-bold">
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
        <h3 className="border border-blue-700 rounded-sm  w-full my-5 px-4 py-2 text-blue-700 font-bold">
          MESAJ BİLGİLENDİRMELERİ
        </h3>
        <div className="flex flex-col w-full gap-4">
          <SectionTemplate desc="Görmediğim mesajların bilgilendirmeleri" />
          <hr />
        </div>
      </div>
      <div className="w-full">
        {" "}
        <h3 className="border border-blue-700 rounded-sm  w-full my-5 px-4 py-2 text-blue-700 font-bold">
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
