const elements = {};

export function elementify(word: string): string[][] {
  const output: string[][] = [];
  const stack: [string[], string][] = [[[], word]];

  while (stack) {
    const [parents, word] = stack.pop();

    for (let element in elements) {
      if (word.startsWith(element)) {
        stack.push([[...parents, element], word.slice(element.length)]);
      }
    }

    if (word.length === 0) {
      output.push(parents);
    }
  }

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