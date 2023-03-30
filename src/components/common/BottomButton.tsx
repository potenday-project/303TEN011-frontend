interface Props {
  text: string;
  onClick: () => void;
}

const BottomButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-0 left-0 z-20 flex h-[60px] w-full min-w-[320px] items-center justify-center rounded-t-[10px] bg-[#111] text-lg font-semibold text-white"
    >
      {text}
    </button>
  );
};

export default BottomButton;
