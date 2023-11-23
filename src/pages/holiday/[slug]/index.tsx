import React from "react";
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

const HolidayDetail: React.FC<IHolidayDetail> = () => {
  const router = useRouter();
  const data = dummyDataWisata.content.find(
    (item) => String(item.id) === router.query.slug
  );
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
      <ContentDetail content={data} />
      <FooterDetail href="holiday" content={dummyDataWisata.content} />
    </Layout>
  );
};

export default HolidayDetail;
