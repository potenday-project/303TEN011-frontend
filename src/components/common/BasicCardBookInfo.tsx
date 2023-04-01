interface Props {
  className?: string;
  titleClassName?: string;
  authorClassName?: string;
  fontColor: string;
  bookTitle: string;
  bookAuthors: string;
}

const BasicCardBookInfo = ({
  className,
  titleClassName,
  authorClassName,
  fontColor,
  bookAuthors,
  bookTitle,
}: Props) => {
  return (
    <div className={`${className} absolute w-[70%]`}>
      <span className={`${titleClassName} block truncate break-keep ${fontColor} text-opacity-80`}>
        {bookTitle}
      </span>
      <span className={`${authorClassName} mt-[1vw] block truncate ${fontColor} text-opacity-60`}>
        {bookAuthors}
      </span>
    </div>
  );
};

export default BasicCardBookInfo;
