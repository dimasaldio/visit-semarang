import React, { useState } from "react";
import FooterSlider from "./component/footerSlider";
import { dummyDataSlider } from "@/dummy";

const SliderTop: React.FC = () => {
  const [key, setKey] = useState(0);
  return (
    <div
      className="w-full lg:h-[700px] h-[600px] text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${dummyDataSlider[key].urlImg})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col justify-between h-full bg-black bg-opacity-[0.5]">
        <div className="grid lg:grid-cols-3 grid-cols-2 h-[400px]">
          <div className="lg:p-20 p-8 lg:col-span-2 col-span-1">
            <p className="lg:text-[2.5rem] text-[1.5rem] font-bold">
              {dummyDataSlider[key].title}
            </p>
          </div>
          <FooterSlider />
        </div>
        <div className="border-t-2 border-white lg:mx-20 flex flex-row justify-center">
          {dummyDataSlider.map((item: any, index: number) => (
            <div className="mx-6  w-[300px] h-full shadow-xl" key={item.key}>
              <button
                className={index === key ? `border-t-4 border-[#C70039]` : ""}
                onClick={() => setKey(item.key)}
              >
                <p className="text-white font-bold lg:text-lg text-sm text-center pb-5 lg:text-left">
                  {item.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderTop;
