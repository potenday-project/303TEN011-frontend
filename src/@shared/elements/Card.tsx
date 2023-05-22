import { PropsWithChildren, forwardRef, ForwardedRef } from "react";

import { bookk, jsongmyung, pretendard, scdream } from "@/@shared/utils/fonts";
import { IconQuote } from "@/static/icons";

interface CardProps {
  className?: string;
  backgroundColor: string;
  imageSize: string;
  fontColor: string;
}

interface CardContentProps {
  className?: string;
  fontColor: string;
  fontStyle: string;
  content: string;
}

interface CardInfoProps {
  className?: string;
  titleClassName?: string;
  authorClassName?: string;
  fontColor: string;
  bookTitle: string;
  bookAuthors: string;
}

const Card = (
  { children, className, backgroundColor, imageSize, fontColor }: PropsWithChildren<CardProps>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      style={
        backgroundColor.includes("template")
          ? {
              backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/template/${backgroundColor}_${imageSize}.svg)`,
              backgroundSize: "cover",
            }
          : { backgroundColor }
      }
      className={`${className} ${imageSize} ${fontColor} relative flex w-full flex-col items-center justify-center rounded-[10px]`}
    >
      {children}
    </div>
  );
};

const CardQuote = ({ className }: Pick<CardProps, "className">) => {
  return <IconQuote className={className} />;
};

const CardContent = ({ className, fontColor, fontStyle, content }: CardContentProps) => {
  return (
    <p
      className={`${className} ${fontColor} ${fontStyle} ${pretendard.variable} ${scdream.variable} ${bookk.variable} ${jsongmyung.variable} whitespace-pre-line text-center`}
    >
      {content}
    </p>
  );
};

const CardInfo = ({
  className,
  titleClassName,
  authorClassName,
  fontColor,
  bookAuthors,
  bookTitle,
}: CardInfoProps) => {
  return (
    <div className={`${className} absolute min-w-0`}>
      <span className={`${titleClassName} ${fontColor} block truncate break-keep text-opacity-80`}>
        {bookTitle}
      </span>
      <span className={`${authorClassName} ${fontColor} block truncate text-opacity-60`}>
        {bookAuthors}
      </span>
    </div>
  );
};

export default Object.assign(forwardRef(Card), {
  Quote: CardQuote,
  Content: CardContent,
  Info: CardInfo,
});
