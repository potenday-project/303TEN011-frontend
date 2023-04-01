import SelectedBook from "./SelectedBook";
import NotSelectedBook from "./NotSelectedBook";

import { useWriteState } from "@/store/useWriteStore";

const SelectBookContainer = () => {
  const { title: isSelectedBook } = useWriteState();

  return (
    <section className="relative px-6">
      {isSelectedBook ? <SelectedBook /> : <NotSelectedBook />}
    </section>
  );
};

export default SelectBookContainer;
