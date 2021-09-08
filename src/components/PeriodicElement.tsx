import { Component } from "solid-js";

export type Element = {
  atomicMass: number;
  atomicNumber: number;
  atomicRadius: number;
  boilingPoint: number;
  bondingType: string;
  cpkHexColor: string;
  density: number;
  electronAffinity: number;
  electronegativity: number;
  electronicConfiguration: string;
  groupBlock: string;
  ionRadius: string;
  ionizationEnergy: number;
  meltingPoint: number;
  name: string;
  oxidationStates: string;
  standardState: string;
  symbol: string;
  vanDelWaalsRadius: number;
  yearDiscovered: number;
};

export const PeriodicElement: Component<{element: Element}> = (props) => <></>;