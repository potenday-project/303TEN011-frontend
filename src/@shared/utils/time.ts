export const timeFormat = (date: string) => {
  return new Intl.DateTimeFormat("ko-KR").format(new Date(date));
};
