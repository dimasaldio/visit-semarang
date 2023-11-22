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
