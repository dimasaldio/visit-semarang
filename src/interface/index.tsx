interface IContent {
  id: number;
  urlImg: string;
  subtitle: string;
}
export default interface IListWisata {
  title: string;
  content: IContent[];
  isUnique?: boolean;
  isFull?: boolean;
  href?: string;
  isHeader?:boolean;
}

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
export interface IContents {
  posts: IPost[];
  slug?: string;
  shortDesc?: string;
  title?: string;
  isHeader?: boolean;
  images: IImage[];
}

export interface IContentProps {
  data: IPost;
  dataContent: IContents;
}

interface IImagesHeaderHome {
  url: string;
}
interface IHeaderProps {
  id: string;
  images: IImagesHeaderHome;
  subTitle: string;
  title: string;
}

export interface IHeader {
  data: IHeaderProps[];
}
export interface IHome {
  dataHeader: IHeaderProps[];
  dataContent: IContents[];
}

export interface IFooterProps {
  posts: IPost[]
  slug: string;
}

export interface ITourism {
  data: IContents;
}