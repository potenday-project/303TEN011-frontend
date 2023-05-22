import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  history: string[];
}

interface Actions {
  addHistory: (query: string) => void;
  deleteHistory: (query: string) => void;
}

interface HistoryState extends State, Actions {}

export default create<HistoryState>()(
  persist(
    (set, get) => ({
      history: [],
      addHistory: (query) => {
        const history = get().history;
        const existIndex = history.findIndex((item) => item === query);

        if (existIndex !== -1) {
          history.splice(existIndex, 1);
        }

        if (history.length > 9) {
          history.pop();
        }

        set({ history: [query, ...history] });
      },
      deleteHistory: (query) => {
        set({ history: get().history.filter((item) => item !== query) });
      },
    }),
    {
      name: "recentHistory",
    },
  ),
);
