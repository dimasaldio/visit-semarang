import { ArrowRightOutlined, SmileTwoTone } from "@ant-design/icons";
import React from "react";
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
}
const ContentGrid: React.FC<IContentProps> = ({ posts, slug, title }) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="mr-4 w-[70%]">
          <p className="lg:text-2xl md:text-xl text-xs font-semibold">
            <SmileTwoTone twoToneColor="#C70039" /> {`${title}`}
          </p>
        </div>
        {posts.length > 2 && (
          <div className="">
            <Link href={`/${slug}`}>
              <p className="md:text-md text-xs border-b border-[#C70039]">
                Jelajahi <ArrowRightOutlined />
              </p>
            </Link>
          </div>
        )}
      </div>
      <Divider />
      <div
        className={
          slug !== "heritage"
            ? `lg:overflow-hidden overflow-x-scroll overflow-y-hidden`
            : `overflow-hidden`
        }
      >
        <div
          className={
            slug === "heritage"
              ? `grid grid-cols-2 gap-4 lg:h-[700px] md:h-[600px] h-[250px] w-full`
              : `grid grid-cols-3 gap-4 lg:h-[400px] md:h-[300px] h-[250px] lg:w-full w-[800px]`
          }
        >
          {slug === "heritage" ? (
            <>
              <Link href={`/${slug}/${posts[0].slug}`}>
                <div className="w-full h-full relative overflow-hidden rounded-2xl group">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={posts[0].headerImage?.url}
                      alt={posts[0].title}
                      width={300}
                      height={300}
                      priority
                      className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 flex flex-col justify-end p-8 lg:p-24">
                    <p className="text-[#F5F7F8] font-bold lg:text-3xl md:text-2xl text-xs text-center lg:text-left text-shadow-lg">
                      {posts[0].title}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="grid grid-rows-2 gap-4">
                {posts.slice(1, 3).map((item, index: number) => (
                  <Link key={index} href={`/${slug}/${item?.slug}`}>
                    <div className="w-full h-full relative overflow-hidden rounded-2xl group">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={item?.headerImage?.url}
                          alt={item?.title}
                          width={300}
                          height={300}
                          priority
                          className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 flex flex-col justify-end p-5">
                        <p className="text-[#F5F7F8] font-bold md:text-[1rem] lg:text-[1.2rem] text-xs text-center md:text-left text-shadow-lg">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            posts.slice(0, 3).map((item, index: number) => (
              <Link key={index} href={`/${slug}/${item?.slug}`}>
                <div className="w-full h-full relative overflow-hidden rounded-2xl group">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={item?.headerImage?.url}
                      alt={item?.title}
                      width={300}
                      height={300}
                      priority
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
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ContentGrid;
