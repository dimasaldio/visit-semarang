import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../dummy";

const Holiday: React.FC = () => {
  return (
    <Layout title="Visit Kota Semarang">
      <div>
        <ContentFull 
        isHeader={true}
        title={dummyDataHeaderLiburan.title}
        content={dummyDataHeaderLiburan.content}
        />
      </div>
    </Layout>
  );
};

export default Holiday;
