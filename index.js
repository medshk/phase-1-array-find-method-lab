// code your solution here
const superbowlWin = (arr) => {
  const item = arr.find((item) => item.result === "W");
  if (item) return item.year;
  else return undefined;
};
