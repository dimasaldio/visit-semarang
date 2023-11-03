import React, { useEffect, useState } from "react";
import FooterSlider from "./component/footerSlider";
import { dummyDataSlider } from "@/pages/dummy";

const SliderTop: React.FC = () => {
  const [key, setKey] = useState(0)
  return (
    <div
      className="w-full h-[700px] text-white"
      style={{ backgroundImage: `url(${dummyDataSlider[key].urlImg})`, transition: "background-image 0.5s ease-in-out", backgroundSize: '1600px 800px' }}
    >
      <div className="flex flex-col justify-between h-full bg-black bg-opacity-[0.5]">
        <div className="grid grid-cols-3 h-[400px]">
          <div className="p-20 col-span-2">
            <p className="text-[2.5rem] font-bold">{dummyDataSlider[key].title}</p>
            {/* <button className="bg-[#C70039] rounded-full p-6 text-sm mt-8 font-bold cursor-pointer">
              Jelajahi Selengkapnya
            </button> */}
          </div>
          <FooterSlider />
        </div>
        <div className="border-t-2 border-white mx-20 flex flex-row justify-center">
          {dummyDataSlider.map((item: any, index:number) => (
            <div className="mx-6  w-[300px] h-full shadow-xl" key={item.key}>
              <button className={index===key ? `border-t-4 border-[#C70039]` : ''} onClick={()=>setKey(item.key)}>
                <p className="text-white font-bold text-lg pb-5 text-left">
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