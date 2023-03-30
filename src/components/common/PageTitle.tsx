interface Props {
  title: string;
  fontWeight?: string;
  fontSize?: "text-xl" | "text-lg" | "text-2xl";
  fontColor?: "text-main-900" | "text-white";
  lineColor?: "bg-[#ddd]" | "bg-[#616161]" | "bg-[#0C0B0B]";
  lineWeight?: "h-3" | "h-[10px]";
  className?: string;
}

const PageTitle = ({
  title,
  fontWeight = "font-extrabold",
  fontSize = "text-xl",
  fontColor = "text-main-900",
  lineColor = "bg-[#ddd]",
  lineWeight = "h-3",
  className,
}: Props) => {
  return (
    <div className={`${className} relative w-fit`}>
      <h1 className={`tex text relative z-10 block px-1 ${fontWeight} ${fontSize} ${fontColor}`}>
        {title}
      </h1>
      <div className={`absolute left-0 bottom-[-1px] ${lineWeight} w-full ${lineColor}`} />
    </div>
  );
};

export default PageTitle;
