import { calculateMinSpaces } from "../algorithms/calculate-min-spaces";
import { circularShift } from "../algorithms/string-circular-shift";
import { LinkedList } from "../linked-list";

export function dynamicFactory(input: number) {
  switch (input) {
    case 1:
      executeMinSpaces();
      break;

    case 2:
      executeLinkedList();
      break;

    case 3:
      executeStringCircularShift();
      break;

    default:
      console.log("Incorrect Selection");
  }
}
function executeStringCircularShift() {
  console.log(circularShift("i am circular", 3, 5));
}

function executeLinkedList() {
  const ll = new LinkedList([1, 4, 9, 43, 98]);
  console.log(ll.removeNode(4));
}

function executeMinSpaces() {
  const { exec } = calculateMinSpaces("abgawed", [
    "abgaw",
    "a",
    "bg",
    "ed",
    "w",
    "awed",
  ]);
  console.log(exec());
}
