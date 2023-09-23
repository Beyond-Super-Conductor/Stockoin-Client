import { format, isToday, parseISO } from "date-fns"

export const toToday = (dateString: string) => {
  
  return isToday(parseISO(dateString))
         ? format(parseISO(dateString), 'HH:mm')
         : format(parseISO(dateString), 'yy-MM-dd')
}