import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import { dummyDataHeaderLiburan } from "../../dummy";
import { dummyDataWisata } from "../../dummy";
import ContentList from "@/components/list/content";

const Holiday: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await dummyDataWisata.content;
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
            title="Liburan Semarang"
            content={dummyDataHeaderLiburan.content}
          />
          <ContentList content={data} href="holiday" />
        </div>
      )}
    </Layout>
  );
};

export default Holiday;
