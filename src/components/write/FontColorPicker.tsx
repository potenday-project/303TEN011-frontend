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
      className="absolute bottom-[16px] right-[16px] flex items-center gap-[6px]"
    >
      <RadioGroup.Label className={`${fontColor} text-[8px] font-medium`}>FONT</RadioGroup.Label>
      {PICKER_ARR.map((color) => (
        <RadioGroup.Option
          key={color.text}
          value={color.text}
          className={`${color.bg} h-5 w-5 rounded-full border ${color.border}`}
        />
      ))}
    </RadioGroup>
  );
};

export default FontColorPicker;
