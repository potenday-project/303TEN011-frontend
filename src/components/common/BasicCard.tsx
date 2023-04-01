import { ForwardedRef, forwardRef } from "react";

interface Props {
  backgroundColor: string;
  imageSize: string;
  fontColor: string;
  children: React.ReactNode;
}

const BasicCard = (
  { backgroundColor, imageSize, fontColor, children }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      style={
        backgroundColor.includes("template")
          ? {
              backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/template/${backgroundColor}_${imageSize}.svg)`,
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

export default forwardRef(BasicCard);
