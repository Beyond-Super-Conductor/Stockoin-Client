import { token } from "@/types/token";
import { atom } from "recoil";

export const selectTokenState = atom<token>({
  key: 'selectToken',
  default: {
    koName: '',
    enName: '',
  },
});
