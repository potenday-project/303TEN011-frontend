interface Props {
  title: string;
  fontWeight?: string;
  fontSize?: "text-xl" | "text-lg";
  fontColor?: "text-main-900" | "text-white";
  lineColor?: "bg-[#ddd]" | "bg-[#616161]";
  lineWeight?: "h-3" | "h-[10px]";
}

const PageTitle = ({
  title,
  fontWeight = "font-extrabold",
  fontSize = "text-xl",
  fontColor = "text-main-900",
  lineColor = "bg-[#ddd]",
  lineWeight = "h-3",
}: Props) => {
  return (
    <div className="relative w-fit">
      <h1 className={`relative z-10 block px-1 ${fontWeight} ${fontSize} ${fontColor}`}>{title}</h1>
      <div className={`absolute left-0 bottom-[-1px] ${lineWeight} w-full ${lineColor}`} />
    </div>
  );
};

export default PageTitle;
