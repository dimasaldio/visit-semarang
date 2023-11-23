import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { dummyDataHeritage } from "@/dummy";
import FooterDetail from "@/components/list/footer";
import ContentDetail from "@/components/list/content/detail";
import BreadcrumbContent from "@/components/list/breadcrumb";

interface IHeritageDetail {
  title: string;
  description: any;
}

const HeritageDetail: React.FC<IHeritageDetail> = () => {
  const router = useRouter();
  const data = dummyDataHeritage.content.find(
    (item) => String(item.id) === router.query.slug
  );
  const breadcrumItem = [
    {
      title: "Home",
      href: "/",
      className: "text-[#F3EEEA]",
    },
    {
      title: "Heritage",
      href: "/heritage",
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
      <FooterDetail href="heritage" content={dummyDataHeritage.content} />
    </Layout>
  );
};

export default HeritageDetail;
