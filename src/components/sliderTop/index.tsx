import React, { useState } from "react";
import { IHeader } from "@/interface";
import { Carousel } from "antd";
import Image from "next/image";

const SliderTop: React.FC<IHeader> = ({ data }) => {
  // const [key, setKey] = useState(0);

  return (
    <Carousel autoplay>
      {data.map((item, index) => (
        <div key={index} className="relative w-full lg:h-[500px] h-[400px]">
          <Image
            src={item?.images?.url}
            alt={item?.title}
            width={800}
            height={800}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-[0.2] items-center">
            <div className="grid grid-cols-3 h-[400px]">
              <div className="p-8 col-span-2">
                <p className="md:text-[2.5rem] text-[1.5rem] font-bold text-white">
                  {item?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SliderTop;
