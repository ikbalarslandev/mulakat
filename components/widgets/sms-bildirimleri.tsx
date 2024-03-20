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

const SmsBildirimleri = () => {
  return (
    <div className="flex flex-col gap-5 items-center m-5">
      <SectionTemplate desc="SMS bildirimi almak istiyor musun?" />

      <Button variant="kaydet" className="ml-auto mt-5">
        Kaydet
      </Button>
    </div>
  );
};

export default SmsBildirimleri;
