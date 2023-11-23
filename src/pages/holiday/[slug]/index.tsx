import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { dummyDataWisata } from "@/dummy";
import FooterDetail from "@/components/list/footer";
import ContentDetail from "@/components/list/content/detail";
import BreadcrumbContent from "@/components/list/breadcrumb";

interface IHolidayDetail {
  title: string;
  description: any;
}
interface IContentHoliday {
  id: number;
  urlImg: string;
  subtitle: string;
}

const HolidayDetail: React.FC<IHolidayDetail> = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IContentHoliday | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dummyDataWisata.content.find(
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
      className: "text-[#F3EEEA] hover:border-b-2",
    },
    {
      title: "Holiday",
      href: "/holiday",
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
            href="holiday"
            content={dummyDataWisata.content}
          />
        </>
      )}
    </Layout>
  );
};

export default HolidayDetail;
