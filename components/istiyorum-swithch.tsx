"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

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

export default IstiyorumSwitch;
