export const sum = (a: number, b: number): number => a + b;

export const sumNums = (...nums: number[]): number => nums.reduce(sum, 0);

export const hexToDecimal = (hex: string): number => parseInt(hex, 16);