import React from "react";
import Link from "next/link";
import { dataDummyNavbar } from "@/dummy";

const Header: React.FC = () => {
  return (
    <div className="bg-white text-black py-4 bg-opacity-[.80] sticky top-0 z-50 w-full h-auto lg:overflow-hidden overflow-x-scroll">
      <div className="flex flex-row justify-between lg:mr-20">
        <Link href="/">
          <div className="flex flex-row justify-between items-center md:mx-20 mx-8">
            <div>
              <p className="font-bold ml-2 md:text-md text-lg">visitsemarang.</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row">
          {dataDummyNavbar.menu.map((item, index: number) => (
            <div
              className="md:mr-12 mx-8 font-bold hover:border-b-4 border-[#C70039] text-lg"
              key={index}
            >
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
