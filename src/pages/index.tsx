import Layout from "@/components/layout";
import React from "react";
import SliderTop from "@/components/sliderTop";
import ContentGrid from "@/components/content/contentGrid";
import ContentFull from "@/components/content/contentFull";
import {
  dummyDataHeritage,
  dummyDataWisata,
  dummyDataFestival,
  dummyDataKuliner,
} from "../dummy";
import { Divider } from "antd";

const Index: React.FC = () => {
  return (
    <Layout>
      <main className="flex flex-col bg-white text-black">
        <div className="overflow-hidden">
          <SliderTop />
        </div>
        <Divider />
        <div className="lg:mx-[180px] mx-8 overflow-hidden">
          <ContentGrid
            title={dummyDataWisata.title}
            content={dummyDataWisata.content}
            href="holiday"
          />
          <Divider />
          <ContentGrid
            title={dummyDataHeritage.title}
            content={dummyDataHeritage.content}
            href="heritage"
            isUnique
          />
          <Divider />
          <ContentGrid
            title={dummyDataFestival.title}
            content={dummyDataFestival.content}
            href="festival"
          />
          <Divider />
        </div>

        <ContentFull
          title={dummyDataKuliner.title}
          content={dummyDataKuliner.content}
          href="kuliner"
        />
        <Divider />
      </main>
    </Layout>
  );
};

export default Index;
