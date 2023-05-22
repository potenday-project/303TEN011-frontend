import ReactTextareaAutosize from "react-textarea-autosize";

import FontColorPicker from "@/_write/components/FontColorPicker";

import Card from "@/@shared/elements/Card";
import { bookk, jsongmyung, pretendard, scdream } from "@/@shared/utils/fonts";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";

const CardContainer = () => {
  const { postData } = useWriteActions();
  const { backgroundColor, fontColor, imageSize, fontStyle, content } = useWriteState();

  return (
    <div className="pt-[10px]">
      <Card
        className="gap-[4vw] p-[6.5vw] sm:gap-[12px] sm:p-5"
        backgroundColor={backgroundColor}
        imageSize={imageSize}
        fontColor={fontColor}
      >
        <Card.Quote className="w-[8.5vw] sm:w-[27px]" />
        <div className="flex w-full flex-col items-center">
          <ReactTextareaAutosize
            placeholder="오늘의 한 줄을 입력해 주세요."
            value={content}
            onChange={(event) => postData("content", event.target.value)}
            className={`scrollbar-hidden w-full resize-none overflow-y-auto bg-transparent py-1 text-center text-[5vw] leading-[7.5vw] sm:text-body1 ${
              pretendard.variable
            } ${scdream.variable} ${bookk.variable} ${jsongmyung.variable} ${fontStyle} ${
              fontColor === "text-white" ? "placeholder:text-white" : "placeholder:text-black"
            }`}
            maxLength={90}
            maxRows={6}
          />
          {content.length === 0 && (
            <span className="text-[3.75vw] leading-[4.4vw] text-[#9a9a9a] sm:text-caption1">
              문구는 6줄 까지만 입력 가능합니다.
            </span>
          )}
        </div>
        <div className="absolute bottom-[6.5vw] left-[6.5vw] text-[3.75vw] leading-[3.75vw] sm:bottom-5 sm:left-5 sm:text-caption1">{`${
          content.length || 0
        } / 90 byte`}</div>
        <FontColorPicker />
      </Card>
    </div>
  );
};

export default CardContainer;
