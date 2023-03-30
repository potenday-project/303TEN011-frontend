interface Props {
  children: React.ReactNode;
  className?: string;
}

const InnerContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} relative z-10 w-full min-w-[320px] shrink-0 rounded-t-[20px] bg-main-100`}
    >
      {children}
    </div>
  );
};

export default InnerContainer;
