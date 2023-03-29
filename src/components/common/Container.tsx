interface Props {
  children: React.ReactNode;
  bgColor?: "bg-main-100" | "bg-main-900";
  className?: string;
}

const Container = ({ children, className, bgColor = "bg-main-100" }: Props) => {
  return (
    <main className={`${className} relative h-full min-h-screen w-full min-w-[320px] ${bgColor}`}>
      {children}
    </main>
  );
};

export default Container;
