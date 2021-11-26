import { LRUCache } from "mnemonist";
import { ElementData } from "../types";

const cache = new LRUCache<string, number[][]>(1000);

export function wordToElements(input: string, elements: ElementData[]): number[][] {
  if (!elements || !elements.length || !input.length) {
    return [];
  }

  if (input === '*') {
    return [elements.map((_, i) => i)];
  }

  const entry = cache.peek(input);
  if (entry) {
    return entry;
  }

  const output: number[][] = [];
  const stack: [number[], string][] = [[[], input]];

  while (stack.length > 0) {
    const [parents, word] = stack.pop();

    for (let element: ElementData, i = 0; i < elements.length; i++) {
      element = elements[i];
      if (word.toLowerCase().startsWith(element.symbol.toLowerCase())) {
        stack.push([[...parents, i], word.slice(element.symbol.length)]);
      }
    }

    if (word.length === 0) {
      output.push(parents);
    }
  }

  cache.set(input, output);
  return output;
}

/*
original implementation:

def elemental_forms(word):
    result = []
    stack = [ ([], word.capitalize()) ]
    while stack:
        parents, word = stack.pop()
        if not word:
            result.append(parents)
            continue
        for element, name in ELEMENTS.items():
            if word.startswith(element):
                stack.append((parents + [f'{name} ({element})'], word[len(element):].capitalize()))
    return result
*/