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
      className={`flex ${imageSize} relative w-full flex-col items-center justify-center gap-[3vw] rounded-[10px] p-[3vw] ${fontColor}`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
