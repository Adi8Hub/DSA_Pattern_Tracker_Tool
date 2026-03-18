# C# Conversion Quick Reference - Before & After Examples

## Example 1: Sliding Window - Fixed Window

### JavaScript (Before)
```javascript
function fixedWindow(arr, k) {
  let windowSum = 0, maxSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
```

### C# (After)
```csharp
public static int FixedWindow(int[] arr, int k) {
  int windowSum = 0, maxSum = 0;
  for (int i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (int i = k; i < arr.Length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.Max(maxSum, windowSum);
  }
  return maxSum;
}
```

### Key Changes
- `function` → `public static`
- `let` → `int`
- `arr.length` → `arr.Length` (capital L)
- `Math.max()` → `Math.Max()` (capital M)

---

## Example 2: Two Pointers with List Return

### JavaScript (Before)
```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) { 
        result.push([nums[i],nums[l],nums[r]]); 
        l++; r--; 
      }
      else if (sum < 0) l++;
      else r--;
    }
  }
  return result;
}
```

### C# (After)
```csharp
public static List<List<int>> ThreeSum(int[] nums) {
  Array.Sort(nums);
  var result = new List<List<int>>();
  for (int i = 0; i < nums.Length - 2; i++) {
    if (i > 0 && nums[i] == nums[i-1]) continue;
    int l = i + 1, r = nums.Length - 1;
    while (l < r) {
      int sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) { 
        result.Add(new List<int> {nums[i],nums[l],nums[r]}); 
        l++; r--; 
      }
      else if (sum < 0) l++;
      else r--;
    }
  }
  return result;
}
```

