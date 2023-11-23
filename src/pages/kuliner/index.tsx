import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataKuliner } from "../../dummy";
import ContentList from "@/components/list/content";

const Kuliner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await dummyDataKuliner.content.slice(1,dummyDataKuliner.content.length);
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ContentFull
            isHeader={true}
            title="Kuliner Semarang"
            content={dummyDataHeaderLiburan.content}
          />
          <ContentList content={data} href="festival" />
        </div>
      )}
    </Layout>
  );
};

export default Kuliner;
