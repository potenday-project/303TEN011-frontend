import { ButtonHTMLAttributes } from "react";

interface IconButtonProps {
  icon: React.ReactNode;
}

const IconButton = ({
  icon,
  ...props
}: IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className="flex h-8 w-8 items-center justify-center">
      {icon}
    </button>
  );
};

export default IconButton;
