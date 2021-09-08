import { Component, createEffect, createMemo, createResource, createSignal } from "solid-js";
import { PeriodicElement } from "./components";

const App: Component = () => {

  const fetchPeriodicTable = async () => (await fetch("https://neelpatel05.pythonanywhere.com/")).json();

  const [periodicTable] = createResource(fetchPeriodicTable);

  const [input, setInput] = createSignal("");

  return (
    <div class="h-screen flex justify-center items-center bg-gray-900">
      <input
        class="p-6 max-w-sm mx-auto bg-gray-500 rounded-xl shadow-md flex items-center space-x-4 mb-100"
        type="text"
        oninput={event => setInput(event.currentTarget.value)}
      />
    </div>
  );
};

export default App;
