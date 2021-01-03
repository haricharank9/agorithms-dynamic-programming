import { calculateMinSpaces } from "./calculate-min-spaces";

const calculate = calculateMinSpaces("abgawed", [
  "abgaw",
  "a",
  "bg",
  "ed",
  "w",
  "awed",
]);
console.log(calculate.exec());
