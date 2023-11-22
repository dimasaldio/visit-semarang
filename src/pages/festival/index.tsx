import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataFestival } from "../../dummy";
import Link from "next/link";

const Festival: React.FC = () => {
  const data = dummyDataFestival.content;

  return (
    <Layout>
      <div>
        <ContentFull
          isHeader={true}
          title={dummyDataHeaderLiburan.title}
          content={dummyDataHeaderLiburan.content}
        />
        <div className="mx-[180px]">
          {data.map((item, index) => (
            <div
              className="grid grid-cols-2 gap-4 w-full justify-center border-t-2"
              key={index}
            >
              {index % 2 !== 0 && (
                <div
                  className="w-[500px] h-[500px] bg-cover bg-right overflow-hidden rounded-2xl my-8"
                  style={{
                    backgroundImage: `url(${item.urlImg})`,
                  }}
                ></div>
              )}
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <p className="mr-4 font-bold text-[4rem] text-[#FF9209]">
                    {item.id}
                  </p>
                  <p className="text-[#265073] text-[1.5rem]">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-[#265073] text-[1rem] font-bold pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-[#265073] text-[1rem] truncate">
                  Feugiat sed lectus vestibulum mattis. Arcu non sodales neque
                  sodales ut etiam sit. Sit amet purus gravida quis blandit.
                  Felis donec et odio pellentesque diam volutpat commodo sed
                  egestas. Rhoncus dolor purus non enim. Turpis nunc eget lorem
                  dolor sed viverra ipsum. Sed adipiscing diam donec adipiscing
                  tristique risus nec. Condimentum id venenatis a condimentum
                  vitae sapien. Morbi tincidunt augue interdum velit. Morbi non
                  arcu risus quis. In hac habitasse platea dictumst vestibulum
                  rhoncus. Varius morbi enim nunc faucibus a pellentesque. Purus
                  in mollis nunc sed id semper risus. Accumsan tortor posuere ac
                  ut consequat semper.
                </p>
                <Link href={`/festival/${item.id}`}>
                  <button className="cursor-pointer hover:border-b-2 text-[#265073]">
                    See More
                  </button>
                </Link>
              </div>
              {index % 2 === 0 && (
                <div
                  className="w-[500px] h-[500px] bg-cover bg-right overflow-hidden rounded-2xl my-8"
                  style={{
                    backgroundImage: `url(${item.urlImg})`,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Festival;
