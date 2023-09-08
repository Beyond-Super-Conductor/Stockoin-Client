import { StaticImageData } from "next/image";

export interface Coin {
  koName: string;
  enName: string;
  icon: StaticImageData | null;
}

export interface TokenCategories {
  koName: string;
  enName: string;
  tokens: Coin[];
  icon: string | StaticImageData;
}

