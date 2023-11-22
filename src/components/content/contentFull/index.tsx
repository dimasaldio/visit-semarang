import React from "react";
import { RightCircleFilled, SmileTwoTone } from "@ant-design/icons";
import { Divider } from "antd";
import Link from "next/link";
import IListWisata from "@/interface";

const ContentFull: React.FC<IListWisata> = ({ title, content, isHeader, href }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {!isHeader && (
        <>
        <div>
          <p className="text-2xl font-semibold mx-[180px]">
            <SmileTwoTone twoToneColor="#C70039" /> {title}
          </p>
        </div>
      <Divider />
      </>
      )}
      <div
        className="overflow-hidden w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${content[0].urlImg})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start pl-24">
          {!isHeader ? (
            <>
              <div>
                <p className="text-[#F5F7F8] font-bold text-[2.5rem] w-[600px] text-left text-shadow-lg">
                  {content[0].subtitle}
                </p>
              </div>
              <div>
                <Link href={`/${href}`}>
                  <p className="text-[#F5F7F8] font-bold text-md text-left text-shadow-lg mt-10">
                    Jelajahi {title}{" "}
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
                <p className="text-[#F5F7F8] font-bold text-[3rem] w-[600px] text-left text-shadow-lg">
                  {title}
                </p>
              </div>
              <div>
                <p className="text-[#F5F7F8] font-light text-[1.5rem] w-[600px] text-left text-shadow-lg">
                  {content[0].subtitle}
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
