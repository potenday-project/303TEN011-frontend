import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dialog } from "@headlessui/react";
import { Swiper as SwiperMain, SwiperSlide } from "swiper/react";
import Swiper, { Mousewheel } from "swiper";
import "swiper/css";
import styles from "@/_archive/styles/DatePickerModal.module.css";

import TextButton from "@/@shared/elements/TextButton";
import { useDatePickerModalState, useModalActions } from "@/store/useModalStore";

interface DatePickerModalProps {
  totalDate: {
    [year: number]: number[];
  };
}

const DatePickerModal = ({ totalDate }: DatePickerModalProps) => {
  const YEAR_ARR = Object.keys(totalDate).reverse().map(Number);

  const { push, query } = useRouter();
  const year = Number(query.year) || 0;
  const month = Number(query.month) || 0;
  const [date, setDate] = useState({ year, month });

  const handleClickSearch = () => {
    changeModalState("datePicker");
    push({ pathname: "/archive", query: { year: date.year, month: date.month } });
  };

  const [swiper, setSwiper] = useState<Swiper>();
  useEffect(() => {
    if (!swiper) return;
    swiper.slideTo(0);
  }, [date.year]);

  const isOpen = useDatePickerModalState();
  const { changeModalState } = useModalActions();
  const handleClickClose = () => {
    changeModalState("datePicker");
  };

  return (
    <Dialog
      className="sm:media-center fixed top-0 z-20 flex h-[100dvh] w-full min-w-[320px] items-end justify-center bg-black/60"
      open={isOpen}
      onClose={handleClickClose}
    >
      <Dialog.Panel className="h-[210px] w-full overflow-y-auto rounded-t-[10px] bg-white">
        <div className="flex h-[50px] items-center justify-end px-4">
          <TextButton onClick={handleClickSearch} text="완료" />
        </div>

        <div className="relative grid grid-cols-2 px-3">
          <SwiperMain
            className={styles["swiper"]}
            direction="vertical"
            centeredSlides
            slideToClickedSlide
            mousewheel
            slidesPerView={4}
            modules={[Mousewheel]}
            initialSlide={YEAR_ARR.findIndex((e) => e === date.year) + 1 || 0}
            onSlideChange={({ activeIndex }) => {
              setDate((prev) => ({
                ...prev,
                year: YEAR_ARR[activeIndex - 1] || 0,
                month: 0,
              }));
            }}
          >
            <SwiperSlide
              className={`${styles["swiper-slide"]} ${
                0 === date.year && styles["swiper-slide-active"]
              }`}
            >
              전체보기
            </SwiperSlide>
            {YEAR_ARR.map((item, idx) => (
              <SwiperSlide
                className={`${styles["swiper-slide"]} ${
                  item === date.year && styles["swiper-slide-active"]
                }`}
                key={idx}
              >
                {item}
              </SwiperSlide>
            ))}
          </SwiperMain>

          <SwiperMain
            className={styles["swiper"]}
            direction="vertical"
            centeredSlides
            slideToClickedSlide
            mousewheel
            slidesPerView={4}
            modules={[Mousewheel]}
            onSwiper={setSwiper}
            initialSlide={totalDate[date.year]?.findIndex((e) => e === date.month) + 1 || 0}
            onSlideChange={({ activeIndex }) => {
              setDate((prev) => ({ ...prev, month: totalDate[date.year]?.[activeIndex - 1] || 0 }));
            }}
          >
            {date.year !== 0 && (
              <SwiperSlide
                className={`${styles["swiper-slide"]} ${
                  0 === date.month && styles["swiper-slide-active"]
                }`}
              >
                전체보기
              </SwiperSlide>
            )}
            {totalDate[date.year]?.map((item, idx) => (
              <SwiperSlide
                className={`${styles["swiper-slide"]} ${
                  item === date.month && styles["swiper-slide-active"]
                }`}
                key={idx}
              >
                {item}월
              </SwiperSlide>
            ))}
          </SwiperMain>

          <div className="absolute left-3 top-1/2 h-10 w-[calc(100%-24px)] -translate-y-1/2 rounded-lg bg-[#EAEAEA]" />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DatePickerModal;
