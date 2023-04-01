import ReactTextareaAutosize from "react-textarea-autosize";

import BasicCard from "../common/BasicCard";
import FontColorPicker from "./FontColorPicker";

import { IconQuote } from "@/static/icons";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import { bookk, jsongmyung, pretendard, scdream } from "@/util/fonts";

const CardContainer = () => {
  const { postData } = useWriteActions();
  const { backgroundColor, fontColor, imageSize, fontStyle, content } = useWriteState();

  return (
    <div className="relative px-6 pt-[10px]">
      <BasicCard
        className="gap-[3.5vw] p-[6vw]"
        backgroundColor={backgroundColor}
        imageSize={imageSize}
        fontColor={fontColor}
      >
        <IconQuote className="w-[7.5vw]" />

        <ReactTextareaAutosize
          placeholder="오늘의 한줄을 입력해주세요"
          value={content}
          onChange={(event) => postData("content", event.target.value)}
          className={`w-full resize-none overflow-y-hidden bg-transparent py-1 text-center text-[5vw] leading-[7.5vw] ${
            pretendard.variable
          } ${scdream.variable} ${bookk.variable} ${jsongmyung.variable} ${fontStyle} ${
            fontColor === "text-white" ? "placeholder:text-white" : "placeholder:text-black"
          }`}
          maxLength={96}
          maxRows={6}
        />

        <FontColorPicker />
      </BasicCard>
    </div>
  );
};

export default CardContainer;
