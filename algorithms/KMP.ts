// https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

function getSubStrStartPos(str: string, subStr: string): number {
  if (!subStr.length) return 0;

  let table = getPartialMatchTable(subStr);

  for (let i = 0, j = 0; i < str.length; ++i) {
    j = table[Math.max(j - 1, 0)];
    for (; subStr[j] === str[i + j] && j < subStr.length; ++j);
    if (j === subStr.length) return i;
  }

  return -1;
}

function getPartialMatchTable(subStr: string): number[] {
  let table = Array(subStr.length).fill(0);
  for (let i = 1, j = 0; i < subStr.length; ) {
    if (subStr[i] === subStr[j]) table[i++] = j++ + 1;
    else {
      if (j === 0) table[i++] = 0;
      else j = table[j - 1];
    }
  }

  return table;
}
