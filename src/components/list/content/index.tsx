import Link from "next/link";
import Image from "next/image";
import React from "react";

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

const ContentList: React.FC<IContentProps> = ({ posts, slug }) => {
  return (
    <div className="lg:mx-[180px] mx-8 overflow-x-hidden overflow-y-scroll h-[800px]">
      {posts.map((item, index: number) => (
        <div
          key={index}
          className="grid grid-cols-2 gap-4 w-full justify-center border-t-2 lg:my-0 my-4"
        >
          {index % 2 !== 0 && (
            <div className="w-full h-[150px] md:h-[250px] relative overflow-hidden rounded-2xl my-8">
              <div className="aspect-w-2 aspect-h-1">
                <Image
                  src={item?.headerImage?.url}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-[150px] md:h-[300px] rounded-2xl"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col my-4">
            <div className="flex flex-row items-center">
              <p className="md:mr-4 mr-2 font-bold lg:text-[4rem] text-[2.5rem] text-[#FF9209]">
                {index + 1}
              </p>
              <Link href={`/${slug}/${item.slug}`}>
                <p className="text-[#265073] md:text-[1.2rem] text-xs md:leading-8 font-bold">
                  {item?.title}
                </p>
              </Link>
            </div>
            <p className="text-[#265073] md:text-[0.8rem] text-[0.5rem] lg:my-4 my-2">
              {item?.shortDesc.slice(0,200)}{"........"}
            </p>
            <Link href={`/${slug}/${item?.slug}`}>
              <button className="cursor-pointer hover:border-b-2 text-[#265073] lg:text-base text-xs font-bold my-4">
                See More
              </button>
            </Link>
          </div>
          {index % 2 === 0 && (
            <div className="w-full h-[150px] md:h-[250px] relative overflow-hidden rounded-2xl my-8">
              <div className="aspect-w-2 aspect-h-1">
                <Image
                  src={item?.headerImage?.url}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-[150px] md:h-[300px] rounded-2xl"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentList;
