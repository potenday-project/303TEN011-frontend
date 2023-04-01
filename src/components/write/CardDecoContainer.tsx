import CardDecoSelect from "./CardDecoSelect";
import CardDecoTabButton from "./CardDecoTabButton";
import CardDecoColor from "./CardDecoColor";
import CardDecoTemplate from "./CardDecoTemplate";
import CardDecoSpoide from "./CardDecoSpoide";
import CardDecoFont from "./CardDecoFont";
import CardDecoSize from "./CardDecoSize";

import useDecoTabState from "@/hooks/write/useDecoTabState";
import { IconArrow } from "@/static/icons";

const CardDecoContainer = () => {
  const { activeTab, handleActiveTab } = useDecoTabState();

  return (
    <>
      <CardDecoSelect activeTab={activeTab} handleActiveTab={handleActiveTab} />

      {activeTab !== "none" && (
        <div className="flex items-center gap-[9px] py-[10px] pl-6">
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
