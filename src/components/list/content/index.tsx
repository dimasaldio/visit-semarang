import Link from "next/link";
import React from "react";
import { IContents } from "@/interface";

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
const ContentList: React.FC<IContentProps> = ({ posts, slug }) => {
  return (
    <div className="lg:mx-[180px] mx-8 overflow-hidden">
      {posts.map((item, index:number) => (
          <div key={index} className="grid grid-cols-2 gap-4 w-full justify-center border-t-2 lg:my-0 my-4">
            {index % 2 !== 0 && (
              <div
                className="w-full h-auto lg:h-[500px] bg-cover bg-right overflow-hidden rounded-2xl my-8"
                style={{
                  backgroundImage: `url(${item?.headerImage?.url})`,
                }}
              />
            )}
            <div className="flex flex-col my-4">
              <div className="flex flex-row items-center">
                <p className="mr-4 font-bold lg:text-[4rem] text-[2rem] text-[#FF9209]">
                  {index + 1}
                </p>
                <Link href={`/${slug}/${item.slug}`}>
                  <p className="text-[#265073] lg:text-[1.5rem] text-sm">
                    {item?.title}
                  </p>
                </Link>
              </div>
              <p className="text-[#265073] lg:text-[1rem] text-xs truncate lg:my-4 my-2">
                {item?.shortDesc}
              </p>
              <Link href={`/${slug}/${item?.slug}`}>
                <button className="cursor-pointer hover:border-b-2 text-[#265073] lg:text-base text-xs font-bold my-4">
                  See More
                </button>
              </Link>
            </div>
            {index % 2 === 0 && (
              <div
                className="lg:w-[500px] w-full h-auto lg:h-[500px] bg-cover bg-right overflow-hidden rounded-2xl my-8"
                style={{
                  backgroundImage: `url(${item?.headerImage?.url})`,
                }}
              />
            )}
          </div>
      ))}
    </div>
  );
};

export default ContentList;
