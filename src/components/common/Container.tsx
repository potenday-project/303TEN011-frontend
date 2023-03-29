interface Props {
  children: React.ReactNode;
  bgColor?: "bg-main-100" | "bg-main-900";
}

const Container = ({ children, bgColor = "bg-main-100" }: Props) => {
  return <main className={`relative min-h-screen ${bgColor} pt-5 pb-[60px]`}>{children}</main>;
};

export default Container;
