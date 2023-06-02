import { create } from "zustand";

type Type = "mypage" | "leave" | "searchBook" | "searchArchive" | "datePicker" | "writeInfo";

type State = {
  [K in Type]: boolean;
};

interface Actions {
  actions: {
    changeModalState: (type: Type) => void;
  };
}

interface ModalState extends State, Actions {}

const useModalStore = create<ModalState>((set) => ({
  mypage: false,
  leave: false,
  datePicker: false,
  writeInfo: false,
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
export const useLeaveModalState = () => useModalStore((state) => state.leave);
export const useDatePickerModalState = () => useModalStore((state) => state.datePicker);
export const useWriteInfoModalState = () => useModalStore((state) => state.writeInfo);
export const useSearchBookModalState = () => useModalStore((state) => state.searchBook);
export const useSearchArchiveModalState = () => useModalStore((state) => state.searchArchive);

export const useModalActions = () => useModalStore((state) => state.actions);
