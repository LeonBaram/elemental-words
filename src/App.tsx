import { Component, createResource, createSignal } from "solid-js";
import { ElementData } from "./types";
import { PeriodicElement } from "./components";
import { wordToElements } from "./utils";

const App: Component = () => {

  const fetchPeriodicTable = async () => (await fetch("https://neelpatel05.pythonanywhere.com/")).json();

  const [periodicTable] = createResource<ElementData[]>(fetchPeriodicTable);

  const [input, setInput] = createSignal("");

  return (
    <div class="h-screen flex flex-col justify-evenly items-center bg-gray-900">
      <input
        class="p-6 max-w-sm bg-gray-500 rounded-xl shadow-md flex items-center space-x-4 mt-5"
        type="text"
        oninput={event => setInput(event.currentTarget.value)}
      />
      <div class="w-screen flex flex-col justify-center items-center">
        {periodicTable.loading ? <p class="text-white">loading</p> :
          wordToElements(input(), periodicTable()).map(combination => (
            <span class="max-w-screen max-h-screen flex flex-wrap justify-evenly items-center overflow-scroll">
              {combination.map(index => 
              <PeriodicElement element={periodicTable()[index]} />
              )}
            </span>
          ))
        }
      </div>
    </div>
  );
};

export default App;
