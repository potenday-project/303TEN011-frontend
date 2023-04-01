import { RadioGroup } from "@headlessui/react";
import { usePalette } from "color-thief-react";

import { useWriteActions, useWriteState } from "@/store/useWriteStore";

const CardDecoSpoide = () => {
  const { postData } = useWriteActions();
  const { thumbnail, backgroundColor } = useWriteState();

  const { data: colorData } = usePalette(
    thumbnail
      ? `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=${encodeURIComponent(
          thumbnail,
        )}`
      : "",
    7,
    "hex",
    {
      crossOrigin: "anonymous",
    },
  );

  return (
    <RadioGroup
      className="deco-tab-group"
      onChange={(value) => postData("backgroundColor", value)}
      defaultValue={backgroundColor}
    >
      {colorData?.map((color) => (
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

export default CardDecoSpoide;
