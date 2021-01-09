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
