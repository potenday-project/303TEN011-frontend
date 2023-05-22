import CardDecoColor from "@/_write/components/CardDecoColor";
import CardDecoFont from "@/_write/components/CardDecoFont";
import CardDecoSize from "@/_write/components/CardDecoSize";
import CardDecoSpoide from "@/_write/components/CardDecoSpoide";
import CardDecoTemplate from "@/_write/components/CardDecoTemplate";
import CardDecoTabButton from "@/_write/elements/CardDecoTabButton";
import useDecoTabState from "@/_write/hooks/useDecoTabState";

import {
  IconArrow,
  IconBasicColor,
  IconCardSize,
  IconFont,
  IconSpoide,
  IconTemplate,
} from "@/static/icons";

const CardDecoContainer = () => {
  const { activeTab, handleActiveTab } = useDecoTabState();

  return (
    <>
      {activeTab === "none" && (
        <div className="flex items-center justify-between pt-[10px]">
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
      )}

      {activeTab !== "none" && (
        <div className="flex items-center gap-[9px] pt-[10px]">
          <CardDecoTabButton
            onClick={() => handleActiveTab("none")}
            icon={<IconArrow />}
            className="shrink-0 bg-[#d4d4d4]"
          />

          {activeTab === "background" && <CardDecoColor />}
          {activeTab === "template" && <CardDecoTemplate />}
          {activeTab === "spoide" && <CardDecoSpoide />}
          {activeTab === "font" && <CardDecoFont />}
          {activeTab === "size" && <CardDecoSize />}
        </div>
      )}
    </>
  );
};

export default CardDecoContainer;
