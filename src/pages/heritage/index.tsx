import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataHeritage } from "../../dummy";
import ContentList from "@/components/list/content";

const Heritage: React.FC = () => {
  const data = dummyDataHeritage.content;

  return (
    <Layout>
      <div>
        <ContentFull
          isHeader={true}
          title="Semarang Heritage"
          content={dummyDataHeaderLiburan.content}
        />
       <ContentList content={data} href="heritage"/>
      </div>
    </Layout>
  );
};

export default Heritage;
