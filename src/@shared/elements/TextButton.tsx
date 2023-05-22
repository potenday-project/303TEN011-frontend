import { ButtonHTMLAttributes } from "react";

interface TextButtonProps {
  text?: string;
}

const TextButton = ({
  text = "닫기",
  ...props
}: TextButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="font-bold text-main-900 underline decoration-2 underline-offset-4"
      {...props}
    >
      {text}
    </button>
  );
};

export default TextButton;
