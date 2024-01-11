import { UpCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IImage {
  url: string;
}
interface ICreated {
  name: string;
}
interface IPost {
  title: string;
  slug: string;
  shortDesc: string;
  createdBy: ICreated;
  headerImage: IImage;
}

interface IContentProps {
  posts: IPost[];
  slug: string;
}

const FooterDetail: React.FC<IContentProps> = ({ posts, slug }) => {
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
          <div className="grid grid-cols-3 lg:gap-8 gap-4 py-10 w-[1000px] lg:h-[400px] lg:w-full">
            {posts.map((item, index: number) => (
              <Link key={index} href={`/${slug}/${item?.slug}`}>
              <div className="w-full h-full relative overflow-hidden rounded-2xl group">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={item?.headerImage?.url}
                    alt={item?.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"  
                  />
                </div>
                <div className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 flex flex-col justify-end p-4">
                  <p className="text-[#F5F7F8] font-bold md:text-[1rem] lg:text-[1.2rem] text-sm text-center text-shadow-lg">
                    {item?.title}
                  </p>
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
      <button
        className={`fixed bottom-0 right-0 bg-[#FF9209] opacity-70 rounded-2xl text-white p-4 m-4 lg:m-4 ${
          showButton ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        onClick={handleClickScrollTop}
        style={{
          transform: showButton ? "translateY(-50px)" : "translateY(100px)",
        }}
      >
        <UpCircleOutlined className="text-[2rem]" />
      </button>
    </div>
  );
};

export default FooterDetail;
