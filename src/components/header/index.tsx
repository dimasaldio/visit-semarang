import React from "react";
import Link from "next/link";
import { dataDummyNavbar } from "@/pages/dummy";

const Header: React.FC = () => {
  return (
    <div className="bg-white text-black py-4 bg-opacity-[.80] sticky top-0 z-50 h-[60px]">
      <div className="flex flex-row justify-between mr-20">
        <Link href="/">
          <div className="flex flex-row justify-between items-center mx-20">
            <div>
              <img
                src={dataDummyNavbar.logo}
                alt="logoSemarang"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-bold ml-2">PEMERINTAH KOTA SEMARANG</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row">
          {dataDummyNavbar.listMenu.map((item: string, index: number) => (
            <div
              className="mr-12 font-bold hover:border-b-4 border-[#C70039] text-lg"
              key={index}
            >
              <Link href="/">{item}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