### Key Changes
- `===` → `==` (C# uses ==)
- `const` → `var`
- `.sort()` → `Array.Sort()`
- `.push()` → `.Add()`
- `[]` array literal → `new List<int> {}`
- Return type: `List<List<int>>`

---

## Example 3: BFS with Queue

### JavaScript (Before)
```javascript
function bfs(graph, start, end) {
  const queue = [[start, 0]];
  const visited = new Set([start]);
  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
}
```

### C# (After)
```csharp
public static int BFS(Dictionary<int, List<int>> graph, int start, int end) {
  var queue = new Queue<(int node, int dist)>();
  queue.Enqueue((start, 0));
  var visited = new HashSet<int> { start };
  
  while (queue.Count > 0) {
    var (node, dist) = queue.Dequeue();
    if (node == end) return dist;
    foreach (var neighbor in graph[node]) {
      if (!visited.Contains(neighbor)) {
        visited.Add(neighbor);
        queue.Enqueue((neighbor, dist + 1));
      }
    }
  }
  return -1;
}
```

### Key Changes
- `new Set([start])` → `new HashSet<int> { start }`
- `queue.shift()` → `queue.Dequeue()`
- `queue.push()` → `queue.Enqueue()`
- `queue.length` → `queue.Count`
- Tuple syntax: `(node, dist)` for pairs
- `for (const x of arr)` → `foreach (var x in graph[node])`
- Destructuring: `const [a, b]` → `var (a, b)`

---

## Example 4: HashMap/Dictionary

### JavaScript (Before)
```javascript
function variableWindow(s, k) {
  let left = 0, maxLen = 0;
  const freq = new Map();
  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);
    while (freq.size > k) {
      freq.set(s[left], freq.get(s[left]) - 1);
      if (freq.get(s[left]) === 0) freq.delete(s[left]);
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
```

### C# (After)
```csharp
public static int VariableWindow(string s, int k) {
  int left = 0, maxLen = 0;
  var freq = new Dictionary<char, int>();
  for (int right = 0; right < s.Length; right++) {
    freq[s[right]] = freq.ContainsKey(s[right]) ? freq[s[right]] + 1 : 1;
    while (freq.Count > k) {
      freq[s[left]]--;
      if (freq[s[left]] == 0) freq.Remove(s[left]);
      left++;
    }
    maxLen = Math.Max(maxLen, right - left + 1);
  }
  return maxLen;
}
```

### Key Changes
- `new Map()` → `Dictionary<char, int>`
- `freq.set(key, val)` → `freq[key] = val`
- `freq.get(key)` → `freq[key]` or `freq.ContainsKey(key) ? freq[key] : default`
- `freq.size` → `freq.Count`
- `freq.delete(key)` → `freq.Remove(key)`
- Ternary operator syntax same in both

---

## Example 5: Dynamic Programming 2D Array

### JavaScript (Before)
```javascript
function lcs(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({length: m+1}, () => Array(n+1).fill(0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = text1[i-1] === text2[j-1]
        ? dp[i-1][j-1] + 1
        : Math.max(dp[i-1][j], dp[i][j-1]);
  return dp[m][n];
}
```

### C# (After)
```csharp
public static int LCS(string text1, string text2) {
  int m = text1.Length, n = text2.Length;
  int[][] dp = new int[m + 1][];
  for (int i = 0; i <= m; i++) dp[i] = new int[n + 1];
  
  for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
      dp[i][j] = text1[i-1] == text2[j-1]
        ? dp[i-1][j-1] + 1
        : Math.Max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}
```

### Key Changes
- `Array.from()` → explicit initialization loop
- Multi-dimensional arrays: `int[][]` (jagged)
- Manual memory allocation for each row
- Explicit type declarations: `int` instead of `const`
- `===` → `==`

---

## Example 6: Class Definition - Union Find

### JavaScript (Before)
```javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = new Array(n).fill(0);
    this.components = n;
  }
  find(x) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else { this.parent[py] = px; this.rank[px]++; }
    this.components--;
    return true;
  }
}
```

### C# (After)
```csharp
public class UnionFind {
  private int[] parent;
  private int[] rank;
  public int components;
  
  public UnionFind(int n) {
    parent = new int[n];
    rank = new int[n];
    components = n;
    for (int i = 0; i < n; i++) parent[i] = i;
  }
  
  public int Find(int x) {
    if (parent[x] != x)
      parent[x] = Find(parent[x]);
    return parent[x];
  }
  
  public bool Union(int x, int y) {
    int px = Find(x), py = Find(y);
    if (px == py) return false;
    
    if (rank[px] < rank[py]) parent[px] = py;
    else if (rank[px] > rank[py]) parent[py] = px;
    else { 
      parent[py] = px; 
      rank[px]++; 
    }
    components--;
    return true;
  }
}
```

### Key Changes
- `constructor()` → parameterized `public ClassName()`
- `this.property` → field with access modifier (`private`, `public`)
- `method()` → `public Type Method()` with return type
- Array initialization: explicit loop instead of `.fill()`
- Naming: `camelCase` methods → `PascalCase` methods
- `!==` → `!=`

---

## Example 7: Stack Operations - Monotonic Stack

### JavaScript (Before)
```javascript
function nextGreater(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length-1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
```

### C# (After)
```csharp
public static int[] NextGreater(int[] nums) {
  var result = new int[nums.Length];
  for (int i = 0; i < nums.Length; i++) result[i] = -1;
  var stack = new Stack<int>();
  
  for (int i = 0; i < nums.Length; i++) {
    while (stack.Count > 0 && nums[stack.Peek()] < nums[i]) {
      result[stack.Pop()] = nums[i];
    }
    stack.Push(i);
  }
  return result;
}
```

### Key Changes
- `const stack = []` → `var stack = new Stack<int>()`
- `stack.push()` → `stack.Push()`
- `stack.pop()` → `stack.Pop()`
- `stack[stack.length-1]` → `stack.Peek()`
- `stack.length` → `stack.Count`

---

## Quick Conversion Cheat Sheet

| Concept | JavaScript | C# |
|---------|-----------|-----|
| **Dynamic Array** | `const arr = []` | `var list = new List<int>()` |
| **Fixed Array** | `const arr = new Array(n)` | `int[] arr = new int[n]` |
| **Dictionary/Map** | `const map = new Map()` | `var dict = new Dictionary<K, V>()` |
| **Set** | `const set = new Set()` | `var set = new HashSet<T>()` |
| **Queue** | Array with `.shift()` | `Queue<T>` with `.Dequeue()` |
| **Stack** | Array with `.pop()` | `Stack<T>` with `.Pop()` |
| **Add to collection** | `.push()` | `.Add()` |
| **Remove** | `.pop()`, `.splice()` | `.RemoveAt()`, `.Remove()` |
| **Length** | `.length` | `.Length` or `.Count` |
| **Loop** | `for (let i = 0; ...)` | `for (int i = 0; ...)` |
| **Foreach** | `for (const x of arr)` | `foreach (var x in collection)` |
| **Ternary** | `a ? b : c` | `a ? b : c` |
| **Comparison** | `===` / `!==` | `==` / `!=` |
| **Casting** | `(int)value` | `(int)value` |
| **Null check** | `obj == null` | `obj == null` |

---

## Testing in C#

All templates can be tested directly in:
- **LeetCode** (C# support)
- **HackerRank** (C# support)
- **Visual Studio** (Console Application)
- **Visual Studio Code** with C# extension

### Template for LeetCode Testing
```csharp
public class Solution {
    public int[] YourMethod(int[] nums) {
        // Paste your DSA pattern code here
        return result;
    }
}
```

---

## Common Pitfalls & Fixes

| Issue | Fix |
|-------|-----|
| `Cannot use `.length` on array` | Use `.Length` (capital L) |
| `Cannot use `.push()` on array` | Use `list.Add()` or convert to List |
| `Type mismatch: expected T[][]` | Use jagged arrays or rectangular arrays |
| `Cannot use `===` in C#` | Use `==` instead |
| `Dictionary key not found` | Check with `.ContainsKey()` before accessing |
| `Null reference exception` | Add null checks or use `?.` operator |

---

## Summary

✅ All 14 patterns have been converted from JavaScript to C#  
✅ Syntax follows C# conventions (PascalCase, type annotations)  
✅ Functionality preserved, only implementation details changed  
✅ Ready to use in LeetCode, Visual Studio, or any C# environment  

**Happy coding! 🚀**
