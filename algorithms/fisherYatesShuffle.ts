// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

// Shuffle array in-place
function fisherYatesShuffle(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randI = Math.trunc(Math.random() * (i + 1));
    [arr[i], arr[randI]] = [arr[randI], arr[i]];
  }

  return arr;
}

// Construct shuffled copy of array
function fisherYatesShuffleInsideOut(arr: any[]): any[] {
  let res = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let randI = Math.trunc(Math.random() * (i + 1));
    if (randI !== i) res[i] = res[randI];
    res[randI] = arr[i];
  }

  return res;
}
