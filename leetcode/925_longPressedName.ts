// Problem: https://leetcode.com/problems/long-pressed-name/

function isLongPressedName(name: string, typed: string): boolean {
  for (let i = 0, j = 0; i < name.length || j < typed.length; ++j) {
    if (name[i] === typed[j]) i++;
    else if (name[i - 1] !== typed[j]) return false;
  }

  return true;
}
