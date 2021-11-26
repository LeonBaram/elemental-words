import { Component } from "solid-js";
import { ElementData } from "../types";
import { textColor } from "../utils";

export const PeriodicElement: Component<{ element: ElementData }> = (props) => (
  <div
    class="p-2 rounded-xl shadow-md w-32 h-32 text-center m-5" 
    style={{
      'background-color': `#${props.element.cpkHexColor}`,
      'color': textColor(`#${props.element.cpkHexColor ?? '000000'}`),
    }}
  >
    <p class="text-left">{props.element.atomicNumber}</p>
    <h2 class="text-5xl">{props.element.symbol}</h2>
    <p>{props.element.name}</p>
    <p>{props.element.atomicMass}</p>
  </div>
);