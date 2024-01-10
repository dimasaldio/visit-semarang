import React from "react";
import Layout from "@/components/layout";
import ContentFull from "@/components/content/contentFull";
import ContentList from "@/components/list/content";
import graphqlClient from "@/lib/graphql/appoloClient";
import { GetServerSideProps } from "next";
import { GET_HEADER } from "@/lib/graphql/queries";

interface IImage {
  url: string;
}
interface ICreated {
  name: string;
}
interface IPost {
  title: string;
  slug: string;
  shortDesc: string;
  createdBy: ICreated;
  headerImage: IImage;
}
interface IContentProps {
  posts: IPost[];
  slug: string;
  shortDesc: string;
  title: string;
  isHeader: boolean;
  images: IImage[];
}
interface ICulinary {
  data: IContentProps;
}
const Culinary: React.FC<ICulinary> = ({ data }) => {
  return (
    <Layout>
      <div>
        <ContentFull
          title={data.title}
          posts={data.posts}
          slug={data.slug}
          isHeader={true}
          shortDesc={data.shortDesc}
          images={data.images}
        />
        <ContentList posts={data.posts} slug={data.slug} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await graphqlClient.query({
      query: GET_HEADER,
      fetchPolicy: "no-cache",
    });
    const dataContent = await res?.data?.content;
    const data = await dataContent.find((a: any) => {
      return a.slug === "culinary";
    });
    return {
      props: {
        data,
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

export default Culinary;