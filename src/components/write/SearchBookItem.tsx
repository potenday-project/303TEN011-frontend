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
      className="grid h-[90px] w-full grid-cols-[50px_auto] gap-[13px] border-b border-[#dfdfdf] p-[10px] ui-checked:grid-cols-[50px_auto_30px] ui-checked:rounded-[10px] ui-checked:bg-main-900"
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

      <div className="flex flex-col items-start justify-center truncate">
        <span className="font-bold ui-checked:text-white">{item.title}</span>
        <span className="text-sm font-normal text-[#777]">{item.authors.join(", ")}</span>
      </div>

      <div className="hidden items-center justify-start ui-checked:flex">
        <IconCheck />
      </div>
    </RadioGroup.Option>
  );
};

export default SearchBookItem;
