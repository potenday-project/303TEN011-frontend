import { ButtonHTMLAttributes } from "react";

interface BasicButtonProps {
  className?: string;
  text: string;
}

const BasicButton = ({
  className,
  text,
  ...props
}: BasicButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${className} h-[50px] w-full rounded-[10px] bg-[#e9e9e9] text-button2 font-bold`}
      {...props}
    >
      {text}
    </button>
  );
};

export default BasicButton;
