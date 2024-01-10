import React, { useState } from "react";
import FooterSlider from "./component/footerSlider";
import { IHeader } from "@/interface";

const SliderTop: React.FC<IHeader> = ({data}) => {
  const [key, setKey] = useState(0);
  return (
    <div
      className="w-full lg:h-[700px] h-[400px] text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${data[key]?.images?.url})`,
      }}
    >
      <div className="flex flex-col justify-between h-full bg-black bg-opacity-[0.2] items-center">
        <div className="grid lg:grid-cols-3 grid-cols-2 h-[400px]">
          <div className="lg:p-20 p-8 lg:col-span-2 col-span-1">
            <p className="lg:text-[2.5rem] text-[1.5rem] font-bold">
              {data[key]?.title}
            </p>
          </div>
          <FooterSlider />
        </div>
        <div className="lg:mx-20 flex my-8 flex-row">
          {data?.map((item, index: number) => (
            <div className="w-full h-full shadow-xl mx-6" key={index}>
              <button
                className={
                  index === key
                    ? `bg-[#C70039] rounded-full lg:w-8 w-4 h-4 lg:h-8`
                    : "rounded-full lg:w-8 w-4 h-4 lg:h-8 bg-white rounded-full"
                }
                onClick={() => setKey(index)}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderTop;
