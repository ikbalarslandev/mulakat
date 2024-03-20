"use client";

import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const InputTemplate = ({ name, placeholder, className = "flex-1" }: any) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col space-y-1.5 relative  ${className}`}>
      <Label
        htmlFor={name}
        className="absolute left-3 text-sm -top-[1px] px-2 bg-white flex gap-1"
      >
        <p className="text-gray-500">{name}</p>
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        className="border-blue-800 py-4 "
      />
      {showPassword ? (
        <FaEye
          onClick={handleShowPassword}
          className="absolute right-3 top-3"
        />
      ) : (
        <FaEyeSlash
          onClick={handleShowPassword}
          className="absolute right-3 top-3"
        />
      )}
    </div>
  );
};

const SifreyiDegistir = () => {
  return (
    <Card className="w-full mt-10 ">
      <CardContent>
        <form className="flex flex-col gap-5">
          <div className="flex  items-center gap-4 ">
            <InputTemplate name="Yeni Sifre" placeholder=" " />
            <InputTemplate name="Yeni Sifreniz(tekrar)" placeholder=" " />
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
