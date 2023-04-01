import { RadioGroup } from "@headlessui/react";

import { useWriteActions, useWriteState } from "@/store/useWriteStore";

const DEFAULT_COLOR = ["#2C2A29", "#ECECEC", "#CBE5F9", "#CBD5F9", "#F8D2D9", "#F8E0D2", "#D7E8CF"];

const CardDecoColor = () => {
  const { postData } = useWriteActions();
  const { backgroundColor } = useWriteState();

  return (
    <RadioGroup
      className="deco-tab-group"
      onChange={(value) => postData("backgroundColor", value)}
      defaultValue={backgroundColor}
    >
      {DEFAULT_COLOR.map((color) => (
        <RadioGroup.Option
          style={{ backgroundColor: color }}
          className="deco-tab-option"
          key={color}
          value={color}
        />
      ))}
    </RadioGroup>
  );
};

export default CardDecoColor;
