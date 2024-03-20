import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import InputTemplate from "../input-template";

const SifreyiDegistir = () => {
  return (
    <Card className="w-full mt-10 ">
      <CardContent>
        <form className="flex flex-col gap-5">
          <div className="flex  items-center gap-4 ">
            <InputTemplate
              name="Yeni Sifre"
              placeholder=" "
              isPassword={true}
            />
            <InputTemplate
              name="Yeni Sifreniz(tekrar)"
              placeholder=" "
              isPassword={true}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between mt-5">
        <Button variant="kaydet" className="ml-auto">
          Kaydet
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SifreyiDegistir;
