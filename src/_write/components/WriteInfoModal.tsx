import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import styles from "@/_write/styles/WriteInfoModal.module.css";

import { IconArrow, IconCancel } from "@/static/icons";
import { useModalActions, useWriteInfoModalState } from "@/store/useModalStore";

interface WriteInfoModalProps {
  pagination: number;
}

const WriteInfoModal = () => {
  const isOpen = useWriteInfoModalState();
  const { changeModalState } = useModalActions();
  const handleClickClose = () => {
    changeModalState("writeInfo");
  };

  const [pagination, setPagination] = useState(1);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <>
      {isOpen && (
        <>
          <Swiper
            ref={swiperRef}
            className={styles["swiper"]}
            slidesPerView={1}
            centeredSlides={true}
            onSlideChange={(event) => setPagination(event.activeIndex + 1)}
            effect="fade"
            modules={[EffectFade]}
          >
            {SWIPER.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className={`${styles["swiper-slide"]} ${
                  idx + 1 === pagination && styles["swiper-slide-active"]
                }`}
              >
                {item}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="sm:media-center fixed top-0 left-0 z-10 flex h-[100dvh] w-full min-w-[320px] items-end justify-center bg-black/30" />
        </>
      )}

      <Dialog
        open={isOpen}
        onClose={handleClickClose}
        className="sm:media-center fixed top-0 left-0 z-10 flex h-[100dvh] w-full min-w-[320px] items-end justify-center bg-transparent"
      >
        <ModalButton className="top-[64px] right-6" onClick={handleClickClose}>
          <IconCancel />
        </ModalButton>

        <ModalButton
          className="bottom-[10px] left-6"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <IconArrow className="text-white" />
        </ModalButton>

        <ModalButton
          className="bottom-[10px] right-6 rotate-180"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <IconArrow className="text-white" />
        </ModalButton>

        <Pagination pagination={pagination} />
      </Dialog>
    </>
  );
};

const Bubble = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={`${className} w-fit rounded-[8px] bg-white p-[10px] text-body2`} {...props}>
      {children}
    </div>
  );
};

const ModalButton = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      className={`${className} absolute z-20 flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-main-900 text-white`}
      {...props}
    >
      {children}
    </button>
  );
};

const Pagination = ({ pagination }: WriteInfoModalProps) => {
  return (
    <div className="absolute bottom-[10px] flex h-[50px] w-full items-center justify-center gap-1">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className={`${
            pagination === item ? "bg-white" : "border-[1.5px] border-white"
          } h-2  w-2 rounded-full`}
        />
      ))}
    </div>
  );
};

const SWIPER = [
  <Bubble className="tooltip-tail" key={1}>
    단색 배경을 선택할 수 있습니다.
  </Bubble>,
  <Bubble className="tooltip-tail before:left-[60px]" key={2}>
    디자인 배경을 선택할 수 있습니다.
  </Bubble>,
  <Bubble className="tooltip-tail before:left-[108px]" key={3}>
    표시 색상을 배경으로 사용할 수 있습니다.
  </Bubble>,
  <Bubble className="tooltip-tail w-[185px] before:left-[156px]" key={4}>
    폰트를 선택할 수 있습니다.
  </Bubble>,
];

export default WriteInfoModal;
