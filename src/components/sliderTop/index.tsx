import React, { useState } from "react";
import FooterSlider from "./component/footerSlider";
import { dummyDataSlider } from "@/dummy";

const SliderTop: React.FC = () => {
  const [key, setKey] = useState(0);
  return (
    <div
      className="w-full lg:h-[700px] h-[400px] text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${dummyDataSlider[key].urlImg})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col justify-between h-full bg-black bg-opacity-[0.2] items-center">
        <div className="grid lg:grid-cols-3 grid-cols-2 h-[400px]">
          <div className="lg:p-20 p-8 lg:col-span-2 col-span-1">
            <p className="lg:text-[2.5rem] text-[1.5rem] font-bold">
              {dummyDataSlider[key].title}
            </p>
          </div>
          <FooterSlider />
        </div>
        <div className="lg:mx-20 flex my-8 flex-row">
          {dummyDataSlider.map((item: any, index: number) => (
            <div className="w-full h-full shadow-xl mx-6" key={item.key}>
              <button
                className={
                  index === key
                    ? `bg-[#C70039] rounded-full lg:w-8 w-4 h-4 lg:h-8`
                    : "rounded-full lg:w-8 w-4 h-4 lg:h-8 bg-white rounded-full"
                }
                onClick={() => setKey(item.key)}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderTop;
