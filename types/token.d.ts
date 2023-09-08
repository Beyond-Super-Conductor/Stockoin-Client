import { StaticImageData } from "next/image";

export interface Coin {
  koName: string;
  enName: string;
  icon: StaticImageData;
}

export interface TokenCategories {
  koName: string;
  enName: string;
  tokens: Coin[];
  icon: string | StaticImageData;
}

