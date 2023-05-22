interface Props {
  title: string;
}

const ContainerTitle = ({ title }: Props) => {
  return <span className="flex h-[25px] items-start text-xs text-[#aaa]">{title}</span>;
};

export default ContainerTitle;
