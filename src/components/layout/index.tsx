import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

interface IProps {
  children: ReactNode;
  title: string;
}

const Layout:React.FC<IProps> = (props) => {
  return (
    <div className="bg-white text-black">
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout