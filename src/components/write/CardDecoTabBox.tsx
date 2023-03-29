import { IconArrow } from "@/static/icons";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import { RadioGroup } from "@headlessui/react";
import { usePalette } from "color-thief-react";
import { useState } from "react";

type Tab = "none" | "background" | "spoide" | "font" | "size";

const CardDecoTabBox = () => {
  const [activeTab, setActiveTab] = useState<Tab>("none");
  const handleActiveTab = (tab: Tab) => {
    setActiveTab(tab);
  };

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
    <div className="no-scrollbar relative overflow-x-auto py-[10px] px-6">
      <button
        onClick={() => handleActiveTab("background")}
        className="gradient-btn flex h-[40px] w-[40px] rounded-lg border border-[#bababa]"
      />

      {activeTab === "background" && (
        <div className="absolute top-[10px] left-6 flex items-center gap-[10px]">
          <button
            onClick={() => handleActiveTab("none")}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#d4d4d4]"
          >
            <IconArrow />
          </button>

          <RadioGroup
            className="flex gap-[10px] pr-5"
            onChange={(value) => postData("backgroundColor", value)}
            defaultValue={backgroundColor}
          >
            {colorData?.map((color) => (
              <RadioGroup.Option
                style={{ backgroundColor: color }}
                className="h-9 w-9 rounded-lg border border-[#d4d4d4] ui-checked:border-black"
                key={color}
                value={color}
              />
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  );
};

export default CardDecoTabBox;
