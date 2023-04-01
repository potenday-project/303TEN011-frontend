interface Props {
  backgroundColor: string;
  imageSize: string;
  fontColor: string;
  children: React.ReactNode;
}

const BasicCard = ({ backgroundColor, imageSize, fontColor, children }: Props) => {
  return (
    <div
      style={
        backgroundColor.includes("template")
          ? {
              backgroundImage: `url(template/${backgroundColor}_${imageSize}.svg)`,
              backgroundSize: "cover",
            }
          : { backgroundColor }
      }
      className={`flex ${imageSize} relative w-full flex-col items-center justify-center gap-[14px] rounded-[10px] p-6 ${fontColor}`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
