import { RadioGroup } from "@headlessui/react";

import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import {
  IconTemplateBook,
  IconTemplateFlower,
  IconTemplateGlasses,
  IconTemplateRain,
  IconTemplateSleep,
} from "@/static/templateIcons";

const TEMPLATE_STYLE = [
  {
    icons: <IconTemplateBook />,
    value: "template-book",
  },
  {
    icons: <IconTemplateFlower />,
    value: "template-flower",
  },
  {
    icons: <IconTemplateGlasses />,
    value: "template-glasses",
  },
  {
    icons: <IconTemplateRain />,
    value: "template-rain",
  },
  {
    icons: <IconTemplateSleep />,
    value: "template-sleep",
  },
];

const CardDecoTemplate = () => {
  const { postData } = useWriteActions();
  const { backgroundColor } = useWriteState();

  return (
    <RadioGroup
      className="deco-tab-group"
      onChange={(value) => postData("backgroundColor", value)}
      value={backgroundColor}
    >
      {TEMPLATE_STYLE.map((item, idx) => (
        <RadioGroup.Option key={idx} className="deco-tab-option" value={item.value}>
          {item.icons}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default CardDecoTemplate;
