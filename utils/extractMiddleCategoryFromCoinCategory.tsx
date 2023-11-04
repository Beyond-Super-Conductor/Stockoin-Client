import { coinCategory } from "./constants";

export const extractMiddleCategoryFromCoinCategory = (key: string) => {
  return coinCategory.find(
    category => category.coins.find(
            coin => coin.enName === key))?.enName;

}