import { bookk, jsongmyung, pretendard, scdream } from "@/util/fonts";

interface Props {
  className?: string;
  fontColor: string;
  fontStyle: string;
  content: string;
}

const BasicCardContent = ({ className, fontColor, fontStyle, content }: Props) => {
  return (
    <p
      className={`${className} ${fontColor} ${pretendard.variable} ${scdream.variable} ${bookk.variable} ${jsongmyung.variable} ${fontStyle} whitespace-pre text-center`}
    >
      {content}
    </p>
  );
};

export default BasicCardContent;
