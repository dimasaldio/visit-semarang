import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

interface IProps {
  children: ReactNode;
}

const Layout:React.FC<IProps> = (props) => {
  return (
    <div className="bg-white text-black lg:px-[180px] md:px-[100px] px-[20px]">
      <Head>
        <title>Visit Kota Semarang</title>
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout