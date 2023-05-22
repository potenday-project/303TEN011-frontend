import { ButtonHTMLAttributes } from "react";

interface BottomButtonProps {
  text?: string;
  visible?: boolean;
}

const BottomButton = ({
  text = "완료",
  visible = true,
  ...props
}: BottomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      {visible && (
        <button
          className="sm:media-center fixed bottom-0 z-20 flex h-[60px] w-full min-w-[320px] items-center justify-center rounded-t-[10px] bg-[#111] text-button1 font-semibold text-white"
          {...props}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default BottomButton;
