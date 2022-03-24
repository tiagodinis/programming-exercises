// Problem: https://leetcode.com/problems/minimum-index-sum-of-two-lists/

function findRestaurant(list1: string[], list2: string[]): string[] {
  let best: { restaurant: string; sum: number }[] = [];
  const map = new Map<string, number>();

  for (let i = 0; i < list1.length; i++) map.set(list1[i], i);

  for (let i = 0; i < list2.length; i++) {
    const val = map.get(list2[i]);
    if (val !== undefined) {
      const sum = val + i;
      if (!best.length || sum < best[0].sum)
        best = [{ restaurant: list2[i], sum: sum }];
      else if (sum === best[0].sum)
        best.push({ restaurant: list2[i], sum: sum });
    }
  }

  return best.map((b) => b.restaurant);
}
