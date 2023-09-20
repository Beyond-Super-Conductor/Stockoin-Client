import { Coin } from "@/types/coin";
import { atom } from "recoil";

export const selectCoinstate = atom<Coin>({
  key: 'selectCoin',
  default: {
    koName: '',
    enName: '',
    icon: null
  },
});
