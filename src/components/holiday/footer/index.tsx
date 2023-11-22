import { UpCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

interface IContent {
  id: number;
  urlImg: string;
  subtitle: string;
}
interface IFooterHoliday {
  content: IContent[];
  href: string;
}

const FooterHoliday: React.FC<IFooterHoliday> = ({ content, href }) => {
  const handleClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#B0A695] text-white relative">
      <div className="mx-[150px] py-10">
        <h2 className="font-bold text-[2rem]">ARTIKEL LAIN SEPERTI INI</h2>
        <div className="grid grid-cols-3 gap-8 py-10">
          {content.map((item) => (
            <>
              <Link href={`/${href}/${item.id}`}>
                <div
                  key={item.id}
                  className="flex flex-col items-end w-full h-[500px] bg-cover hover:scale-105 bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${item.urlImg})` }}
                >
                  <div className="w-full bg-black bg-opacity-50">
                    <p className="text-2xl my-8 font-extrabold text-center">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-0 right-0 bg-[#FF9209] rounded-2xl text-white p-4 m-4"
        onClick={handleClickScrollTop}
      >
        <UpCircleOutlined className="text-[2rem]" />
      </button>
    </div>
  );
};

export default FooterHoliday;
