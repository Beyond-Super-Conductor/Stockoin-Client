import { token } from "@/types/token";
import { atom } from "recoil";



export const dashboardTitleValueAtom = atom<token>({
  key: 'dashboardTitleValueAtom',
  default: {
    koName: '',
    enName: '',
  },
});