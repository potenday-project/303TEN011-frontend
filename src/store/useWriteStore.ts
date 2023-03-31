import { CardData } from "@/apis/api";
import { create } from "zustand";
import { shallow } from "zustand/shallow";

type Type =
  | "title"
  | "author"
  | "content"
  | "thumbnail"
  | "backgroundColor"
  | "imageSize"
  | "fontStyle"
  | "fontColor";

interface WriteState {
  data: CardData;
  actions: {
    postData: (type: Type, cardData: string) => void;
    clearData: () => void;
  };
}

const initialData = {
  title: "",
  author: "",
  content: "",
  thumbnail: "",
  backgroundColor: "#414141",
  imageSize: "aspect-square",
  fontStyle: "font-pretendard",
  fontColor: "text-white",
};

const useWriteStore = create<WriteState>((set) => ({
  data: initialData,
  actions: {
    postData: (type, cardData) => {
      set((state) => ({ ...state, data: { ...state.data, [type]: cardData } }));
    },
    clearData: () => {
      set((state) => ({ ...state, data: initialData }));
    },
  },
}));

export default useWriteStore;

export const useWriteActions = () => useWriteStore((state) => state.actions);
export const useWriteState = () => useWriteStore((state) => state.data, shallow);
