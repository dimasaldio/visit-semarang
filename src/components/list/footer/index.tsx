import { UpCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IContent {
  id: number;
  urlImg: string;
  subtitle: string;
}
interface IFooterDetail {
  content: IContent[];
  href: string;
}

const FooterDetail: React.FC<IFooterDetail> = ({ content, href }) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.2;

    if (scrollPosition >= threshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#B0A695] text-white relative w-full">
      <div className="lg:mx-[150px] py-10 mx-8">
        <h2 className="font-bold lg:text-[2rem] text-xl">
          ARTIKEL LAIN SEPERTI INI
        </h2>
        <div className="overflow-x-scroll lg:overflow-hidden">
          <div className="grid grid-cols-3 lg:gap-8 gap-4 py-10 w-[1000px] lg:w-full">
            {content.map((item, index: number) => (
              <Link key={index} href={`/${href}/${item.id}`}>
                <div
                  className="flex flex-col items-end w-full lg:h-[500px] h-[300px] bg-cover lg:hover:scale-105 bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${item.urlImg})` }}
                >
                  <div className="w-full h-full bg-black bg-opacity-20">
                    <p className="lg:text-2xl text-xl my-8 font-bold lg:font-extrabold text-center">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <button
        className={`fixed bottom-0 right-0 bg-[#FF9209] rounded-2xl text-white p-4 m-4 lg:m-4 ${
          showButton ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        onClick={handleClickScrollTop}
        style={{
          transform: showButton ? "translateY(0)" : "translateY(100px)",
        }}
      >
        <UpCircleOutlined className="text-[2rem]" />
      </button>
    </div>
  );
};

export default FooterDetail;
