interface Props {
  text: string;
  onClick: () => void;
}

const BottomButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-0 z-20 flex h-[60px] w-full min-w-[320px] items-center justify-center rounded-t-[10px] bg-[#111] text-button1 font-semibold text-white sm:left-1/2 sm:max-w-[320px] sm:-translate-x-1/2"
    >
      {text}
    </button>
  );
};

export default BottomButton;
