import randomWords from "random-words";

export const makeWords = (count = 36) => {
  return Array(count)
    .fill(undefined)
    .map((_) => randomWords(1)[0].toLowerCase());
};

