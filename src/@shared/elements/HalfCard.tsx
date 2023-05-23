import Link from "next/link";

import Card from "@/@shared/elements/Card";
import { GetCardData } from "@/@shared/types/cardTypes";

const HalfCard = ({ ...data }: GetCardData) => {
  return (
    <Link href={`/archive/${data.id}`}>
      <Card
        className="gap-[1.8vw] p-[3.1vw] sm:gap-[6px] sm:p-[10px]"
        backgroundColor={data.backgroundColor}
        imageSize={data.imageSize}
        fontColor={data.fontColor}
      >
        <Card.Quote className="w-[3.1vw] sm:w-[10px]" />
        <Card.Content
          className="text-[3.1vw] leading-[3.75vw] sm:text-[7px] sm:leading-[12px]"
          fontColor={data.fontColor}
          fontStyle={data.fontStyle}
          content={data.content}
        />
        <Card.Info
          className="bottom-[3.1vw] left-[3.1vw] right-[3.1vw] sm:bottom-[10px] sm:left-[10px] sm:right-[10px]"
          titleClassName="text-[1.9vw] leading-[3vw] sm:text-[5.7px] sm:leading-[10px]"
          authorClassName="text-[1.5vw] leading-[2vw] sm:text-[5px] sm:leading-[9px] sm:mt-[2px]"
          fontColor={data.fontColor}
          bookTitle={data.title}
          bookAuthors={data.author}
        />
      </Card>
    </Link>
  );
};

export default HalfCard;
