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
      className="flex h-[70px] items-center justify-between gap-[13px] border-b border-[#dfdfdf] p-[10px] ui-checked:rounded-[10px] ui-checked:bg-main-900"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="relative h-[50px] w-[50px] shrink-0 rounded-md bg-[#d9d9d9]">
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

        <div className="flex min-w-0 flex-col">
          <span className="block truncate font-bold ui-checked:text-white">{item.title}</span>
          <span className="block truncate text-sm font-normal text-[#777]">
            {item.authors.join(", ")}
          </span>
        </div>
      </div>

      <div className="hidden items-center justify-start ui-checked:flex">
        <IconCheck />
      </div>
    </RadioGroup.Option>
  );
};

export default SearchBookItem;
