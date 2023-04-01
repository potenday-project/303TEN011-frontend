import { useState } from "react";

export type Tab = "none" | "background" | "template" | "spoide" | "font" | "size";

const useDecoTabState = () => {
  const [activeTab, setActiveTab] = useState<Tab>("none");
  const handleActiveTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  return { activeTab, handleActiveTab };
};

export default useDecoTabState;
