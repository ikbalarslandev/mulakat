import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputTemplate = ({ name, placeholder, className = "flex-1" }: any) => {
  return (
    <div className={`flex flex-col space-y-1.5 relative  ${className}`}>
      <Label
        htmlFor={name}
        className="absolute left-3 text-sm -top-[1px] px-2 bg-white flex gap-1"
      >
        <p className="text-gray-500">{name}</p>
        <span className="text-red-700">*</span>
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        className="border-blue-800 py-4 "
      />
    </div>
  );
};

const KisiselBilgiler = () => {
  return (
    <Card className="w-full mt-10 ">
      <CardContent>
        <form className="flex flex-col gap-5">
          <div className="flex  items-center gap-4 w-[25vw]">
            <InputTemplate name="Ad" placeholder="Habip" />
            <InputTemplate name="Soyad" placeholder="Kaya" />
          </div>
          <div className=" flex justify-between  items-center ">
            <InputTemplate
              name="Eposta Adresi"
              placeholder="habipagca@hotmail.com"
              className="w-[25vw]"
            />
            <Button variant="dogrula">Dogrula</Button>
          </div>
          <div className=" flex justify-between  items-center ">
            <div className="flex  items-center gap-4 w-[25vw] ">
              <Input
                placeholder="Turkiye"
                className="border-blue-800 flex-1 mt-[6px]"
              />
              <InputTemplate
                name="Telefon Numarasi"
                placeholder=" (550) 952 36 33"
              />
            </div>

            <Button variant="dogrula">Dogrula</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between mt-5">
        <p className="text-sm text-gray-500">
          Ad, soyad ve e-posta bilgilerinde değişiklik yaptığında, tüm
          özgeçmişlerin güncellenecektir.
        </p>
        <Button variant="kaydet">Kaydet</Button>
      </CardFooter>
    </Card>
  );
};

export default KisiselBilgiler;
