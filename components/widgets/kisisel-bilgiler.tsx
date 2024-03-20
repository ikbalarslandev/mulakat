import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputTemplate from "../input-template";

const KisiselBilgiler = () => {
  return (
    <Card className="w-full mt-10 ">
      <CardContent>
        <form className="flex flex-col gap-5">
          <div className="flex  items-center gap-4 w-[25vw]">
            <InputTemplate name="Ad" placeholder="Habip" />
            <InputTemplate name="Soyad" placeholder="Kaya" />
          </div>
          <div className=" flex justify-between  items-center  ">
            <InputTemplate
              name="Eposta Adresi"
              placeholder="habipagca@hotmail.com"
              className="w-[25vw]"
            />
            <Button variant="dogrula">Dogrula</Button>
          </div>
          <div className=" flex justify-between  items-center ">
            <div className="flex  items-center gap-4 w-[25vw] ">
              <div className="border-blue-800 flex-1 mt-[6px]">
                <Select>
                  <SelectTrigger
                    id="framework"
                    className="border-blue-800 text-blue-800"
                  >
                    <SelectValue placeholder="Turkiye" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="germany">GERMANY</SelectItem>
                    <SelectItem value="crotia">CROTIA</SelectItem>
                    <SelectItem value="us">USA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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
