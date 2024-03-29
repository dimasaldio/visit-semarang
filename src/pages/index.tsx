import Layout from "@/components/layout";
import React from "react";
import SliderTop from "@/components/sliderTop";
import ContentGrid from "@/components/content/contentGrid";
import ContentFull from "@/components/content/contentFull";
import { Divider } from "antd";
import graphqlClient from "@/lib/graphql/appoloClient";
import { GetServerSideProps } from "next";
import { GET_CATEGORIES, GET_HEADER } from "@/lib/graphql/queries";

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
interface IHeaderProps {
  id: string;
  images: IImage;
  subTitle: string;
  title: string;
}
interface IHome {
  dataHeader: IHeaderProps[];
  dataContent: IContentProps[];
}
const Index: React.FC<IHome> = ({ dataHeader, dataContent }) => {
  return (
    <Layout>
      <main className="flex flex-col bg-white text-black">
        <div className="overflow-hidden">
          <SliderTop data={dataHeader} />
        </div>
        <Divider />
        <div className="lg:mx-[180px] mx-8 overflow-hidden">
          {dataContent.map((item, index: number) => {
            return (
              <div key={index}>
                {item.slug !== "culinary" ? (
                  <ContentGrid
                    title={item.title}
                    posts={item.posts}
                    slug={item.slug}
                  />
                ) : (
                  <ContentFull
                    title={item.title}
                    posts={item.posts}
                    slug={item.slug}
                    isHeader={false}
                    shortDesc={item.shortDesc}
                    images={item.images}
                  />
                )}
                <Divider />
              </div>
            );
          })}
        </div>
        <Divider />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await graphqlClient.query({
      query: GET_HEADER,
      fetchPolicy: "no-cache",
    });
    const resCategories = await graphqlClient.query({
      query: GET_CATEGORIES,
      fetchPolicy: "no-cache",
    });
    const dataLogo = await res?.data?.logo
    const dataHeader = await res?.data?.header;
    const categories = await resCategories?.data.categories;
    const listCategories = await categories.map((item: any) => {
      return item.name.toUpperCase();
    });
    const dataContent = await res?.data?.content;
    const data = await listCategories.map((item: any) => {
      return dataContent.find((a: any) => {
        return a.slug.toUpperCase() === item;
      });
    });
    return {
      props: {
        dataHeader,
        categories: listCategories,
        dataContent: data,
        dataLogo
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        dataHeader: [],
        dataContent: [],
      },
    };
  }
};

export default Index;
