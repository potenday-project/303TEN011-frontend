interface Props {
  children: React.ReactNode;
}

const InnerContainer = ({ children }: Props) => {
  return (
    <div className="h-inner z-10 w-full min-w-[320px] shrink-0 rounded-t-[20px] bg-main-100">
      {children}
    </div>
  );
};

export default InnerContainer;
