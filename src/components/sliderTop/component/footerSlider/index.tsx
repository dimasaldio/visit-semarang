import React from "react";
import { gambarFooter } from "@/pages/dummy";

const FooterSlider: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-start text-black py-5">
      {gambarFooter.map((item: any, index: number) => (
        <div key={index} className="mx-2">
          <img src={item} alt={`logo ${index}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default FooterSlider;
