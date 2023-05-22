import { GetCardData } from "@/@shared/types/cardTypes";
import Link from "next/link";
import Card from "./Card";

const FullCard = ({ ...data }: GetCardData) => {
  return (
    <Link href={`/archive/${data.id}`}>
      <Card
        className="gap-[4vw] p-[6.5vw] sm:gap-[12px] sm:p-5"
        backgroundColor={data.backgroundColor}
        imageSize={data.imageSize}
        fontColor={data.fontColor}
      >
        <Card.Quote className="w-[8.5vw] sm:w-[27px]" />
        <Card.Content
          className="text-[5vw] leading-[7.5vw] sm:text-body1"
          fontColor={data.fontColor}
          fontStyle={data.fontStyle}
          content={data.content}
        />
        <Card.Info
          className="bottom-[6.5vw] left-[6.5vw] right-[6.5vw] sm:bottom-5 sm:left-5 sm:right-5"
          titleClassName="text-[3.75vw] leading-[3.75vw] sm:text-[12px] sm:leading-[12px]"
          authorClassName="text-[3vw] leading-[3vw] mt-[1vw] sm:text-[10px] sm:leading-[10px] sm:mt-[3px]"
          fontColor={data.fontColor}
          bookTitle={data.title}
          bookAuthors={data.author}
        />
      </Card>
    </Link>
  );
};

export default FullCard;
