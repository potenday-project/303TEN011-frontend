import { PropsWithChildren } from "react";

interface InnerLayoutProps {
  className?: string;
}

const InnerLayout = ({ children, className }: PropsWithChildren<InnerLayoutProps>) => {
  return (
    <section
      className={`${className} relative z-10 w-full min-w-[320px] shrink-0 rounded-t-[20px] bg-main-100 px-6 pt-6 pb-[60px]`}
    >
      {children}
    </section>
  );
};

const InnerLayoutHeader = ({ children, className }: PropsWithChildren<InnerLayoutProps>) => {
  return (
    <article className={`${className} mb-5 flex h-[30px] items-end justify-between`}>
      {children}
    </article>
  );
};

InnerLayout.Header = InnerLayoutHeader;
export default InnerLayout;
