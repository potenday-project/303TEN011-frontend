import React from "react";

interface LayoutProps {
  bgColor?: "bg-main-100" | "bg-main-900";
  className?: string;
}

const Layout = ({
  children,
  className,
  bgColor = "bg-main-100",
}: React.PropsWithChildren<LayoutProps>) => {
  return (
    <main
      className={`${className} ${bgColor} relative min-h-[100dvh] w-full min-w-[320px] sm:w-[320px]`}
    >
      {children}
    </main>
  );
};

export default Layout;
