import useGetRitual from "@/_main/queries/useGetRitual";

import PageTitle from "@/@shared/elements/PageTitle";
import { bebas } from "@/@shared/utils/fonts";

interface CountCardProps {
  count: number;
  text: string;
}

const CountCard = ({ count, text }: CountCardProps) => {
  const padCount = String(count).padStart(3, "0").split("").map(Number);

  return (
    <article className="flex h-[85px] w-full flex-col justify-between rounded-[10px] bg-[#32302f] p-3">
      <div
        className={`${bebas.variable} grid h-[37px] grid-cols-3 divide-x divide-main-900 font-bebas text-[37px] leading-[37px] text-white`}
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
    </article>
  );
};

interface InspirationCardProps {
  bookCount: number;
  inspirationCount: number;
}

const InspirationCard = ({ bookCount, inspirationCount }: InspirationCardProps) => {
  const padBookCount = String(bookCount).padStart(3, "0");
  const padInspirationCount = String(inspirationCount).padStart(3, "0");

  return (
    <article className="col-span-2 flex h-[80px] w-full items-center gap-3 rounded-[10px] bg-[#32302f] p-[20px]">
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
    </article>
  );
};

const RitualContainer = () => {
  const { data: ritualData } = useGetRitual();

  return (
    <>
      {ritualData && (
        <section className="grid grid-cols-2 gap-3">
          <CountCard count={ritualData.totalArchiveCount} text="기록한 문장" />
          <CountCard count={ritualData.continuityPostDay} text="우리가 연속해서 만난 날" />
          <InspirationCard
            bookCount={ritualData.totalBookCount}
            inspirationCount={ritualData.totalArchiveCount}
          />
        </section>
      )}
    </>
  );
};

export default RitualContainer;
