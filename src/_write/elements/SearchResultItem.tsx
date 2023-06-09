import Image from "next/image";
import { RadioGroup } from "@headlessui/react";

import type { BookInfo } from "@/_write/types/bookTypes";

import { IconCheck } from "@/static/icons";

interface SearchResultItemProps {
  item: BookInfo;
}

const SearchResultItem = ({ item }: SearchResultItemProps) => {
  return (
    <RadioGroup.Option
      value={item}
      className="flex h-[70px] cursor-pointer items-center justify-between gap-[13px] border-b border-[#dfdfdf] p-[10px] ui-checked:sticky ui-checked:top-0 ui-checked:bottom-0 ui-checked:z-10 ui-checked:rounded-[10px] ui-checked:border-main-900 ui-checked:bg-main-900"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="relative h-[50px] w-[50px] shrink-0 rounded-md bg-[#d9d9d9]">
          {item.thumbnail && (
            <Image
              className="rounded-md object-cover"
              src={item.thumbnail}
              alt="커버이미지"
              fill
              sizes="50px"
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

export default SearchResultItem;
