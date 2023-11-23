import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { dummyDataFestival } from "@/dummy";
import FooterDetail from "@/components/list/footer";
import ContentDetail from "@/components/list/content/detail";
import BreadcrumbContent from "@/components/list/breadcrumb";

interface IFestivalDetail {
  title: string;
  description: any;
}

const FestivalDetail: React.FC<IFestivalDetail> = () => {
  const router = useRouter();
  const data = dummyDataFestival.content.find(
    (item) => String(item.id) === router.query.slug
  );
  const breadcrumItem = [
    {
      title: "Home",
      href: "/",
      className: "text-[#F3EEEA]",
    },
    {
      title: "Festival",
      href: "/festival",
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
      <BreadcrumbContent breadcrumItem={breadcrumItem}/>
      <ContentDetail content={data} />
      <FooterDetail href="festival" content={dummyDataFestival.content} />
    </Layout>
  );
};

export default FestivalDetail;
