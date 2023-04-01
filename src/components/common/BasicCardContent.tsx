import { bookk, jsongmyung, pretendard, scdream } from "@/util/fonts";

interface Props {
  fontColor: string;
  fontStyle: string;
  content: string;
}

const BasicCardContent = ({ fontColor, fontStyle, content }: Props) => {
  return (
    <p
      className={`${fontColor} ${pretendard.variable} ${scdream.variable} ${bookk.variable} ${jsongmyung.variable} ${fontStyle} whitespace-pre text-center text-[2.5vw] leading-[3.7vw]`}
    >
      {content}
    </p>
  );
};

export default BasicCardContent;
