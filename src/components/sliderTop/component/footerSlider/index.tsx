import React from "react";
import Image from "next/image";

interface IImage {
  url: string
}
interface ILogo {
  data: IImage[]
}
const FooterSlider: React.FC<ILogo> = ({data}) => {
  return (
    <div className="flex flex-row justify-center items-start text-black py-5">
      {data.map((item: any, index: number) => (
        <div key={index} className="mx-2">
          <Image src={item?.url} alt={`logo ${index}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default FooterSlider;
