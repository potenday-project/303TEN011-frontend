import { useRouter } from "next/router";

import { IconDropdown } from "@/static/icons";
import { useDatePickerModalState, useModalActions } from "@/store/useModalStore";

const DateSearchButton = () => {
  const { query } = useRouter();
  const year = Number(query.year);
  const month = Number(query.month);

  const isOpen = useDatePickerModalState();
  const { changeModalState } = useModalActions();
  const handleClickButton = () => {
    changeModalState("datePicker");
  };

  return (
    <button onClick={handleClickButton} className="flex items-center text-headline2 font-extrabold">
      {!year && !month ? (
        <span>전체보기</span>
      ) : (
        <span>
          {year}년{month !== 0 && ` ${month}월`}
        </span>
      )}

      <IconDropdown className={`${isOpen ? "rotate-180" : null} duration-500`} />
    </button>
  );
};

export default DateSearchButton;
