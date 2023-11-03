interface IContent {
  id: number;
  urlImg: string;
  subtitle: string;
}
export interface IListWisata {
  title: string;
  content: IContent[];
  isUnique?: boolean;
  isFull?: boolean;
  href?: string;
  isHeader?:boolean;
}
