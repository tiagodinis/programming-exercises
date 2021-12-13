// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

function fisherYatesShuffle(arr: any[]) {
  for (let i = arr.length - 1; i > 0; --i) {
    let j = Math.trunc(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
