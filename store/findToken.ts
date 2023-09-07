import { TokenCategories } from "@/types/token";
import { atom, selector } from "recoil";



export const findCategoryState = atom<Omit<TokenCategories,'icon'>>({
  key: 'dashboardTitleValueAtom',
  default: {
    koName: '',
    enName: '',
    tokens: [],
  },
});

export const selectTokens = selector({
  key: 'findTokenSelector',
  get: ({get}) => {
    const {tokens} = get(findCategoryState);
    return tokens;
  },
})