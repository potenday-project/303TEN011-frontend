interface Props {
  fontColor: string;
  bookTitle: string;
  bookAuthors: string;
}

const BasicCardBookInfo = ({ fontColor, bookAuthors, bookTitle }: Props) => {
  return (
    <div className={`absolute bottom-[3vw] left-[3vw] w-[70%]`}>
      <span className={`block break-keep text-[2vw] leading-[3vw] ${fontColor} text-opacity-80`}>
        {bookTitle}
      </span>
      <span className={`mt-[1.5vw] block text-[1.5vw] leading-[3vw] ${fontColor} text-opacity-60`}>
        {bookAuthors}
      </span>
    </div>
  );
};

export default BasicCardBookInfo;
