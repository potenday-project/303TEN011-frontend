interface Props {
  children: React.ReactNode;
}

const InnerContainer = ({ children }: Props) => {
  return <div className="absolute z-10 h-full w-full rounded-t-[20px] bg-main-100">{children}</div>;
};

export default InnerContainer;
