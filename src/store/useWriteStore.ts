import { create } from "zustand";

type Type =
  | "title"
  | "author"
  | "thumbnail"
  | "content"
  | "backgroundColor"
  | "imageSize"
  | "fontStyle"
  | "fontColor";

interface WriteState {
  data: {
    title: string;
    author: string;
    thumbnail: string;
    content: string;
    backgroundColor: string;
    imageSize: string;
    fontStyle: string;
    fontColor: string;
  };
  actions: {
    postData: (type: Type, cardData: string) => void;
    clearData: () => void;
  };
}

const initialData = {
  title: "",
  author: "",
  thumbnail: "",
  content: "",
  backgroundColor: "#414141",
  imageSize: "aspect-square",
  fontStyle: "basic",
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

export const useWriteState = () => useWriteStore((state) => state.data);
