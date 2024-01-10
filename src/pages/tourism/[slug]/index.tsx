import React from "react";
import Layout from "@/components/layout";
import FooterDetail from "@/components/list/footer";
import ContentDetail from "@/components/list/content/detail";
import BreadcrumbContent from "@/components/list/breadcrumb";
import graphqlClient from "@/lib/graphql/appoloClient";
import { GetServerSideProps } from "next";
import { GET_HEADER } from "@/lib/graphql/queries";

interface IImage {
  url: string;
}
interface ICreated {
  name: string;
}
interface IContent {
  html: string;
}
interface IPost {
  title: string;
  slug: string;
  shortDesc: string;
  createdBy: ICreated;
  headerImage: IImage;
  content: IContent;
}
interface IContents {
  posts: IPost[];
  slug: string;
  shortDesc: string;
  title: string;
  isHeader: boolean;
  images: IImage[];
}

interface IContentProps {
  data: IPost;
  dataContent: IContents;
}

const TourismDetail: React.FC<IContentProps> = ({ data, dataContent }) => {
  const breadcrumItem = [
    {
      title: "Home",
      href: "/",
      className: "text-[#F3EEEA]",
    },
    {
      title: "Tourism",
      href: `/${dataContent.slug}`,
      className: "text-[#F3EEEA] hover:border-b-2",
    },
    {
      title: `${data?.title}`,
      href: "#",
      className: "text-[#F3EEEA] cursor-default",
    },
  ];

  return (
    <Layout>
      <BreadcrumbContent breadcrumItem={breadcrumItem} />
      <ContentDetail data={data} />
      <FooterDetail
        slug={dataContent.slug}
        posts={dataContent.posts.slice(0, 3)}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: {
  query: any;
}) => {
  const { slug } = context.query;
  try {
    const res = await graphqlClient.query({
      query: GET_HEADER,
      fetchPolicy: "no-cache",
    });
    const dataContent = await res?.data?.content.find((item: any) => {
      return item.slug === "tourism";
    });
    const data = await dataContent.posts.find((a: any) => {
      return a.slug === slug;
    });
    return {
      props: {
        data,
        dataContent,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default TourismDetail;
