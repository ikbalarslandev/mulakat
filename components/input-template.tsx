"use client";

import * as React from "react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface InputTemplateProps {
  name: string;
  placeholder: string;
  className?: string;
  isPassword?: boolean;
}

const InputTemplate = ({
  name,
  placeholder,
  className = "flex-1",
  isPassword = false,
}: InputTemplateProps) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col space-y-1.5 relative  ${className}`}>
      <Label
        htmlFor={name}
        className="absolute left-3 text-sm -top-[6px] px-2 bg-white flex gap-1"
      >
        <p className="text-gray-500">{name}</p>
        {!isPassword && <span className="text-red-700">*</span>}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        className="border-mblue py-4 "
      />
      {isPassword &&
        (showPassword ? (
          <FaEye
            onClick={handleShowPassword}
            className="absolute right-3 top-3"
          />
        ) : (
          <FaEyeSlash
            onClick={handleShowPassword}
            className="absolute right-3 top-3"
          />
        ))}
    </div>
  );
};

export default InputTemplate;
