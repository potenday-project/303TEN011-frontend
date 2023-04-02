import Link from "next/link";

import PageTitle from "../common/PageTitle";
import { IconButtonArrow } from "@/static/icons";

const WriteButton = () => {
  return (
    <Link
      href="/write"
      className="flex w-full items-center justify-between rounded-[10px] bg-[#ececec] p-4"
    >
      <div className="flex items-center gap-1">
        <PageTitle title="오늘의 한줄" fontSize="text-headline3" />
        <span className="text-lg font-medium">추가하기 ✍️</span>
      </div>
      <IconButtonArrow />
    </Link>
  );
};

export default WriteButton;
