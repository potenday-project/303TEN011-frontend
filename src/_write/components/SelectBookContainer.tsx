import AfterSelection from "@/_write/components/AfterSelection";
import BeforeSelection from "@/_write/components/BeforeSelection";

import { useWriteState } from "@/store/useWriteStore";

const SelectBookContainer = () => {
  const { title: isSelectedBook } = useWriteState();

  return (
    <section className="relative">
      {isSelectedBook ? <AfterSelection /> : <BeforeSelection />}
    </section>
  );
};

export default SelectBookContainer;
