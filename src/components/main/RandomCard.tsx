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
            className="gap-[3.5vw] p-[6vw]"
            backgroundColor={data.backgroundColor}
            imageSize={data.imageSize}
            fontColor={data.fontColor}
          >
            <IconQuote className="w-[7.5vw]" />
            <BasicCardContent
              className="text-[5vw] leading-[7.5vw]"
              fontColor={data.fontColor}
              fontStyle={data.fontStyle}
              content={data.content}
            />
            <BasicCardBookInfo
              className="bottom-[6vw] left-[6vw] w-[75vw]"
              titleClassName="text-[3.75vw] leading-[3.75vw]"
              authorClassName="text-[3vw] leading-[3vw]"
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
