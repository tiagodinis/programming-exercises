// Problem: https://leetcode.com/problems/baseball-game/

function calPoints(ops: string[]): number {
  let record: number[] = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+")
      record.push(record[record.length - 1] + record[record.length - 2]);
    else if (ops[i] === "D") record.push(record[record.length - 1] * 2);
    else if (ops[i] === "C") record.pop();
    else record.push(Number(ops[i]));
  }

  let sum = 0;
  for (let i = 0; i < record.length; i++) sum += record[i];
  return sum;
}
