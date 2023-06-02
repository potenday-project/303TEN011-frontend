interface Props {
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const CardDecoTabButton = ({ onClick, className, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-[#bababa]`}
    >
      {icon}
    </button>
  );
};

export default CardDecoTabButton;
