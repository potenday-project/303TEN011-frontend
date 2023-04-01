interface Props {
  className?: string;
  onClick: () => void;
  text: string;
}

const BasicButton = ({ className, onClick, text }: Props) => {
  return (
    <button
      className={`${className} h-[50px] w-full rounded-[10px] bg-[#e9e9e9] text-button2 font-bold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BasicButton;
