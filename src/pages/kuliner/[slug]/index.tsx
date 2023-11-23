import React from "react";
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

const KulinerDetail: React.FC<IKulinerDetail> = () => {
  const router = useRouter();
  const data = dummyDataKuliner.content.find(
    (item) => String(item.id) === router.query.slug
  );
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
      <ContentDetail content={data} />
      <FooterDetail
        href="kuliner"
        content={dummyDataKuliner.content.slice(1, 4)}
      />
    </Layout>
  );
};

export default KulinerDetail;
