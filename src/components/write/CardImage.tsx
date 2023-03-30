import ReactTextareaAutosize from "react-textarea-autosize";
import { RadioGroup } from "@headlessui/react";

import { IconQuote } from "@/static/icons";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import { bookk, jsongmyung, pretendard, scdream } from "@/util/fonts";

const CardImage = () => {
  const { postData } = useWriteActions();
  const { backgroundColor, fontColor, imageSize, fontStyle } = useWriteState();

  return (
    <div className="relative px-6">
      <div
        style={{ backgroundColor }}
        className={`mt-[10px] flex ${imageSize} w-full flex-col items-center justify-center gap-[14px] rounded-[10px] p-6 ${fontColor}`}
      >
        <IconQuote />
        <ReactTextareaAutosize
          placeholder="오늘의 한줄을 입력해주세요"
          className={`w-full resize-none bg-transparent text-center ${pretendard.variable} ${
            scdream.variable
          } ${bookk.variable} ${jsongmyung.variable} ${fontStyle} ${
            fontColor === "text-white" ? "placeholder:text-white" : "placeholder:text-black"
          }`}
          maxLength={96}
          maxRows={6}
        />
      </div>

      <RadioGroup
        onChange={(value) => postData("fontColor", value)}
        defaultValue={fontColor}
        className="absolute bottom-[16px] right-[36px] flex items-center gap-[6px]"
      >
        <RadioGroup.Label className={`${fontColor} text-[8px] font-medium`}>FONT</RadioGroup.Label>
        {[
          { text: "text-black", bg: "bg-black" },
          { text: "text-white", bg: "bg-white" },
        ].map((color) => (
          <RadioGroup.Option
            key={color.text}
            value={color.text}
            className={`${color.bg} h-5 w-5 rounded-full`}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CardImage;
