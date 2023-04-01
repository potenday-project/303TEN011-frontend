import useRitual from "@/hooks/main/useGetRitual";
import { bebas } from "@/util/fonts";
import PageTitle from "../common/PageTitle";

interface CardProps {
  count: number;
  text: string;
}

interface InspirationCardProps {
  bookCount: number;
  inspirationCount: number;
}

const Card = ({ count, text }: CardProps) => {
  const padCount = String(count).padStart(3, "0").split("").map(Number);

  return (
    <div className="flex h-[85px] w-full flex-col justify-between rounded-[10px] bg-[#32302f] p-3">
      <div
        className={`grid h-[37px] grid-cols-3 divide-x divide-main-900  leading-[0px] ${bebas.variable} font-bebas text-[37px] text-white`}
      >
        {padCount.map((count, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {count}
          </div>
        ))}
      </div>

      <div className="w-full text-center text-[11px] font-semibold leading-[12px] text-[#aaa]">
        {text}
      </div>
    </div>
  );
};

const InspirationCard = ({ bookCount, inspirationCount }: InspirationCardProps) => {
  const padBookCount = String(bookCount).padStart(3, "0");
  const padInspirationCount = String(inspirationCount).padStart(3, "0");

  return (
    <div className="col-span-2 flex h-[80px] w-full items-center gap-3 rounded-[10px] bg-[#32302f] p-[20px]">
      <div className="text-[32px]">👨‍🦳</div>
      <div className="text-sm text-white">
        <span className="text-lg font-bold">{padBookCount}권</span>
        <span>의 책을 읽고</span>
        <span className="text-lg font-bold"> {padInspirationCount}번</span>
        <span>의</span>
        <div className="flex items-end">
          <PageTitle
            title="영감"
            fontSize="text-headline3"
            fontColor="text-white"
            lineColor="bg-[#0C0B0B]"
          />
          <span>을 받았습니다</span>
        </div>
      </div>
    </div>
  );
};

const RitualCard = () => {
  const { data } = useRitual();

  return (
    <div className="grid grid-cols-2 gap-3">
      <Card count={data?.totalArchiveCount || 0} text="기록한 문장" />
      <Card count={data?.continuityPostDat || 0} text="우리가 연속해서 만난 날" />
      <InspirationCard
        bookCount={data?.totalBookCount || 0}
        inspirationCount={data?.totalArchiveCount || 0}
      />
    </div>
  );
};

export default RitualCard;
