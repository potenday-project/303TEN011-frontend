import BasicCard from "../common/BasicCard";
import BasicCardContent from "../common/BasicCardContent";
import BasicCardBookInfo from "../common/BasicCardBookInfo";

import useGetRandomCard from "@/hooks/main/useGetRandomCard";
import { IconQuote } from "@/static/icons";
import Link from "next/link";

const RandomCard = () => {
  const { data } = useGetRandomCard();

  return (
    <div className="py-5">
      {data && (
        <Link href={`/archive/${data.id}`}>
          <BasicCard
            className="gap-[3.5vw] p-[6vw] sm:gap-[14px] sm:p-5"
            backgroundColor={data.backgroundColor}
            imageSize={data.imageSize}
            fontColor={data.fontColor}
          >
            <IconQuote className="w-[7.5vw] sm:w-6" />
            <BasicCardContent
              className="text-[5vw] leading-[7.5vw] sm:text-body1"
              fontColor={data.fontColor}
              fontStyle={data.fontStyle}
              content={data.content}
            />
            <BasicCardBookInfo
              className="bottom-[6vw] left-[6vw] w-[75vw] sm:bottom-[20px] sm:left-[20px] sm:w-[230px]"
              titleClassName="text-[3.75vw] leading-[3.75vw] sm:text-[12px] sm:leading-[12px]"
              authorClassName="text-[3vw] leading-[3vw] sm:text-[10px] sm:leading-[10px]"
              fontColor={data.fontColor}
              bookTitle={data.title}
              bookAuthors={data.author}
            />
          </BasicCard>
        </Link>
      )}
    </div>
  );
};

export default RandomCard;
