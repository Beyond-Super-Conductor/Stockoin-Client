import { formatDistanceToNow, parseISO } from "date-fns";

export const formatDateToAgo = (date: string): string => {
  const parsedDate = parseISO(date);

  const distance = formatDistanceToNow(parsedDate)
  .replace('less than a minute', '1분 미만')
  .replace(' about', '약')
  .replace(' minutes', '분')
  .replace(' minute', '분')
  .replace(' hours', '시간')
  .replace(' hour', '시간')
  .replace(' days', '일')
  .replace(' day', '일')
  .replace(' months', '달')
  .replace(' month', '달')
  .replace(' years', '년')
  .replace(' year', '년')

  return `${date} ${distance} 전`
}
