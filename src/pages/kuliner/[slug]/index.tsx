import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { dummyDataKuliner } from "@/dummy";
import FooterDetail from "@/components/list/footer";
import ContentDetail from "@/components/list/content/detail";
import BreadcrumbContent from "@/components/list/breadcrumb";

interface IKulinerDetail {
  title: string;
  description: any;
}
interface IContentKuliner {
  id: number;
  urlImg: string;
  subtitle: string;
}

const KulinerDetail: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IContentKuliner | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dummyDataKuliner.content.find(
        (item) => String(item.id) === router.query.slug
      );

      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, [router.query.slug]);

  const breadcrumItem = [
    {
      title: "Home",
      href: "/",
      className: "text-[#F3EEEA]",
    },
    {
      title: "Kuliner",
      href: "/kuliner",
      className: "text-[#F3EEEA] hover:border-b-2",
    },
    {
      title: `${data?.subtitle}`,
      href: "#",
      className: "text-[#F3EEEA] cursor-default",
    },
  ];

  return (
    <Layout>
      <BreadcrumbContent breadcrumItem={breadcrumItem} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ContentDetail content={data} />
          <FooterDetail
            href="kuliner"
            content={dummyDataKuliner.content.slice(1, 4)}
          />
        </>
      )}
    </Layout>
  );
};

export default KulinerDetail;
