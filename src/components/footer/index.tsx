import React from "react";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { dataDummyNavbar } from "@/dummy";

const Footer: React.FC = () => {
  console.log(dataDummyNavbar)
  const footerSemarangKota = ["Beranda", "Festival", "Kuliner", "Heritage", "Wisata"];
  const footerRelasiTautan = ["Republik Indonesia", "Provinsi Jateng"];
  const logoContactUs = [FacebookFilled, InstagramFilled, TwitterSquareFilled];

  return (
    <>
    <div className="flex flex-row justify-center items-start bg-white text-black py-4">
      <div className="flex flex-col pr-12 border-r mr-12">
        <div>
          <p className="font-bold">visitsemarang.</p>
        </div>
        <div className="pt-2">
          {dataDummyNavbar.menu.map((item, i: number) => (
            <Link key={i} href={item.href}>
              <p className="hover:text-[#C70039]">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col pr-12 border-r mr-12">
        <div>
          <p className="font-bold">Relasi Tautan</p>
        </div>
        <div className="pt-2">
          {footerRelasiTautan.map((item: string, i: number) => (
            <Link key={i} href="/">
              <p className="hover:text-[#C70039]">{item}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col pr-12 border-r mr-12">
        <div>
          <p className="font-bold">Turis Hotline</p>
        </div>
        <div className="pt-2">
          <p>Nomer Kode Area</p>
          <p className="font-light">{`(024) 3513366 – 3515871`}</p>
        </div>
      </div>
      <div className="flex flex-col pr-12 border-r">
        <div>
          <p className="font-bold">Kontak Kami</p>
        </div>
        <div className="pt-2 text-2xl flex flex-row">
          {logoContactUs.map((IconComponent, index) => (
            <Link key={index} href="/">
              <p className="hover:text-[#C70039] mr-2">
                <IconComponent />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <p className="text-center text-sm border-t-2">Create by dimasaldio@gmail.com</p>
    </>
  );
}

export default Footer