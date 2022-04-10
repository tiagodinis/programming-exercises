// Problem: https://leetcode.com/problems/distribute-candies/

function distributeCandies(candyType: number[]): number {
  candyType.sort();

  const maxCandies = candyType.length / 2;
  let uniqueCandies = 1;

  for (let i = 1; i < candyType.length && uniqueCandies < maxCandies; i++) {
    if (candyType[i] !== candyType[i - 1]) uniqueCandies++;
  }

  return uniqueCandies;
}
