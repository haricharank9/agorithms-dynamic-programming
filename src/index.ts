import * as readLine from "readline";
import { dynamicFactory } from "./utils/dynamic-factory";

const { stdin, stdout, exit } = process;
const rl = readLine.createInterface(stdin, stdout);
rl.question(
  "Please select which program you want to execute\n1.\tCalculate Minimum Spaces\n2.\tCreate Linked List\n3.\tCalculate String Circular Shift\n",
  (input: string) => {
    console.log("Input Received:", input);
    console.log("Output:");
    dynamicFactory(parseInt(input));
    rl.close();
  }
);

rl.on("close", () => {
  exit(0);
});
