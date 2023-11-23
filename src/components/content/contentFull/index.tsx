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
          <p className="lg:text-2xl font-semibold lg:mx-[180px]">
            <SmileTwoTone twoToneColor="#C70039" /> {title}
          </p>
        </div>
      <Divider />
      </>
      )}
      <div
        className="overflow-hidden w-full lg:h-[600px] h-[400px] bg-cover lg:bg-center bg-right"
        style={{
          backgroundImage: `url(${content[0].urlImg})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start lg:pl-24">
          {!isHeader ? (
            <>
              <div>
                <p className="text-[#F5F7F8] font-bold lg:text-[2.5rem] text-[2rem] lg:w-[600px] w-full text-left text-shadow-lg">
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
                <p className="text-[#F5F7F8] font-bold lg:text-[3rem] text-[2rem] w-[600px] text-left text-shadow-lg">
                  {title}
                </p>
              </div>
              <div>
                <p className="text-[#F5F7F8] font-light lg:text-[1.5rem] w-[600px] text-left text-shadow-lg">
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
