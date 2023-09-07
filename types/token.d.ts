import { StaticImageData } from "next/image";

export interface token {
  koName: string;
  enName: string;
}

export interface TokenCategories {
  koName: string;
  enName: string;
  tokens: token[];
  icon: string | StaticImageData;
}