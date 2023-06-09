interface Props {
  title: string;
  fontSize?: "text-headline1" | "text-headline2" | "text-headline3";
  fontColor?: "text-main-900" | "text-white";
  lineColor?: "bg-[#ddd]" | "bg-[#616161]" | "bg-[#0C0B0B]";
  className?: string;
}

const PageTitle = ({
  title,
  fontSize = "text-headline2",
  fontColor = "text-main-900",
  lineColor = "bg-[#ddd]",
  className,
}: Props) => {
  return (
    <div className={`${className} relative w-fit`}>
      <h1 className={`${fontSize} ${fontColor} relative z-10 block break-keep px-1 font-extrabold`}>
        {title}
      </h1>
      <div className={`${lineColor} absolute left-0 bottom-0 h-3 w-full`} />
    </div>
  );
};

export default PageTitle;
