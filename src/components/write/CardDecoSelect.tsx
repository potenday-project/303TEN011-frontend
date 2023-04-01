import CardDecoTabButton from "./CardDecoTabButton";

import { Tab } from "@/hooks/write/useDecoTabState";
import { IconBasicColor, IconCardSize, IconFont, IconSpoide, IconTemplate } from "@/static/icons";

interface Props {
  activeTab: Tab;
  handleActiveTab: (tab: Tab) => void;
}

const CardDecoSelect = ({ activeTab, handleActiveTab }: Props) => {
  return (
    <>
      {activeTab === "none" && (
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
      )}
    </>
  );
};

export default CardDecoSelect;
