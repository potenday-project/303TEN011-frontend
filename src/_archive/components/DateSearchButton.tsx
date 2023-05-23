import { IconDropdown } from "@/static/icons";
import { useDatePickerModalState, useModalActions } from "@/store/useModalStore";

const DateSearchButton = () => {
  const isOpen = useDatePickerModalState();
  const { changeModalState } = useModalActions();
  const handleClickButton = () => {
    changeModalState("datePicker");
  };

  return (
    <button onClick={handleClickButton} className="flex items-center text-headline2 font-extrabold">
      <span>2023. 3월</span>
      <IconDropdown className={`${isOpen ? "rotate-180" : null} duration-500`} />
    </button>
  );
};

export default DateSearchButton;
