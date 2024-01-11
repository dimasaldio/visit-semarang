import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
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
  return (
    <div className="bg-white text-black py-4 bg-opacity-[.80] sticky -top-1 z-50 w-full h-[60px] lg:overflow-hidden overflow-x-scroll overflow-y-hidden">
      <div className="flex flex-row justify-between lg:mr-20">
        <Link href="/">
          <div className="flex flex-row justify-between items-center md:mx-20 mx-8">
            <div>
              <p className="font-bold ml-2 md:text-md text-lg">visitsemarang.</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row">
          {navbar.menu.map((item, index: number) => (
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
