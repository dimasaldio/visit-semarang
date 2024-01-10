import React from "react";
import { RightCircleFilled, SmileTwoTone } from "@ant-design/icons";
import { Divider } from "antd";
import Link from "next/link";
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
  title: string;
  isHeader: boolean;
  images: IImage[];
  shortDesc: string;
}

const ContentFull: React.FC<IContentProps> = ({
  posts,
  slug,
  title,
  isHeader,
  images,
  shortDesc,
}) => {
  return (
    <div className="w-full h-full flex flex-col">
      {!isHeader && (
        <>
          <div>
            <p className="lg:text-2xl text-xs font-semibold lg:mx-[180px] mx-8">
              <SmileTwoTone twoToneColor="#C70039" /> {title}
            </p>
          </div>
          <Divider />
        </>
      )}
      <div className="relative overflow-hidden w-full lg:h-[600px] h-[400px]">
        <Image
          src={images[0]?.url}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start lg:px-8 px-4">
          {!isHeader ? (
            <>
              <div>
                <p className="text-[#F5F7F8] font-bold lg:text-[2.5rem] text-[2rem] lg:w-[600px] w-full text-left text-shadow-lg">
                  {title}
                </p>
              </div>
              <div>
                <Link href={`/${slug}`}>
                  <p className="text-[#F5F7F8] font-bold text-md text-left text-shadow-lg mt-10">
                    Jelajahi{" "}
                    <span>
                      <RightCircleFilled className="text-[#C70039]" />
                    </span>
                  </p>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="text-[#F5F7F8] font-bold lg:text-[3rem] text-[1.5rem] w-full text-left text-shadow-lg mb-4">
                  {title}
                </p>
              </div>
              <div>
                <p className="text-[#F5F7F8] font-light lg:text-[1.5rem] text-[0.8rem] w-full text-left text-shadow-lg">
                  {shortDesc}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentFull;
