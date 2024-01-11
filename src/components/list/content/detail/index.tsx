import Image from "next/image";
import React from "react";

interface IImage {
  url: string;
}
interface ICreated {
  name: string;
}
interface IContent {
  html: string;
}
interface IPost {
  title: string;
  slug: string;
  shortDesc: string;
  createdBy: ICreated;
  headerImage: IImage;
  content: IContent;
}
interface IContentProps {
  data: IPost;
}
const ContentDetail: React.FC<IContentProps> = ({ data }) => {
  return (
    <>
      <div className="w-full lg:h-[600px] md:h-[400px] h-[300px] relative overflow-hidden">
        <div className="aspect-w-2 aspect-h-1">
          <Image
            src={data?.headerImage?.url}
            alt="Header Image"
            width={800}
            height={800}
            className="object-cover object-top w-full h-full lg:-translate-y-[200px]"
          />
        </div>
      </div>
      <div className="bg-white color-black mx-8 lg:mx-[180px] overflow-hidden lg:h-auto">
        <h1 className="lg:text-[2.5rem] text-2xl font-bold text-center text-[#776B5D] md:my-8">
          {data?.title}
        </h1>
        <p id="author" className="text-center my-8 font-bold">
          Oleh {data?.createdBy?.name}
        </p>
        <div className="lg:mx-[80px] my-8 text-justify">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content?.html || "",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ContentDetail;
