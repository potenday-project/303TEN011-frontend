import { useEffect, useState } from "react";
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

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

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
          history.shift();
        }

        set({ history: [...history, query] });
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
