import { RadioGroup } from "@headlessui/react";

import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import { IconBasicFont, IconBookk, IconJSongMyung, IconSCoreDream } from "@/static/icons";

const FONT_STYLE = [
  {
    icons: <IconBasicFont />,
    value: "font-pretendard",
  },
  { icons: <IconSCoreDream />, value: "font-scdream" },
  { icons: <IconBookk />, value: "font-bookk" },
  { icons: <IconJSongMyung />, value: "font-jsongmyung" },
];

const CardDecoFont = () => {
  const { postData } = useWriteActions();
  const { fontStyle } = useWriteState();

  return (
    <RadioGroup
      className="deco-tab-group"
      onChange={(value) => postData("fontStyle", value)}
      value={fontStyle}
    >
      {FONT_STYLE.map((item, idx) => (
        <RadioGroup.Option key={idx} className="deco-tab-option w-fit px-3" value={item.value}>
          {item.icons}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default CardDecoFont;
