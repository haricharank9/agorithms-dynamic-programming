/**
 * @description
 * Question: Given a string representation of the first n digits of Pi and a list of your favorite numbers(all positive numbers in a string format), write a function that returns the smallest number of spaces that need to be added to the n digits of Pi such that all resulting numbers are found in the list of favorite numbers.
 *
 *
 * Expiation with example: Forget about Pi just think of a string that is given to you(preferably a large one) and another list having multiple other shorter strings. Now you have to add spaces to the large string such that each space separated word exists in the list. And then comes the twister! You have to add the smallest number of spaces possible.
 *
 * Lets take string S = [abgawed] (this is that one large string we talked about, I kept it short just for better understanding) Lets take a list of strings L = ["a", "abgaw", "bg", "ed", "w", "awed"]
 *
 * Now, you have to find the minimum number of spaces you can add to string S such that each space separated string is present in L.
 *
 * Lets try separating S:
 *
 * [ a bg awed ] Spaces added: 2
 * [ abgaw ed] Spaces added: 1 We can add 2 spaces and 1 space to get the resulting strings.
 *  So we need to return 1 in this case.
 *
 *
 * @param providedStr - String for splitting with min spaces
 * @param favSet - Array of favorite strings
 * @returns exec method
 *
 */

export function calculateMinSpaces(providedStr: string, favSet: string[]) {
  const str = providedStr;
  const dictionary: Set<string> = new Set<string>(favSet);
  const cache: Map<string, number> = new Map<string, number>();

  const processSourceStr = (subStr: string) => {
    if (!subStr) return -1;
    if (cache.has(subStr)) return cache.get(subStr);
    let minSpaces: number = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= subStr.length; i++) {
      if (dictionary.has(subStr.substring(0, i))) {
        const suffixPossibility = processSourceStr(subStr.substring(i));
        cache.set(subStr.substring(i), suffixPossibility);
        minSpaces = Math.min(minSpaces, 1 + suffixPossibility);
        console.table({
          prefix: subStr.substring(0, i),
          suffix: subStr.substring(i),
          suffixPossibility,
          minSpaces,
        });
      }
    }

    return minSpaces;
  };
  const exec = () => processSourceStr(str);
  return { exec };
}
