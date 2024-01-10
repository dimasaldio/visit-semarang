import React from "react";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import Link from "next/link";

const Footer: React.FC = () => {
  const navbar = {
    menu: [
        {
          name: "Festival",
          href: "/festival"
        },
        {
          name: "Kuliner",
          href: "/culinary"
        },
        {
          name: "Heritage",
          href: "/heritage"
        },
        {
          name: "Wisata",
          href: "/tourism"
        }
      ]
    };
  const footerSemarangKota = [
    "Beranda",
    "Festival",
    "Kuliner",
    "Heritage",
    "Wisata",
  ];
  const footerRelasiTautan = ["Republik Indonesia", "Provinsi Jateng"];
  const logoContactUs = [FacebookFilled, InstagramFilled, TwitterSquareFilled];

  return (
    <>
      <div className="overflow-x-scroll md:overflow-auto">
        <div className="flex flex-row md:justify-center items-start bg-white text-black py-4 md:w-full w-[500px] md:mx-0 mx-8">
          <div className="flex flex-col md:pr-12 border-r md:mr-12 mr-4 pr-4">
            <div>
              <p className="font-bold md:text-md text-sm">visitsemarang.</p>
            </div>
            <div className="pt-2">
              {navbar.menu.map((item, i: number) => (
                <Link key={i} href={item.href}>
                  <p className="hover:text-[#C70039] md:text-md text-sm">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:pr-12 border-r md:mr-12 mr-4 pr-4">
            <div>
              <p className="font-bold md:text-md text-sm">Relasi Tautan</p>
            </div>
            <div className="pt-2">
              {footerRelasiTautan.map((item: string, i: number) => (
                <Link key={i} href="/">
                  <p className="hover:text-[#C70039] md:text-md text-sm">
                    {item}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:pr-12 border-r md:mr-12 mr-4 pr-4">
            <div>
              <p className="font-bold md:text-md text-sm">Turis Hotline</p>
            </div>
            <div className="pt-2 md:text-md text-sm">
              <p>Nomer Kode Area</p>
              <p className="font-light">{`(024) 3513366 – 3515871`}</p>
            </div>
          </div>
          <div className="flex flex-col md:pr-12 border-r">
            <div>
              <p className="font-bold md:text-md text-sm">Kontak Kami</p>
            </div>
            <div className="pt-2 text-2xl flex flex-row">
              {logoContactUs.map((IconComponent, index) => (
                <Link key={index} href="/">
                  <p className="hover:text-[#C70039] mr-2 md:text-md text-sm">
                    <IconComponent />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm border-t-2">
        Create by dimasaldio@gmail.com
      </p>
    </>
  );
};

export default Footer;
