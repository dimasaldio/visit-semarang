import { UpCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  posts: IPost[]
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
          <div className="grid grid-cols-3 lg:gap-8 gap-4 py-10 w-[1000px] lg:w-full">
            {posts.map((item, index: number) => (
              <Link key={index} href={`/${slug}/${item?.slug}`}>
                <div
                  className="flex flex-col items-end w-full lg:h-[500px] h-[300px] bg-cover lg:hover:scale-105 bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${item?.headerImage?.url})` }}
                >
                  <div className="w-full h-full bg-black bg-opacity-20">
                    <p className="lg:text-2xl text-xl my-8 font-bold lg:font-extrabold text-center">
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
