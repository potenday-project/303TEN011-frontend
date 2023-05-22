import IconButton from "@/@shared/elements/IconButton";
import { IconCancel } from "@/static/icons";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import Image from "next/image";

const AfterSelection = () => {
  const { title, thumbnail, author } = useWriteState();

  const { clearData } = useWriteActions();
  const handleClickCancel = () => {
    clearData();
  };

  return (
    <div className="flex h-[50px] w-full items-center justify-between gap-[10px] rounded-[10px] bg-white p-3">
      <div className="flex items-center justify-start gap-[10px] overflow-hidden">
        <div className="relative h-[30px] w-[30px] shrink-0 rounded-md bg-[#d9d9d9]">
          {thumbnail && (
            <Image
              className="rounded-md object-cover"
              src={thumbnail}
              alt="커버이미지"
              fill
              sizes="30px"
              priority
            />
          )}
        </div>

        <div className="flex min-w-0 flex-col">
          <span className="block truncate text-body2 font-bold">{title}</span>
          <span className="block truncate text-label text-[#777]">{author}</span>
        </div>
      </div>

      <IconButton
        icon={<IconCancel />}
        onClick={handleClickCancel}
        className="flex shrink-0 text-[#585858]"
      />
    </div>
  );
};

export default AfterSelection;
