import { useRouter } from "next/router";
import Link from "next/link";

import { IconArchive, IconHome, IconPlus } from "@/static/icons";

const NAV_ITEM = [
  { href: "/main", icon: <IconHome />, text: "홈" },
  { href: "/write", icon: <IconPlus />, text: "한줄추가" },
  { href: "/archive", icon: <IconArchive />, text: "아카이브" },
];

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 z-20 flex h-[60px] w-full items-center justify-center gap-[60px] rounded-t-[10px] bg-white">
      {NAV_ITEM.map(({ href, icon, text }, idx) => (
        <Link
          href={href}
          key={idx}
          className={`flex flex-col items-center justify-center gap-[4px] ${
            pathname === href ? "text-main-900" : "text-[#d7d7d7]"
          }`}
        >
          <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
          <span className={`text-xs font-bold`}>{text}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
