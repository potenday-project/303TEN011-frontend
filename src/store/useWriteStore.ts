import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { GetCardData, PostCardData } from "@/@shared/types/cardTypes";

type Type =
  | "title"
  | "author"
  | "content"
  | "thumbnail"
  | "backgroundColor"
  | "imageSize"
  | "fontStyle"
  | "fontColor";

interface State {
  data: PostCardData;
  edit: {
    editMode: boolean;
    editNumber: number;
  };
}

interface Actions {
  actions: {
    postData: (type: Type, cardData: string) => void;
    clearData: () => void;
    editData: (editData: GetCardData) => void;
  };
}

interface WriteState extends State, Actions {}

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

const initialEditData = {
  editMode: false,
  editNumber: 0,
};

const useWriteStore = create<WriteState>((set) => ({
  data: initialData,
  edit: initialEditData,
  actions: {
    postData: (type, cardData) => {
      set((state) => ({ ...state, data: { ...state.data, [type]: cardData } }));
    },
    clearData: () => {
      set((state) => ({ ...state, edit: initialEditData, data: initialData }));
    },
    editData: (editData) => {
      set((state) => ({
        ...state,
        edit: { ...state.edit, editMode: true, editNumber: editData.id },
        data: {
          ...state.data,
          title: editData.title,
          author: editData.author,
          content: editData.content,
          thumbnail: editData.thumbnail,
          backgroundColor: editData.backgroundColor,
          imageSize: editData.imageSize,
          fontStyle: editData.fontStyle,
          fontColor: editData.fontColor,
        },
      }));
    },
  },
}));

export default useWriteStore;

export const useWriteState = () => useWriteStore((state) => state.data, shallow);
export const useEditState = () => useWriteStore((state) => state.edit, shallow);

export const useWriteActions = () => useWriteStore((state) => state.actions);
