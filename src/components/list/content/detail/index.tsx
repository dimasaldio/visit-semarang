import Link from "next/link";
import React from "react";

interface IContent {
  id: number;
  urlImg: string;
  subtitle: string;
}
interface IListContent {
  content: IContent | undefined;
}
const ContentDetail: React.FC<IListContent> = ({ content }) => {
  return (
    <>
      <div
        className="w-full lg:h-[500px] h-[400px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${content?.urlImg})` }}
      />
      <div className="bg-white color-black mx-8 lg:mx-[180px] overflow-hidden lg:h-auto">
        <h1 className="lg:text-[2.5rem] text-2xl font-bold text-center text-[#776B5D] my-8">
          {content?.subtitle}
        </h1>
        <h2 className="lg:text-xl text-sm text-center pb-10 my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          malesuada pellentesque elit eget gravida cum sociis.
        </h2>
        <p id="author" className="text-center my-8 font-bold">
          Oleh Lorem Ipsum
        </p>
        <p id="content" className="lg:mx-[200px] my-8 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          malesuada pellentesque elit eget gravida cum sociis. Elementum
          facilisis leo vel fringilla est ullamcorper. Ut pharetra sit amet
          aliquam id. Bibendum enim facilisis gravida neque convallis a cras
          semper auctor. Nullam vehicula ipsum a arcu cursus vitae congue mauris
          rhoncus. Gravida dictum fusce ut placerat. Ipsum suspendisse ultrices
          gravida dictum fusce ut placerat. <br /> <br />
          Id semper risus in hendrerit gravida rutrum quisque non. Pretium quam
          vulputate dignissim suspendisse in est ante. Morbi tristique senectus
          et netus et malesuada. Faucibus pulvinar elementum integer enim neque.
          Nullam non nisi est sit. Proin sagittis nisl rhoncus mattis rhoncus
          urna neque viverra justo. Morbi tristique senectus et netus et
          malesuada fames ac. Netus et malesuada fames ac turpis egestas
          maecenas pharetra. Tincidunt eget nullam non nisi est sit. Egestas
          integer eget aliquet nibh praesent tristique magna sit. Nulla
          malesuada pellentesque elit eget gravida. Nulla malesuada pellentesque
          elit eget gravida. Vitae auctor eu augue ut lectus. Eget nunc lobortis
          mattis aliquam. Faucibus interdum posuere lorem ipsum dolor sit. Eget
          nunc lobortis mattis aliquam faucibus purus in massa. Morbi leo urna
          molestie at elementum eu facilisis sed odio. At erat pellentesque
          adipiscing commodo elit. Nullam non nisi est sit amet facilisis. Non
          blandit massa enim nec dui nunc mattis. Ut ornare lectus sit amet.
          Ullamcorper dignissim cras tincidunt lobortis. Ornare quam viverra
          orci sagittis eu volutpat odio. Placerat vestibulum lectus mauris
          ultrices.
        </p>
        <div className="lg:mx-[200px] my-8 overflow-hidden">
          <img
            src="https://wallpapercave.com/wp/wp4511355.jpg"
            className="w-full h-auto"
          />
        </div>
        <p id="content" className="lg:mx-[200px] my-8 text-justify">
          Tincidunt vitae semper quis lectus nulla at. Maecenas sed enim ut sem
          viverra aliquet eget. Commodo odio aenean sed adipiscing diam donec
          adipiscing tristique risus. Vulputate sapien nec sagittis aliquam
          malesuada bibendum arcu. Ornare quam viverra orci sagittis eu volutpat
          odio facilisis mauris. Convallis posuere morbi leo urna molestie at
          elementum. Tortor posuere ac ut consequat semper viverra. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium vulputate. Cras
          sed felis eget velit aliquet sagittis id. Amet tellus cras adipiscing
          enim eu.
        </p>
      </div>
    </>
  );
};

export default ContentDetail;
