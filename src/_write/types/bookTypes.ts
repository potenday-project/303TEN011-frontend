export interface BookInfo {
  authors: string[];
  thumbnail: string;
  title: string;
}

export interface GetBookInfo {
  documents: BookInfo[];
  meta: {
    is_end: boolean;
  };
}
