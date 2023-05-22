import { create } from "zustand";

type Type = "mypage" | "searchBook" | "searchArchive";

interface State {
  mypage: boolean;
  searchBook: boolean;
  searchArchive: boolean;
}

interface Actions {
  actions: {
    changeModalState: (type: Type) => void;
  };
}

interface ModalState extends State, Actions {}

const useModalStore = create<ModalState>((set) => ({
  mypage: false,
  searchBook: false,
  searchArchive: false,
  actions: {
    changeModalState: (type) => {
      set((state) => ({ ...state, [type]: !state[type] }));
    },
  },
}));

export default useModalStore;

export const useMypageModalState = () => useModalStore((state) => state.mypage);
export const useSearchBookModalState = () => useModalStore((state) => state.searchBook);
export const useSearchArchiveModalState = () => useModalStore((state) => state.searchArchive);

export const useModalActions = () => useModalStore((state) => state.actions);
