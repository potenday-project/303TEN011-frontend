import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { usePalette } from "color-thief-react";

import CardDecoTabButton from "./CardDecoTabButton";

import { DEFAULT_COLOR } from "@/constants/arr";
import {
  IconArrow,
  IconAspectLong,
  IconAspectSquare,
  IconBasicColor,
  IconBasicFont,
  IconBookk,
  IconCardSize,
  IconFont,
  IconJSongMyung,
  IconSCoreDream,
  IconSpoide,
  IconTemplate,
} from "@/static/icons";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";

type Tab = "none" | "background" | "template" | "spoide" | "font" | "size";

const CardDecoTabBox = () => {
  const [activeTab, setActiveTab] = useState<Tab>("none");
  const handleActiveTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  const { postData } = useWriteActions();
  const { thumbnail, backgroundColor, fontStyle, imageSize } = useWriteState();
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
    <>
      {activeTab === "none" ? (
        <div className="flex items-center justify-between py-[10px] px-6">
          <div className="flex items-center gap-2">
            <CardDecoTabButton
              onClick={() => handleActiveTab("background")}
              icon={<IconBasicColor />}
            />
            <CardDecoTabButton
              onClick={() => handleActiveTab("template")}
              icon={<IconTemplate />}
            />
            <CardDecoTabButton onClick={() => handleActiveTab("spoide")} icon={<IconSpoide />} />
            <CardDecoTabButton onClick={() => handleActiveTab("font")} icon={<IconFont />} />
          </div>
          <CardDecoTabButton onClick={() => handleActiveTab("size")} icon={<IconCardSize />} />
        </div>
      ) : (
        <div className="flex items-center gap-[9px] py-[10px] pl-6">
          <CardDecoTabButton
            onClick={() => handleActiveTab("none")}
            icon={<IconArrow />}
            className="shrink-0 bg-[#d4d4d4]"
          />

          {activeTab === "background" && (
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
          )}

          {activeTab === "spoide" && (
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
          )}

          {activeTab === "font" && (
            <RadioGroup
              className="deco-tab-group"
              onChange={(value) => postData("fontStyle", value)}
              defaultValue={fontStyle}
            >
              <RadioGroup.Option className="deco-tab-option w-fit px-3" value="font-pretendard">
                <IconBasicFont />
              </RadioGroup.Option>
              <RadioGroup.Option className="deco-tab-option w-fit px-3" value="font-scdream">
                <IconSCoreDream />
              </RadioGroup.Option>
              <RadioGroup.Option className="deco-tab-option w-fit px-3" value="font-bookk">
                <IconBookk />
              </RadioGroup.Option>
              <RadioGroup.Option className="deco-tab-option w-fit px-3" value="font-jsongmyung">
                <IconJSongMyung />
              </RadioGroup.Option>
            </RadioGroup>
          )}

          {activeTab === "size" && (
            <RadioGroup
              className="deco-tab-group"
              onChange={(value) => postData("imageSize", value)}
              defaultValue={imageSize}
            >
              <RadioGroup.Option className="deco-tab-option" value="aspect-square">
                <IconAspectSquare />
              </RadioGroup.Option>
              <RadioGroup.Option className="deco-tab-option" value="aspect-[9/16]">
                <IconAspectLong />
              </RadioGroup.Option>
            </RadioGroup>
          )}
        </div>
      )}
    </>
  );
};

export default CardDecoTabBox;
