import { ForwardedRef, forwardRef } from "react";

interface Props {
  className?: string;
  backgroundColor: string;
  imageSize: string;
  fontColor: string;
  children: React.ReactNode;
}

const BasicCard = (
  { className, backgroundColor, imageSize, fontColor, children }: Props,
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
      className={`flex ${className} ${imageSize} relative w-full flex-col items-center justify-center rounded-[10px] ${fontColor}`}
    >
      {children}
    </div>
  );
};

export default forwardRef(BasicCard);
