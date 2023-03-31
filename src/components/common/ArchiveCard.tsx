import { CardData } from "@/apis/api";
import { IconQuote } from "@/static/icons";
import { bookk, jsongmyung, pretendard, scdream } from "@/util/fonts";

interface Props {
  item: CardData;
}

const ArchiveCard = ({ item }: Props) => {
  return (
    <div
      style={{ backgroundColor: item.backgroundColor }}
      className={`relative flex h-fit w-full flex-col items-center justify-center gap-[10px] rounded-[10px] ${item.imageSize}`}
    >
      <IconQuote className={`w-[11px] ${item.fontColor}`} />
      <p
        className={`${item.fontColor} ${pretendard.variable} ${scdream.variable} ${bookk.variable} ${jsongmyung.variable} ${item.fontStyle} whitespace-pre text-center text-[3vw] leading-[12px]`}
      >
        {item.content}
      </p>

      <div className={`absolute bottom-4 left-4 max-w-[50%]`}>
        <span
          className={`block break-keep text-[12px] leading-[14px] ${item.fontColor} text-opacity-80`}
        >
          {item.title}
        </span>
        <span className={`mt-1 block text-[8px] leading-[12px] ${item.fontColor} text-opacity-60`}>
          {item.author}
        </span>
      </div>
    </div>
  );
};

export default ArchiveCard;
