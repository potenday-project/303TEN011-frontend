export interface PostCardData {
  title: string;
  author: string;
  content: string;
  thumbnail: string;
  backgroundColor: string;
  imageSize: string;
  fontStyle: string;
  fontColor: string;
}

export interface GetCardData extends PostCardData {
  id: number;
  createdDt: string;
  modifiedDt: string;
}

export interface PageableData {
  first: boolean;
  hasNext: boolean;
  last: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
