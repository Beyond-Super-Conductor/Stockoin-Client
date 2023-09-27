import { format } from "date-fns";

export const formatDate = (date: string) => {
  const inputDate = new Date('2023-09-25T06:17:19.612+00:00');
  const formattedDate = format(inputDate, 'yyyy-MM-dd HH:mm:ss');
  return formattedDate;
}