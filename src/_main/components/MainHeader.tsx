import RitualContainer from "@/_main/components/RitualContainer";

import IconButton from "@/@shared/elements/IconButton";
import Logo from "@/@shared/elements/Logo";
import { IconDrawer } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";

const MainHeader = () => {
  const { changeModalState } = useModalActions();
  const handleclickMypage = () => {
    changeModalState("mypage");
  };

  return (
    <section className="fixed top-0 h-[290px] w-full min-w-[320px] bg-main bg-bottom bg-no-repeat px-6 sm:max-w-[320px]">
      <article className="flex h-[60px] w-full items-center justify-between">
        <Logo width={87} fontColor="#F5F3F1" lineColor="#616161" />
        <IconButton icon={<IconDrawer />} onClick={handleclickMypage} />
      </article>

      <RitualContainer />
    </section>
  );
};

export default MainHeader;
