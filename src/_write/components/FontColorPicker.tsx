import { RadioGroup } from "@headlessui/react";

import { useWriteActions, useWriteState } from "@/store/useWriteStore";

const PICKER_ARR = [
  { text: "text-black", bg: "bg-black", border: "border-white" },
  { text: "text-white", bg: "bg-white", border: "border-black" },
];

const FontColorPicker = () => {
  const { postData } = useWriteActions();
  const { fontColor } = useWriteState();

  return (
    <RadioGroup
      onChange={(value) => postData("fontColor", value)}
      defaultValue={fontColor}
      className="absolute bottom-[5vw] right-[6.5vw] flex items-center gap-[2vw] sm:bottom-4 sm:right-5 sm:gap-[6px]"
    >
      <RadioGroup.Label className={`${fontColor} text-[2.5vw] font-medium sm:text-[8px]`}>
        FONT
      </RadioGroup.Label>
      {PICKER_ARR.map((color) => (
        <RadioGroup.Option
          key={color.text}
          value={color.text}
          className={`${color.bg} h-[6.25vw] w-[6.25vw] rounded-full border sm:h-5 sm:w-5 ${color.border}`}
        />
      ))}
    </RadioGroup>
  );
};

export default FontColorPicker;
