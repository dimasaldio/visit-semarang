import { ArrowRightOutlined, SmileTwoTone } from "@ant-design/icons";
import React from "react";
import { Divider } from "antd";
import IListWisata from "@/interface";
import Link from "next/link";

const ContentGrid: React.FC<IListWisata> = ({
  title,
  content,
  isUnique,
  href,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between py-4">
        <div>
          <p className="lg:text-2xl text-sm font-semibold">
            <SmileTwoTone twoToneColor="#C70039" /> {`${title}`}
          </p>
        </div>
        {content.length > 2 && (
          <div>
            <Link href={`/${href}`}>
              <p className="lg:text-md text-xs border-b border-[#C70039]">
                Jelajahi {title} Lainnya <ArrowRightOutlined />
              </p>
            </Link>
          </div>
        )}
      </div>
      <Divider />
      <div
        className={
          isUnique
            ? `grid grid-cols-2 gap-4 lg:h-[500px] h-[250px] w-full`
            : `grid grid-cols-3 gap-4 lg:h-[500px] h-[250px] w-full`
        }
      >
        {isUnique ? (
          <>
            <Link href={`/${href}/${content[0].id}`}>
              <div
                className="w-full h-full rounded-2xl bg-cover bg-center hover:scale-105 overflow-hidden"
                style={{ backgroundImage: `url(${content[0].urlImg})` }}
              >
                <div className="w-full h-full bg-black bg-opacity-50">
                  <p className="text-[#F5F7F8] font-bold lg:text-3xl text-md text-center lg:text-left lg:p-24 p-8 text-shadow-lg">
                    {content[0].subtitle}
                  </p>
                </div>
              </div>
            </Link>
            <div className="grid grid-rows-2 gap-4">
              {content.slice(1, 3).map((item, index: number) => (
                <Link key={index} href={`/${href}/${item.id}`}>
                  <div
                    className="w-full h-full rounded-2xl bg-cover hover:scale-105 bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${item.urlImg})` }}
                  >
                    <div className="w-full h-full bg-black bg-opacity-50">
                      <p className="text-[#F5F7F8] font-bold lg:text-2xl text-xs p-5 text-center lg:text-left lg:pt-20 p-8 lg:pl-5 text-shadow-lg">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          content.slice(0, 3).map((item, index: number) => (
            <Link key={index} href={`/${href}/${item.id}`}>
              <div
                className="w-full h-full rounded-2xl bg-center bg-cover hover:scale-105 overflow-hidden"
                style={{ backgroundImage: `url(${item.urlImg})` }}
              >
                <div className="w-full h-full bg-black bg-opacity-50">
                  <p className="text-[#F5F7F8] font-bold lg:text-2xl text-xs p-4 text-center lg:text-left lg:pt-20 lg:pl-5 text-shadow-lg">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default ContentGrid;
