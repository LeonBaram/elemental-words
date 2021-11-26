import { hexToDecimal, sumNums } from "./basicMath";

export const hexcodeToRGB = (hexcode: string): number[] => [
  hexcode[1] + hexcode[2], // R
  hexcode[3] + hexcode[4], // G
  hexcode[5] + hexcode[6]  // B
].map(hexToDecimal);

export const brightnessIndex = (hexcode: string): number => sumNums(...hexcodeToRGB(hexcode));

export const useDarkText = (hexcode: string) => brightnessIndex(hexcode) > 382.5;

export const textColor = (hexcode: string): string => (
  useDarkText(hexcode) ? '#000000' : '#ffffff'
);