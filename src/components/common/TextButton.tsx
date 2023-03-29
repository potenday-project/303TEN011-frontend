interface Props {
  text: string;
  onClick: () => void;
}

const TextButton = ({ text, onClick }: Props) => {
  return (
    <button
      className="font-bold text-main-900 underline decoration-2 underline-offset-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextButton;
