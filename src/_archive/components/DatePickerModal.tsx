import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import styles from "@/_archive/styles/DatePickerModal.module.css";

import TextButton from "@/@shared/elements/TextButton";
import { useDatePickerModalState, useModalActions } from "@/store/useModalStore";

const YEAR = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].reverse();
const MONTH = [1, 2, 4, 7, 9, 12];

const DatePickerModal = () => {
  const [date, setDate] = useState({ year: YEAR[0], month: MONTH[0] });

  const isOpen = useDatePickerModalState();
  const { changeModalState } = useModalActions();
  const handleClickClose = () => {
    changeModalState("datePicker");
  };

  const handleClickSearch = () => {
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
          <Swiper
            className={styles["swiper"]}
            direction="vertical"
            centeredSlides
            slideToClickedSlide
            mousewheel
            slidesPerView={4}
            modules={[Mousewheel]}
            initialSlide={YEAR.findIndex((e) => e === date.year)}
            onSlideChange={({ activeIndex }) =>
              setDate((prev) => ({ ...prev, year: YEAR[activeIndex] }))
            }
          >
            {YEAR.map((item, idx) => (
              <SwiperSlide
                className={`${styles["swiper-slide"]} ${
                  item === date.year && styles["swiper-slide-active"]
                }`}
                key={idx}
              >
                {item}
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className={styles["swiper"]}
            direction="vertical"
            centeredSlides
            slideToClickedSlide
            mousewheel
            slidesPerView={4}
            modules={[Mousewheel]}
            initialSlide={MONTH.findIndex((e) => e === date.month)}
            onSlideChange={({ activeIndex }) =>
              setDate((prev) => ({ ...prev, month: MONTH[activeIndex] }))
            }
          >
            {MONTH.map((item, idx) => (
              <SwiperSlide
                className={`${styles["swiper-slide"]} ${
                  item === date.month && styles["swiper-slide-active"]
                }`}
                key={idx}
              >
                {item}월
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute left-3 top-1/2 h-10 w-[calc(100%-24px)] -translate-y-1/2 rounded-lg bg-[#EAEAEA]" />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DatePickerModal;
