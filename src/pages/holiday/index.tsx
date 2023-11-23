import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataWisata } from "../../dummy";
import ContentList from "@/components/list/content";

const Holiday: React.FC = () => {
  const data = dummyDataWisata.content;

  return (
    <Layout>
      <div>
        <ContentFull
          isHeader={true}
          title="Liburan Semarang"
          content={dummyDataHeaderLiburan.content}
        />
       <ContentList content={data} href="holiday"/>
      </div>
    </Layout>
  );
};

export default Holiday;
