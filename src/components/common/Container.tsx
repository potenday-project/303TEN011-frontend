import React from "react";

interface Props {
  bgColor?: "bg-main-100" | "bg-main-900";
  className?: string;
}

const Container = ({
  children,
  className,
  bgColor = "bg-main-100",
}: React.PropsWithChildren<Props>) => {
  return (
    <main
      className={`${className} relative min-h-[100dvh] w-full min-w-[320px] sm:w-[375px] ${bgColor}`}
    >
      {children}
    </main>
  );
};

export default Container;
