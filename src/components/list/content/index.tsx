import Link from "next/link";
import React from "react";

interface IContent {
  id: number;
  urlImg: string;
  subtitle: string;
}
interface IListContent {
  content: IContent[];
  href: string;
}
const ContentList: React.FC<IListContent> = ({ content, href }) => {
  return (
    <div className="lg:mx-[180px] mx-8 overflow-hidden">
      {content.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 w-full justify-center border-t-2 lg:my-0 my-4">
            {index % 2 !== 0 && (
              <div
                className="w-full h-auto lg:h-[500px] bg-cover bg-right overflow-hidden rounded-2xl my-8"
                style={{
                  backgroundImage: `url(${item.urlImg})`,
                }}
              />
            )}
            <div className="flex flex-col my-4">
              <div className="flex flex-row items-center">
                <p className="mr-4 font-bold lg:text-[4rem] text-[2rem] text-[#FF9209]">
                  {item.id}
                </p>
                <Link href={`/${href}/${item.id}`}>
                  <p className="text-[#265073] lg:text-[1.5rem] text-sm">
                    {item.subtitle}
                  </p>
                </Link>
              </div>
              <p className="text-[#265073] lg:text-[1rem] text-xs lg:font-bold font-semibold pt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[#265073] lg:text-[1rem] text-xs truncate lg:my-4 my-2">
                Feugiat sed lectus vestibulum mattis. Arcu non sodales neque
                sodales ut etiam sit. Sit amet purus gravida quis blandit. Felis
                donec et odio pellentesque diam volutpat commodo sed egestas.
                Rhoncus dolor purus non enim. Turpis nunc eget lorem dolor sed
                viverra ipsum. Sed adipiscing diam donec adipiscing tristique
                risus nec. Condimentum id venenatis a condimentum vitae sapien.
                Morbi tincidunt augue interdum velit. Morbi non arcu risus quis.
                In hac habitasse platea dictumst vestibulum rhoncus. Varius
                morbi enim nunc faucibus a pellentesque. Purus in mollis nunc
                sed id semper risus. Accumsan tortor posuere ac ut consequat
                semper.
              </p>
              <Link href={`/${href}/${item.id}`}>
                <button className="cursor-pointer hover:border-b-2 text-[#265073] lg:text-base text-xs font-bold my-4">
                  See More
                </button>
              </Link>
            </div>
            {index % 2 === 0 && (
              <div
                className="lg:w-[500px] w-full h-auto lg:h-[500px] bg-cover bg-right overflow-hidden rounded-2xl my-8"
                style={{
                  backgroundImage: `url(${item.urlImg})`,
                }}
              />
            )}
          </div>
      ))}
    </div>
  );
};

export default ContentList;
