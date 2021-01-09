export const circularShift = (str: string, left: number, right: number) => {
  let shiftedStr: string = str;
  if (str.length) {
    const absoluteShift = (left - right) % str.length;
    if (absoluteShift) {
      shiftedStr = shiftedStr =
        str.slice(absoluteShift) + str.slice(0, absoluteShift);
    }
  }
  return shiftedStr;
};

/** 
 * Implementation without helper function
 * @example
 export const circularShift = (str: string, left: number, right: number) => {
  let shiftedStr: string = str;
  const shiftLeft = (str: string, shift: number) =>
    str.substr(shift) + str.substr(0, shift);

  const shiftRight = (str: string, shift: number) =>
    str.substr(str.length - shift) + str.substr(0, str.length - shift);
  const absoluteShift = (left - right) % str.length;
  if (absoluteShift) {
    shiftedStr =
      absoluteShift < 0
        ? shiftRight(str, Math.abs(absoluteShift))
        : shiftLeft(str, Math.abs(absoluteShift));
    }
  return shiftedStr;
  };
 *
 *
*/
