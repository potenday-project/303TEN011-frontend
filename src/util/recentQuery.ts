export const recentQuery = (query: string) => {
  const searchHistory = localStorage.getItem("searchHistory");

  if (!searchHistory) {
    localStorage.setItem("searchHistory", JSON.stringify([query]));
    return;
  }

  const parseArr: string[] = JSON.parse(searchHistory);
  const existingIndex = parseArr.findIndex((item) => item === query);

  if (existingIndex !== -1) {
    parseArr.splice(existingIndex, 1);
  }

  localStorage.setItem("searchHistory", JSON.stringify([...parseArr, query]));
};
