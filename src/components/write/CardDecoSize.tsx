import { RadioGroup } from "@headlessui/react";

import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import { IconAspectLong, IconAspectSquare } from "@/static/icons";

const CARD_SIZE = [
  {
    icons: <IconAspectSquare />,
    value: "aspect-square",
  },
  { icons: <IconAspectLong />, value: "aspect-long" },
];

const CardDecoSize = () => {
  const { postData } = useWriteActions();
  const { imageSize } = useWriteState();

  return (
    <RadioGroup
      className="deco-tab-group"
      onChange={(value) => postData("imageSize", value)}
      defaultValue={imageSize}
    >
      {CARD_SIZE.map((item, idx) => (
        <RadioGroup.Option key={idx} className="deco-tab-option" value={item.value}>
          {item.icons}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default CardDecoSize;
