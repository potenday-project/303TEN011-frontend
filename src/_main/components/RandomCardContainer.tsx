import useGetRandomCard from "@/_main/queries/useGetRandomCard";

import PageTitle from "@/@shared/elements/PageTitle";
import FullCard from "@/@shared/elements/FullCard";

const RandomCardContainer = () => {
  const { data: randomCardData } = useGetRandomCard();

  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="오늘의 한줄" />

      {randomCardData && <FullCard {...randomCardData} />}
    </div>
  );
};

export default RandomCardContainer;
