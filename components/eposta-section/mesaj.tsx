import SectionTemplate from "../section-template";

const Mesaj = () => {
  return (
    <div className="w-full">
      <h3 className="border border-mblue rounded-sm  w-full my-5 px-4 py-2 text-mblue font-bold">
        MESAJ BİLGİLENDİRMELERİ
      </h3>
      <div className="flex flex-col w-full gap-4">
        <SectionTemplate desc="Görmediğim mesajların bilgilendirmeleri" />
        <hr />
      </div>
    </div>
  );
};

export default Mesaj;
