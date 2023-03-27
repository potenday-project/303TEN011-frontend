import { useRouter } from "next/router";

const Detail = () => {
  const { query } = useRouter();

  return (
    <>
      <h1>상세페이지: {query.id}</h1>
    </>
  );
};

export default Detail;
