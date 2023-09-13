import { TokenCategories } from "@/types/token";
import { atom, selector } from "recoil";



export const findCategoryState = atom<Omit<TokenCategories,'icon'>>({
  key: 'dashboardTitleValueAtom',
  default: {
    koName: '',
    enName: '',
    coins: [],
  },
});

export const selectCoins = selector({
  key: 'findcoinselector',
  get: ({get}) => {
    const {coins} = get(findCategoryState);
    return coins;
  },
})