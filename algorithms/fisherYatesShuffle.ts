// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

function fisherYatesShuffle(arr: any[]) {
  for (let i = arr.length - 1; i > 0; --i) {
    let j = Math.trunc(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function insideOut(arr: any[]): any[] {
  let res: any[] = [1, 2, 3];

  for (let i = 0; i < arr.length; ++i) {
    let j = Math.trunc(Math.random() * (i + 1));
    if (i !== j) res[i] = res[j];
    res[j].push(arr[i]);
  }

  return res;
}
