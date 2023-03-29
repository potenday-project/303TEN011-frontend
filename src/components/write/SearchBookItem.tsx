import Image from "next/image";
import { RadioGroup } from "@headlessui/react";

import type { BookInfo } from "@/constants/types";
import { IconCheck } from "@/static/icons";

interface Props {
  item: BookInfo;
}

const SearchBookItem = ({ item }: Props) => {
  return (
    <RadioGroup.Option
      value={item}
      className="grid h-[90px] grid-cols-[50px_auto_30px] gap-[13px] border-b border-[#dfdfdf] p-[10px] ui-active:rounded-[10px] ui-active:bg-main-900"
    >
      <div className="relative rounded-md bg-[#d9d9d9]">
        {item.thumbnail && (
          <Image
            className="rounded-md object-cover"
            src={item.thumbnail}
            alt="커버이미지"
            fill
            sizes="120px"
            priority
          />
        )}
      </div>

      <div className="flex w-full flex-col justify-center truncate">
        <span className="font-bold ui-active:text-white">{item.title}</span>
        <span className="text-sm font-normal text-[#777]">{item.authors.join(", ")}</span>
      </div>

      <div className="hidden items-center justify-start ui-active:flex">
        <IconCheck />
      </div>
    </RadioGroup.Option>
  );
};

export default SearchBookItem;
