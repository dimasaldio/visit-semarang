import { UpCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

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
        <div className="overflow-x-scroll lg:overflow-x-auto">
          <div className="grid grid-cols-3 lg:gap-8 gap-4 py-10 w-[1000px] lg:w-full">
            {content.map((item) => (
              <>
                <Link href={`/${href}/${item.id}`}>
                  <div
                    key={item.id}
                    className="flex flex-col items-end w-full lg:h-[500px] h-[300px] bg-cover lg:hover:scale-105 bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${item.urlImg})` }}
                  >
                    <div className="w-full h-[100px] lg:h-[200px] backdrop-blur-sm bg-black bg-opacity-50">
                      <p className="lg:text-2xl text-sm my-8 lg:font-extrabold text-center">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-0 right-0 bg-[#FF9209] rounded-2xl text-white p-4 -my-4 lg:-my-4"
        onClick={handleClickScrollTop}
      >
        <UpCircleOutlined className="text-[2rem]" />
      </button>
    </div>
  );
};

export default FooterDetail;
