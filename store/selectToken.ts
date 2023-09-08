import { Coin } from "@/types/token";
import { atom } from "recoil";

export const selectTokenState = atom<Coin>({
  key: 'selectToken',
  default: {
    koName: '',
    enName: '',
    icon: ''
  },
});
