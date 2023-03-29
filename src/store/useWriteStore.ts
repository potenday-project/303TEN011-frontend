import { create } from "zustand";

type Type =
  | "title"
  | "author"
  | "content"
  | "backgroundColor"
  | "imageSize"
  | "fontStyle"
  | "fontColor";

interface WriteState {
  data: {
    title: string;
    author: string;
    content: string;
    backgroundColor: string;
    imageSize: string;
    fontStyle: string;
    fontColor: string;
  };
  actions: {
    postData: (type: Type, cardData: string) => void;
  };
}

const useWriteStore = create<WriteState>((set) => ({
  data: {
    title: "",
    author: "",
    content: "",
    backgroundColor: "",
    imageSize: "",
    fontStyle: "",
    fontColor: "",
  },
  actions: {
    postData: (type, cardData) => {
      set((state) => ({ ...state, data: { ...state.data, [type]: cardData } }));
    },
  },
}));

export default useWriteStore;

export const useWriteActions = () => useWriteStore((state) => state.actions);

export const useWriteState = () => useWriteStore((state) => state.data);
