import { create } from "zustand";

type Type = "searchBook" | "searchArchive";

interface ModalState {
  searchBook: boolean;
  searchArchive: boolean;
  actions: {
    changeModalState: (type: Type) => void;
  };
}

const useModalStore = create<ModalState>((set) => ({
  searchBook: false,
  searchArchive: false,
  actions: {
    changeModalState: (type) => {
      set((state) => ({ ...state, [type]: !state[type] }));
    },
  },
}));

export default useModalStore;

export const useModalActions = () => useModalStore((state) => state.actions);

export const useSearchBookModalState = () => useModalStore((state) => state.searchBook);
export const useSearchArchiveModalState = () => useModalStore((state) => state.searchArchive);
