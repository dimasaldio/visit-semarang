import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataKuliner } from "../../dummy";
import ContentList from "@/components/list/content";

const Kuliner: React.FC = () => {
  const data = dummyDataKuliner.content;

  return (
    <Layout>
      <div>
        <ContentFull
          isHeader={true}
          title="Kuliner Semarang"
          content={dummyDataHeaderLiburan.content}
        />
       <ContentList content={data.slice(1,data.length)} href="kuliner"/>
      </div>
    </Layout>
  );
};

export default Kuliner;
