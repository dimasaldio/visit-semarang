import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataFestival } from "../../dummy";
import ContentList from "@/components/list/content";

const Festival: React.FC = () => {
  const data = dummyDataFestival.content;

  return (
    <Layout>
      <div>
        <ContentFull
          isHeader={true}
          title="Festival Semarang"
          content={dummyDataHeaderLiburan.content}
        />
        <ContentList content={data} href="festival"/>
      </div>
    </Layout>
  );
};

export default Festival;
