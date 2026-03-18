
import { useState, useRef } from "react";

const patterns = [
  {
    id: 1,
    name: "Sliding Window",
    emoji: "🪟",
    rank: "⭐ Most Common",
    color: "#00D4FF",
    bg: "#00D4FF15",
    border: "#00D4FF40",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1) or O(k)",
    identify: [
      "Contiguous subarray/substring",
      "Max/min/avg of subarray of size k",
      "Longest/shortest subarray satisfying condition",
      "Keywords: 'window', 'contiguous', 'substring', 'subarray'",
    ],
    whenToUse: "Use when the problem involves a linear data structure and you need to find a contiguous range (subarray/substring) satisfying some condition. Works when brute force is O(n²) or O(n³).",
    types: ["Fixed Size Window", "Variable Size Window (Expand/Shrink)"],
    template: `// Fixed window of size k
public static int FixedWindow(int[] arr, int k) {
  int windowSum = 0, maxSum = 0;
  for (int i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (int i = k; i < arr.Length; i++) {
    windowSum += arr[i] - arr[i - k]; // slide
    maxSum = Math.Max(maxSum, windowSum);
  }
  return maxSum;
}

// Variable window (longest substring with k distinct)
public static int VariableWindow(string s, int k) {
  int left = 0, maxLen = 0;
  var freq = new Dictionary<char, int>();
  for (int right = 0; right < s.Length; right++) {
    freq[s[right]] = freq.ContainsKey(s[right]) ? freq[s[right]] + 1 : 1;
    while (freq.Count > k) {          // shrink
      freq[s[left]]--;
      if (freq[s[left]] == 0) freq.Remove(s[left]);
      left++;
    }
    maxLen = Math.Max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
    pairs: ["HashMap (for freq counts)", "Two Pointers", "Prefix Sum"],
    problems: ["Longest Substring Without Repeating", "Min Window Substring", "Max Sum Subarray of Size K", "Permutation in String"],
    trick: "When window becomes invalid → shrink from left. When valid → expand from right.",
  },
  {
    id: 2,
    name: "Two Pointers",
    emoji: "👆",
    rank: "⭐ Most Common",
    color: "#FF6B6B",
    bg: "#FF6B6B15",
    border: "#FF6B6B40",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    identify: [
      "Sorted array or can be sorted",
      "Finding pairs/triplets with target sum",
      "Palindrome checks",
      "Keywords: 'pair', 'sorted', 'in-place', 'reverse'",
    ],
    whenToUse: "Use when dealing with sorted arrays/strings and you need to find a pair or when iterating from both ends reduces O(n²) to O(n). Also great for partitioning.",
    types: ["Opposite Direction (left & right)", "Same Direction (fast & slow)", "Multiple Arrays"],
    template: `// Opposite direction: Two Sum in sorted array
public static int[] TwoSum(int[] arr, int target) {
  int left = 0, right = arr.Length - 1;
  while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) return new int[] {left, right};
    else if (sum < target) left++;
    else right--;
  }
  return new int[] {-1, -1};
}

// Same direction: Remove duplicates
public static int RemoveDups(int[] arr) {
  int slow = 0;
  for (int fast = 1; fast < arr.Length; fast++) {
    if (arr[fast] != arr[slow]) arr[++slow] = arr[fast];
  }
  return slow + 1;
}

// Three Sum
public static List<List<int>> ThreeSum(int[] nums) {
  Array.Sort(nums);
  var result = new List<List<int>>();
  for (int i = 0; i < nums.Length - 2; i++) {
    if (i > 0 && nums[i] == nums[i-1]) continue; // skip dups
    int l = i + 1, r = nums.Length - 1;
    while (l < r) {
      int sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) { 
        result.Add(new List<int> {nums[i],nums[l],nums[r]}); 
        l++; r--; 
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return result;
}`,
    pairs: ["Sorting", "Sliding Window", "Binary Search"],
    problems: ["Two Sum II", "3Sum", "Container With Most Water", "Trapping Rain Water", "Valid Palindrome"],
    trick: "Always sort first if order doesn't matter. Skip duplicates after finding a match.",
  },
  {
    id: 3,
    name: "Fast & Slow Pointers",
    emoji: "🐢🐇",
    rank: "⭐ Common",
    color: "#A8FF78",
    bg: "#A8FF7815",
    border: "#A8FF7840",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    identify: [
      "Cycle detection in linked list/array",
      "Finding middle of linked list",
      "Keywords: 'cycle', 'loop', 'circular', 'middle'",
      "Happy number / repeated sequence detection",
    ],
    whenToUse: "Use with linked lists to detect cycles, find middle nodes, or detect where a cycle starts. Floyd's algorithm is the classic implementation.",
    types: ["Cycle Detection", "Find Middle", "Find Cycle Start"],
    template: `// ListNode definition
public class ListNode {
  public int val;
  public ListNode next;
  public ListNode(int val = 0, ListNode next = null) {
    this.val = val;
    this.next = next;
  }
}

// Detect cycle (Floyd's)
public static bool HasCycle(ListNode head) {
  ListNode slow = head, fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
}

// Find cycle start
public static ListNode DetectCycle(ListNode head) {
  ListNode slow = head, fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      slow = head; // reset slow to head
      while (slow != fast) { 
        slow = slow.next; 
        fast = fast.next; 
      }
      return slow; // cycle start
    }
  }
  return null;
}

// Find middle of linked list
public static ListNode FindMiddle(ListNode head) {
  ListNode slow = head, fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // middle node
}`,
    pairs: ["Linked List reversal", "Two Pointers"],
    problems: ["Linked List Cycle", "Find Duplicate Number", "Happy Number", "Middle of Linked List", "Palindrome Linked List"],
    trick: "When fast meets slow → cycle exists. Reset one to head → they meet at cycle start.",
  },
  {
    id: 4,
    name: "Binary Search",
    emoji: "🔍",
    rank: "⭐ Most Common",
    color: "#FFD700",
    bg: "#FFD70015",
    border: "#FFD70040",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    identify: [
      "Sorted array or monotonic function",
      "'Find target / minimum / maximum' in sorted space",
      "Keywords: 'sorted', 'rotated', 'log n', 'search'",
      "Answer lies in a range you can binary search on",
    ],
    whenToUse: "Use whenever the search space is sorted OR when you can define a condition that is monotonically true/false (binary search on answer). Rotated sorted arrays are a classic variant.",
    types: ["Classic Binary Search", "Find First/Last Position", "Search on Answer", "Rotated Array"],
    template: `// Classic binary search
public static int BinarySearch(int[] arr, int target) {
  int lo = 0, hi = arr.Length - 1;
  while (lo <= hi) {
    int mid = lo + ((hi - lo) >> 1); // avoid overflow
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

// Search on Answer (minimize max, maximize min)
public static int MinDays(int[] blooms, int m, int k) {
  int lo = 1, hi = blooms.Max(), ans = -1;
  while (lo <= hi) {
    int mid = (lo + hi) >> 1;
    if (IsFeasible(mid, blooms, m, k)) { 
      ans = mid; 
      hi = mid - 1; 
    } else lo = mid + 1;
  }
  return ans;
}

private static bool IsFeasible(int day, int[] blooms, int m, int k) {
  // check if possible to get m bouquets with k flowers each by day
  return true;
}

// Rotated sorted array
public static int SearchRotated(int[] nums, int target) {
  int lo = 0, hi = nums.Length - 1;
  while (lo <= hi) {
    int mid = (lo + hi) >> 1;
    if (nums[mid] == target) return mid;
    if (nums[lo] <= nums[mid]) { // left half sorted
      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else { // right half sorted
      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}`,
    pairs: ["Two Pointers", "Greedy (search on answer)", "Divide & Conquer"],
    problems: ["Binary Search", "Search in Rotated Array", "Find Minimum in Rotated Array", "Koko Eating Bananas", "Median of Two Sorted Arrays"],
    trick: "lo + (hi - lo) / 2 prevents overflow. For 'first true', shrink right when true. For 'last true', shrink left when false.",
  },
  {
    id: 5,
    name: "BFS (Breadth-First Search)",
    emoji: "🌊",
    rank: "⭐ Most Common",
    color: "#FF9F43",
    bg: "#FF9F4315",
    border: "#FF9F4340",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    identify: [
      "Shortest path in unweighted graph",
      "Level-order traversal",
      "Keywords: 'shortest', 'minimum steps', 'level', 'nearest'",
      "State-space search (word ladder, sliding puzzle)",
    ],
    whenToUse: "Use BFS when you need shortest path in an unweighted graph, level-by-level processing, or when the answer is 'how many steps to reach'. BFS guarantees shortest path.",
    types: ["Graph BFS", "Tree Level Order", "Multi-source BFS", "0-1 BFS"],
    template: `// Standard BFS (shortest path)
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

// Multi-source BFS (e.g., 01 Matrix - distance from 0)
public static int[][] MultiSourceBFS(int[][] grid) {
  var queue = new Queue<(int r, int c)>();
  int rows = grid.Length, cols = grid[0].Length;
  int[][] dist = new int[rows][];
  for (int i = 0; i < rows; i++) {
    dist[i] = new int[cols];
    for (int j = 0; j < cols; j++) dist[i][j] = int.MaxValue;
  }
  
  for (int i = 0; i < rows; i++)
    for (int j = 0; j < cols; j++)
      if (grid[i][j] == 0) { dist[i][j] = 0; queue.Enqueue((i, j)); }
  
  int[][] dirs = new int[][] { new int[] {0,1}, new int[] {0,-1}, 
                                new int[] {1,0}, new int[] {-1,0} };
  while (queue.Count > 0) {
    var (r, c) = queue.Dequeue();
    foreach (var dir in dirs) {
      int nr = r + dir[0], nc = c + dir[1];
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols 
          && dist[nr][nc] > dist[r][c] + 1) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.Enqueue((nr, nc));
      }
    }
  }
  return dist;
}`,
    pairs: ["HashMap (visited set)", "DFS (when path doesn't matter)", "Dijkstra (weighted graphs)"],
    problems: ["Binary Tree Level Order", "Word Ladder", "Rotting Oranges", "Shortest Path in Binary Matrix", "Number of Islands"],
    trick: "Always mark visited BEFORE adding to queue (not after dequeue) to avoid duplicates.",
  },
  {
    id: 6,
    name: "DFS (Depth-First Search)",
    emoji: "🌲",
    rank: "⭐ Most Common",
    color: "#6C5CE7",
    bg: "#6C5CE715",
    border: "#6C5CE740",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(H) — height of tree/graph",
    identify: [
      "All paths / combinations / permutations",
      "Connected components",
      "Cycle detection in directed graphs",
      "Keywords: 'all possible', 'paths', 'combinations', 'islands'",
    ],
    whenToUse: "Use DFS for exploring all paths, backtracking, topological sort, and detecting cycles. Better than BFS for problems requiring full exploration.",
    types: ["Tree DFS", "Graph DFS", "Backtracking DFS", "Topological Sort"],
    template: `// Graph DFS (iterative)
public static void DFS(Dictionary<int, List<int>> graph, int start) {
  var stack = new Stack<int>();
  var visited = new HashSet<int>();
  stack.Push(start);
  visited.Add(start);
  
  while (stack.Count > 0) {
    int node = stack.Pop();
    foreach (var neighbor in graph[node]) {
      if (!visited.Contains(neighbor)) {
        visited.Add(neighbor);
        stack.Push(neighbor);
      }
    }
  }
}

// Backtracking DFS (all subsets)
public static List<List<int>> Subsets(int[] nums) {
  var result = new List<List<int>>();
  Backtrack(result, new List<int>(), nums, 0);
  return result;
}

private static void Backtrack(List<List<int>> result, List<int> current, 
                              int[] nums, int start) {
  result.Add(new List<int>(current));
  for (int i = start; i < nums.Length; i++) {
    current.Add(nums[i]);
    Backtrack(result, current, nums, i + 1); // explore
    current.RemoveAt(current.Count - 1);     // undo (backtrack)
  }
}

// DFS on grid (number of islands)
public static int NumIslands(char[][] grid) {
  int count = 0;
  for (int r = 0; r < grid.Length; r++) {
    for (int c = 0; c < grid[0].Length; c++) {
      if (grid[r][c] == '1') { 
        DFSGrid(grid, r, c); 
        count++; 
      }
    }
  }
  return count;
}

private static void DFSGrid(char[][] grid, int r, int c) {
  if (r < 0 || r >= grid.Length || c < 0 || c >= grid[0].Length 
      || grid[r][c] != '1') return;
  grid[r][c] = '0'; // mark visited
  DFSGrid(grid, r + 1, c);
  DFSGrid(grid, r - 1, c);
  DFSGrid(grid, r, c + 1);
  DFSGrid(grid, r, c - 1);
}`,
    pairs: ["Backtracking", "Memoization (→ DP)", "Union-Find (alternative for components)"],
    problems: ["Number of Islands", "Pacific Atlantic Water Flow", "Word Search", "Course Schedule", "All Paths from Source to Target"],
    trick: "DFS = recursive call + base case + undo for backtracking. Mark visited before recursing, unmark after (backtracking).",
  },
  {
    id: 7,
    name: "Dynamic Programming",
    emoji: "🧮",
    rank: "⭐ Most Common",
    color: "#FD79A8",
    bg: "#FD79A815",
    border: "#FD79A840",
    timeComplexity: "O(n²) or O(n·m) typically",
    spaceComplexity: "O(n) optimized",
    identify: [
      "Optimal substructure + overlapping subproblems",
      "Keywords: 'maximum', 'minimum', 'count ways', 'longest', 'can reach'",
      "Decision at each step affects future",
      "Recursion with repeated subproblems",
    ],
    whenToUse: "Use when a recursive solution has overlapping subproblems. DP = memoization (top-down) or tabulation (bottom-up). Start with recursion, add memo, then convert to tabulation.",
    types: ["1D DP (linear)", "2D DP (grid/string)", "Interval DP", "Knapsack", "State Machine DP"],
    template: `// 1D DP: Coin Change
public static int CoinChange(int[] coins, int amount) {
  var dp = new int[amount + 1];
  for (int i = 0; i <= amount; i++) dp[i] = int.MaxValue;
  dp[0] = 0;
  
  for (int i = 1; i <= amount; i++) {
    foreach (var coin in coins) {
      if (coin <= i && dp[i - coin] != int.MaxValue) {
        dp[i] = Math.Min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] == int.MaxValue ? -1 : dp[amount];
}

// 2D DP: Longest Common Subsequence
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

// Knapsack (0/1)
public static int Knapsack(int[] weights, int[] values, int W) {
  int n = weights.Length;
  int[][] dp = new int[n + 1][];
  for (int i = 0; i <= n; i++) dp[i] = new int[W + 1];
  
  for (int i = 1; i <= n; i++) {
    for (int w = 0; w <= W; w++) {
      dp[i][w] = dp[i-1][w]; // skip
      if (weights[i-1] <= w) {
        dp[i][w] = Math.Max(dp[i][w], 
                            dp[i-1][w-weights[i-1]] + values[i-1]);
      }
    }
  }
  return dp[n][W];
}`,
    pairs: ["Memoization (top-down DFS)", "Binary Search (LIS optimization)", "Greedy (when DP not needed)"],
    problems: ["Climbing Stairs", "Coin Change", "Longest Increasing Subsequence", "Edit Distance", "House Robber", "Word Break", "Unique Paths"],
    trick: "Define dp[i] clearly. Find recurrence relation. Initialize base cases. Build bottom-up or top-down. Optimize space by rolling array.",
  },
  {
    id: 8,
    name: "Backtracking",
    emoji: "↩️",
    rank: "⭐ Common",
    color: "#FDCB6E",
    bg: "#FDCB6E15",
    border: "#FDCB6E40",
    timeComplexity: "O(n! or 2ⁿ) — exponential",
    spaceComplexity: "O(n) — recursion stack",
    identify: [
      "Generate all combinations/permutations/subsets",
      "Constraint satisfaction (N-Queens, Sudoku)",
      "Keywords: 'all possible', 'generate', 'find all'",
      "Need to try all options and undo if invalid",
    ],
    whenToUse: "Use when you need to explore all possibilities with constraints. The key is: make a choice → explore → undo the choice. Add pruning to avoid invalid branches early.",
    types: ["Subsets", "Permutations", "Combinations", "Constraint Satisfaction"],
    template: `// Template: Choose → Explore → Unchoose
private static void Backtrack(List<List<int>> result, List<int> current, 
                              int[] options, int start) {
  if (start >= options.Length) { 
    result.Add(new List<int>(current)); 
    return; 
  }
  for (int i = start; i < options.Length; i++) {
    // if (pruning condition) continue;
    current.Add(options[i]);          // choose
    Backtrack(result, current, options, i + 1); // explore
    current.RemoveAt(current.Count - 1);        // unchoose
  }
}

// Permutations
public static List<List<int>> Permutations(int[] nums) {
  var result = new List<List<int>>();
  var used = new bool[nums.Length];
  PermuteHelper(result, new List<int>(), nums, used);
  return result;
}

private static void PermuteHelper(List<List<int>> result, List<int> curr, 
                                  int[] nums, bool[] used) {
  if (curr.Count == nums.Length) { 
    result.Add(new List<int>(curr)); 
    return; 
  }
  for (int i = 0; i < nums.Length; i++) {
    if (used[i]) continue;
    used[i] = true;
    curr.Add(nums[i]);
    PermuteHelper(result, curr, nums, used);
    used[i] = false;
    curr.RemoveAt(curr.Count - 1);
  }
}

// Combination Sum (reuse allowed)
public static List<List<int>> CombinationSum(int[] candidates, int target) {
  Array.Sort(candidates);
  var result = new List<List<int>>();
  CombineHelper(result, new List<int>(), candidates, target, 0);
  return result;
}

private static void CombineHelper(List<List<int>> result, List<int> curr, 
                                  int[] candidates, int remaining, int start) {
  if (remaining == 0) { 
    result.Add(new List<int>(curr)); 
    return; 
  }
  for (int i = start; i < candidates.Length; i++) {
    if (candidates[i] > remaining) break; // pruning
    curr.Add(candidates[i]);
    CombineHelper(result, curr, candidates, remaining - candidates[i], i);
    curr.RemoveAt(curr.Count - 1);
  }
}`,
    pairs: ["DFS", "DP (memoize repeated states)", "Pruning"],
    problems: ["Subsets", "Permutations", "Combination Sum", "N-Queens", "Sudoku Solver", "Word Search"],
    trick: "Sort first to enable early pruning. Skip duplicates with 'if(i > start && nums[i] === nums[i-1]) continue'.",
  },
  {
    id: 9,
    name: "Heap / Priority Queue",
    emoji: "🏔️",
    rank: "⭐ Common",
    color: "#00CEC9",
    bg: "#00CEC915",
    border: "#00CEC940",
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k)",
    identify: [
      "Top K elements (largest/smallest/frequent)",
      "Merge K sorted lists",
      "Streaming median",
      "Keywords: 'k largest', 'k smallest', 'top k', 'median'",
    ],
    whenToUse: "Use when you need repeated access to max/min elements, especially with K. Min-heap for K largest (heap size = k), Max-heap for K smallest.",
    types: ["Min-Heap (K largest)", "Max-Heap (K smallest)", "Two Heaps (median)", "Merge K Sorted"],
    template: `// C# has built-in PriorityQueue in .NET 6+
// K largest elements using min-heap of size k
public static int[] KLargest(int[] nums, int k) {
  var heap = new PriorityQueue<int, int>();
  foreach (var n in nums) {
    heap.Enqueue(n, n);
    if (heap.Count > k) heap.Dequeue();
  }
  var result = new int[k];
  for (int i = 0; i < k && heap.Count > 0; i++) {
    result[i] = heap.Dequeue();
  }
  return result;
}

// Min-Heap class (for older .NET versions)
public class MinHeap {
  private List<int> heap = new List<int>();
  
  public void Push(int val) {
    heap.Add(val);
    BubbleUp(heap.Count - 1);
  }
  
  public int Pop() {
    int min = heap[0];
    int last = heap[heap.Count - 1];
    heap.RemoveAt(heap.Count - 1);
    if (heap.Count > 0) { heap[0] = last; SinkDown(0); }
    return min;
  }
  
  public int Peek() => heap[0];
  public int Size() => heap.Count;
  
  private void BubbleUp(int i) {
    while (i > 0) {
      int p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      (heap[p], heap[i]) = (heap[i], heap[p]);
      i = p;
    }
  }
  
  private void SinkDown(int i) {
    while (true) {
      int min = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < heap.Count && heap[l] < heap[min]) min = l;
      if (r < heap.Count && heap[r] < heap[min]) min = r;
      if (min == i) break;
      (heap[min], heap[i]) = (heap[i], heap[min]);
      i = min;
    }
  }
}

// Find median with two heaps
// maxHeap (lower half) | minHeap (upper half)`,
    pairs: ["HashMap (Top K frequent)", "BFS (Dijkstra)", "Sorting (when k ≈ n)"],
    problems: ["Kth Largest Element", "Top K Frequent Elements", "Merge K Sorted Lists", "Find Median from Data Stream", "Task Scheduler"],
    trick: "K Largest → min-heap of size k. K Smallest → max-heap of size k. When heap exceeds k, pop. The root is your answer.",
  },
  {
    id: 10,
    name: "Union-Find (DSU)",
    emoji: "🔗",
    rank: "⭐ Common",
    color: "#E17055",
    bg: "#E1705515",
    border: "#E1705540",
    timeComplexity: "O(α(n)) ≈ O(1)",
    spaceComplexity: "O(n)",
    identify: [
      "Dynamic connectivity problems",
      "Number of connected components",
      "Keywords: 'connected', 'same group', 'union', 'redundant edge'",
      "Cycle detection in undirected graphs",
    ],
    whenToUse: "Use when you need to dynamically group elements and check if two elements are in the same group. Faster than BFS/DFS for repeated connectivity queries.",
    types: ["Basic DSU", "DSU with Rank + Path Compression", "Weighted DSU"],
    template: `public class UnionFind {
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
      parent[x] = Find(parent[x]); // path compression
    return parent[x];
  }
  
  public bool Union(int x, int y) {
    int px = Find(x), py = Find(y);
    if (px == py) return false; // already connected
    
    // union by rank
    if (rank[px] < rank[py]) parent[px] = py;
    else if (rank[px] > rank[py]) parent[py] = px;
    else { 
      parent[py] = px; 
      rank[px]++; 
    }
    components--;
    return true;
  }
  
  public bool Connected(int x, int y) => Find(x) == Find(y);
}

// Number of islands using DSU
public static int NumIslandsDSU(char[][] grid) {
  int rows = grid.Length, cols = grid[0].Length;
  var uf = new UnionFind(rows * cols);
  int islands = 0;
  
  for (int r = 0; r < rows; r++) {
    for (int c = 0; c < cols; c++) {
      if (grid[r][c] == '1') {
        islands++;
        // Check right and down
        if (c + 1 < cols && grid[r][c+1] == '1')
          if (uf.Union(r*cols+c, r*cols+(c+1))) islands--;
        if (r + 1 < rows && grid[r+1][c] == '1')
          if (uf.Union(r*cols+c, (r+1)*cols+c)) islands--;
      }
    }
  }
  return islands;
}`,
    pairs: ["BFS/DFS (alternative)", "Kruskal's MST", "Graph problems"],
    problems: ["Number of Islands", "Redundant Connection", "Accounts Merge", "Friend Circles", "Smallest String With Swaps"],
    trick: "Always use both path compression AND union by rank for O(α(n)). Track component count by decrementing on successful union.",
  },
  {
    id: 11,
    name: "Monotonic Stack",
    emoji: "📚",
    rank: "⭐ Common",
    color: "#B8E994",
    bg: "#B8E99415",
    border: "#B8E99440",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    identify: [
      "Next greater/smaller element",
      "Previous greater/smaller element",
      "Histogram problems (largest rectangle)",
      "Keywords: 'next greater', 'span', 'visible buildings'",
    ],
    whenToUse: "Use when you need to find, for each element, the nearest element that is greater/smaller. Stack maintains elements in monotonic order; O(n) instead of O(n²) brute force.",
    types: ["Monotonic Decreasing (next greater)", "Monotonic Increasing (next smaller)"],
    template: `// Next Greater Element
public static int[] NextGreater(int[] nums) {
  var result = new int[nums.Length];
  for (int i = 0; i < nums.Length; i++) result[i] = -1;
  var stack = new Stack<int>(); // stores indices
  
  for (int i = 0; i < nums.Length; i++) {
    // pop elements smaller than current → current is their next greater
    while (stack.Count > 0 && nums[stack.Peek()] < nums[i]) {
      result[stack.Pop()] = nums[i];
    }
    stack.Push(i);
  }
  return result; // remaining in stack have no greater element
}

// Largest Rectangle in Histogram
public static int LargestRectangle(int[] heights) {
  var stack = new Stack<int>();
  int maxArea = 0, n = heights.Length;
  
  for (int i = 0; i <= n; i++) {
    int h = i == n ? 0 : heights[i];
    while (stack.Count > 0 && heights[stack.Peek()] > h) {
      int height = heights[stack.Pop()];
      int width = stack.Count > 0 ? i - stack.Peek() - 1 : i;
      maxArea = Math.Max(maxArea, height * width);
    }
    stack.Push(i);
  }
  return maxArea;
}

// Daily Temperatures (days until warmer)
public static int[] DailyTemps(int[] temps) {
  var result = new int[temps.Length];
  var stack = new Stack<int>();
  
  for (int i = 0; i < temps.Length; i++) {
    while (stack.Count > 0 && temps[stack.Peek()] < temps[i]) {
      int idx = stack.Pop();
      result[idx] = i - idx;
    }
    stack.Push(i);
  }
  return result;
}`,
    pairs: ["Two Pointers", "DP", "Arrays"],
    problems: ["Daily Temperatures", "Next Greater Element", "Largest Rectangle in Histogram", "Trapping Rain Water", "Remove K Digits"],
    trick: "Decreasing stack → pop when current is larger (finding next greater). Increasing stack → pop when current is smaller (finding next smaller).",
  },
  {
    id: 12,
    name: "Prefix Sum",
    emoji: "➕",
    rank: "⭐ Common",
    color: "#DDA0DD",
    bg: "#DDA0DD15",
    border: "#DDA0DD40",
    timeComplexity: "O(n) preprocessing, O(1) queries",
    spaceComplexity: "O(n)",
    identify: [
      "Range sum queries",
      "Subarray sum equals k",
      "Count subarrays with condition",
      "Keywords: 'range', 'subarray sum', 'between indices'",
    ],
    whenToUse: "Use when you repeatedly query sums over ranges or need to count subarrays with a specific sum property. Prefix sum + HashMap enables O(n) for subarray sum = k.",
    types: ["1D Prefix Sum", "2D Prefix Sum", "Prefix Sum + HashMap"],
    template: `// Build prefix sum
public static int[] PrefixSum(int[] nums) {
  var prefix = new int[nums.Length + 1];
  for (int i = 0; i < nums.Length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  // sum from i to j = prefix[j+1] - prefix[i]
  return prefix;
}

// Subarray sum equals K (prefix + hashmap)
public static int SubarraySum(int[] nums, int k) {
  var map = new Dictionary<int, int> { { 0, 1 } }; // {prefixSum: count}
  int sum = 0, count = 0;
  
  foreach (int n in nums) {
    sum += n;
    // if (sum - k) exists, there's a subarray summing to k
    if (map.ContainsKey(sum - k)) {
      count += map[sum - k];
    }
    if (map.ContainsKey(sum)) map[sum]++;
    else map[sum] = 1;
  }
  return count;
}

// 2D prefix sum for matrix range queries
public static int[][] Matrix2DPrefix(int[][] matrix) {
  int m = matrix.Length, n = matrix[0].Length;
  int[][] pre = new int[m + 1][];
  for (int i = 0; i <= m; i++) pre[i] = new int[n + 1];
  
  for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
      pre[i][j] = matrix[i-1][j-1] + pre[i-1][j] 
                  + pre[i][j-1] - pre[i-1][j-1];
    }
  }
  // query(r1,c1,r2,c2) = pre[r2+1][c2+1]-pre[r1][c2+1]-pre[r2+1][c1]+pre[r1][c1]
  return pre;
}`,
    pairs: ["HashMap (prefix + map)", "Sliding Window", "Binary Search"],
    problems: ["Subarray Sum Equals K", "Range Sum Query", "Product of Array Except Self", "Continuous Subarray Sum", "Path Sum III"],
    trick: "Initialize map with {0: 1} for subarrays starting at index 0. Look for (currentSum - k) in map before adding currentSum.",
  },
  {
    id: 13,
    name: "Tries (Prefix Trees)",
    emoji: "🌿",
    rank: "📌 Specialized",
    color: "#74B9FF",
    bg: "#74B9FF15",
    border: "#74B9FF40",
    timeComplexity: "O(L) per operation — L = word length",
    spaceComplexity: "O(N·L)",
    identify: [
      "Word search / autocomplete",
      "Longest common prefix",
      "Keywords: 'dictionary', 'prefix', 'word', 'search words'",
      "XOR maximum (with binary trie)",
    ],
    whenToUse: "Use for efficient string prefix operations. Faster than sorting+binary search for prefix queries. Also powerful for XOR problems using binary trie.",
    types: ["Standard Trie", "Compressed Trie", "Binary Trie (XOR)"],
    template: `public class TrieNode {
  public Dictionary<char, TrieNode> children = new Dictionary<char, TrieNode>();
  public bool isEnd = false;
}

public class Trie {
  private TrieNode root = new TrieNode();
  
  public void Insert(string word) {
    TrieNode node = root;
    foreach (char ch in word) {
      if (!node.children.ContainsKey(ch)) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }
  
  public bool Search(string word) {
    TrieNode node = root;
    foreach (char ch in word) {
      if (!node.children.ContainsKey(ch)) return false;
      node = node.children[ch];
    }
    return node.isEnd;
  }
  
  public bool StartsWith(string prefix) {
    TrieNode node = root;
    foreach (char ch in prefix) {
      if (!node.children.ContainsKey(ch)) return false;
      node = node.children[ch];
    }
    return true;
  }
}

// Word Search II (Trie + DFS backtracking)
// Build trie of words, then DFS on grid checking trie nodes`,
    pairs: ["DFS (Word Search II)", "Backtracking", "HashMap (simpler but slower)"],
    problems: ["Implement Trie", "Word Search II", "Design Add and Search Words", "Replace Words", "Maximum XOR of Two Numbers"],
    trick: "Use children map (not array of 26) for sparse alphabets. Mark isEnd at word termination. For deletion, unmark isEnd.",
  },
  {
    id: 14,
    name: "Topological Sort",
    emoji: "📋",
    rank: "📌 Graph Specific",
    color: "#55EFC4",
    bg: "#55EFC415",
    border: "#55EFC440",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V + E)",
    identify: [
      "Task scheduling with dependencies",
      "Course prerequisites",
      "Keywords: 'order', 'prerequisite', 'dependency', 'DAG'",
      "Detect cycle in directed graph",
    ],
    whenToUse: "Use for ordering tasks with dependencies (DAG). Two approaches: Kahn's (BFS with in-degree) or DFS-based. If a cycle exists, topological sort is impossible.",
    types: ["Kahn's Algorithm (BFS)", "DFS-based"],
    template: `// Kahn's Algorithm (BFS + in-degree)
public static int[] TopoSort(int numCourses, int[][] prerequisites) {
  var graph = new List<int>[numCourses];
  for (int i = 0; i < numCourses; i++) graph[i] = new List<int>();
  
  var inDegree = new int[numCourses];
  foreach (var prereq in prerequisites) {
    graph[prereq[1]].Add(prereq[0]);
    inDegree[prereq[0]]++;
  }
  
  var queue = new Queue<int>();
  for (int i = 0; i < numCourses; i++) {
    if (inDegree[i] == 0) queue.Enqueue(i); // no dependencies
  }
  
  var order = new List<int>();
  while (queue.Count > 0) {
    int node = queue.Dequeue();
    order.Add(node);
    foreach (var neighbor in graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] == 0) queue.Enqueue(neighbor);
    }
  }
  
  return order.Count == numCourses ? order.ToArray() : new int[0]; // empty = cycle
}

// DFS-based (post-order DFS)
public static int[] TopoSortDFS(int n, int[][] edges) {
  var graph = new List<int>[n];
  for (int i = 0; i < n; i++) graph[i] = new List<int>();
  
  foreach (var edge in edges) graph[edge[0]].Add(edge[1]);
  
  var visited = new int[n]; // 0=unvisited,1=visiting,2=done
  var result = new List<int>();
  
  for (int i = 0; i < n; i++) {
    if (!DFSTopo(i, graph, visited, result)) return new int[0];
  }
  result.Reverse();
  return result.ToArray();
}

private static bool DFSTopo(int node, List<int>[] graph, int[] visited, List<int> result) {
  if (visited[node] == 1) return false; // cycle!
  if (visited[node] == 2) return true;
  visited[node] = 1;
  
  foreach (var nb in graph[node]) {
    if (!DFSTopo(nb, graph, visited, result)) return false;
  }
  visited[node] = 2;
  result.Add(node);
  return true;
}`,
    pairs: ["BFS (Kahn's)", "DFS", "Dynamic Programming on DAG"],
    problems: ["Course Schedule", "Course Schedule II", "Alien Dictionary", "Sequence Reconstruction", "Build a Matrix With Conditions"],
    trick: "If output order.length < numNodes → cycle exists. Kahn's is easier to implement. DFS-based reverses the post-order.",
  },
];

const flowchartNodes = [
  {
    id: "start",
    question: "What type of data structure?",
    options: [
      { text: "Array/List", next: "array_type" },
      { text: "String", next: "string_type" },
      { text: "Tree", next: "tree_type" },
      { text: "Graph", next: "graph_type" },
      { text: "Matrix/2D Grid", next: "matrix_type" },
    ],
    type: "decision",
  },
  {
    id: "array_type",
    question: "What's the task?",
    options: [
      { text: "Searching/Finding", next: "array_search" },
      { text: "Contiguous subarray", next: "sliding_window" },
      { text: "Pairs/Triplets", next: "sorted_check" },
      { text: "Frequency/Counting", next: "hash_map" },
    ],
    type: "decision",
  },
  {
    id: "string_type",
    question: "What do you need?",
    options: [
      { text: "Substring/pattern", next: "sliding_window" },
      { text: "Palindrome check", next: "two_pointers" },
      { text: "Generate patterns", next: "backtracking" },
      { text: "Longest sequence", next: "dp_pattern" },
    ],
    type: "decision",
  },
  {
    id: "tree_type",
    question: "What's the goal?",
    options: [
      { text: "Path/traversal", next: "dfs_pattern" },
      { text: "Level-order/distance", next: "bfs_pattern" },
      { text: "Count/aggregate", next: "dfs_pattern" },
      { text: "Shortest path", next: "bfs_pattern" },
    ],
    type: "decision",
  },
  {
    id: "graph_type",
    question: "What do you need?",
    options: [
      { text: "Shortest path (unweighted)", next: "bfs_pattern" },
      { text: "All paths/components", next: "dfs_pattern" },
      { text: "Connected components", next: "union_find" },
      { text: "Task ordering", next: "topo_sort" },
    ],
    type: "decision",
  },
  {
    id: "matrix_type",
    question: "What's the task?",
    options: [
      { text: "Path/regions", next: "dfs_pattern" },
      { text: "Distance/shortest", next: "bfs_pattern" },
      { text: "Searching", next: "binary_search" },
      { text: "Counting paths", next: "dp_pattern" },
    ],
    type: "decision",
  },
  {
    id: "array_search",
    question: "Is array sorted?",
    options: [
      { text: "Yes", next: "binary_search" },
      { text: "No, but need lookup", next: "hash_map" },
      { text: "No, but can sort", next: "sorted_check" },
    ],
    type: "decision",
  },
  {
    id: "sorted_check",
    question: "Looking for pairs?",
    options: [
      { text: "Yes (sorted)", next: "two_pointers" },
      { text: "No, just lookup", next: "hash_map" },
      { text: "Need all pairs", next: "backtracking" },
    ],
    type: "decision",
  },
  {
    id: "sliding_window",
    pattern: "Sliding Window",
    description: "Use for contiguous subarray/substring problems",
    type: "result",
  },
  {
    id: "two_pointers",
    pattern: "Two Pointers",
    description: "Use for sorted arrays, pairs, palindromes",
    type: "result",
  },
  {
    id: "binary_search",
    pattern: "Binary Search",
    description: "Use for sorted data or monotonic conditions",
    type: "result",
  },
  {
    id: "hash_map",
    pattern: "Hash Map / Hash Set",
    description: "Use for frequency, grouping, lookups",
    type: "result",
  },
  {
    id: "dfs_pattern",
    pattern: "DFS / Backtracking",
    description: "Use for all paths, components, exploration",
    type: "result",
  },
  {
    id: "bfs_pattern",
    pattern: "BFS",
    description: "Use for shortest path, level-order, nearest",
    type: "result",
  },
  {
    id: "dp_pattern",
    pattern: "Dynamic Programming",
    description: "Use for optimization with overlapping subproblems",
    type: "result",
  },
  {
    id: "union_find",
    pattern: "Union-Find",
    description: "Use for dynamic connectivity, components",
    type: "result",
  },
  {
    id: "topo_sort",
    pattern: "Topological Sort",
    description: "Use for dependency ordering, prerequisites",
    type: "result",
  },
];

const cheatData = [
  { pattern: "Sliding Window", keySignal: "contiguous subarray/substring", timeHint: "O(n)", bestFor: "Max/min in subarray of size k" },
  { pattern: "Two Pointers", keySignal: "sorted array + pair/triplet", timeHint: "O(n)", bestFor: "Pair sums, palindromes, partitioning" },
  { pattern: "Fast & Slow", keySignal: "cycle / middle of list", timeHint: "O(n)", bestFor: "Linked list cycle detection" },
  { pattern: "Binary Search", keySignal: "sorted / monotonic + find min/max", timeHint: "O(log n)", bestFor: "Searching, search on answer" },
  { pattern: "BFS", keySignal: "shortest path / level order / nearest", timeHint: "O(V+E)", bestFor: "Unweighted shortest path" },
  { pattern: "DFS", keySignal: "all paths / components / backtracking", timeHint: "O(V+E)", bestFor: "Explore all options, cycles" },
  { pattern: "Dynamic Programming", keySignal: "optimal + overlapping subproblems", timeHint: "O(n²)", bestFor: "Count ways, max/min with decisions" },
  { pattern: "Backtracking", keySignal: "generate all / constraint + undo", timeHint: "O(2ⁿ)", bestFor: "All subsets, permutations, N-queens" },
  { pattern: "Heap", keySignal: "top K / streaming / merge sorted", timeHint: "O(n log k)", bestFor: "K largest/smallest, median" },
  { pattern: "Union-Find", keySignal: "connectivity / same group / cycle", timeHint: "O(α(n))", bestFor: "Dynamic connected components" },
  { pattern: "Monotonic Stack", keySignal: "next greater/smaller / histogram", timeHint: "O(n)", bestFor: "NGE, span, histogram area" },
  { pattern: "Prefix Sum", keySignal: "range sum / subarray sum = k", timeHint: "O(n)", bestFor: "Range queries, subarray count" },
  { pattern: "Trie", keySignal: "prefix search / word dictionary", timeHint: "O(L)", bestFor: "Autocomplete, word search" },
  { pattern: "Topological Sort", keySignal: "dependency order / DAG / prerequisites", timeHint: "O(V+E)", bestFor: "Task scheduling, course order" },
];

export default function DSACheatsheet() {
  const [active, setActive] = useState(patterns[0]);
  const [tab, setTab] = useState("identify");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("patterns"); // patterns | cheatsheet | flowchart
  const [copied, setCopied] = useState(false);
  const [currentNode, setCurrentNode] = useState("start");

  const filtered = patterns.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.problems.some(pr => pr.toLowerCase().includes(search.toLowerCase()))
  );

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getNode = (nodeId) => flowchartNodes.find(n => n.id === nodeId);
  const currentFlowNode = getNode(currentNode);
  
  const handleFlowchartChoice = (nextNodeId) => {
    setCurrentNode(nextNodeId);
  };
  
  const handleFlowchartResultClick = (patternName) => {
    const patternObj = patterns.find(p => p.name === patternName);
    if (patternObj) {
      setActive(patternObj);
      setView("patterns");
      setTab("identify");
    }
  };
  
  const resetFlowchart = () => {
    setCurrentNode("start");
  };

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      background: "#0D1117",
      minHeight: "100vh",
      color: "#E6EDF3",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #161B22 0%, #0D1117 100%)",
        borderBottom: "1px solid #30363D",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <div>
          <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 3, marginBottom: 4 }}>GOOGLE SWE L4 PREP</div>
          <div style={{ fontSize: 22, fontWeight: 700, background: "linear-gradient(90deg, #58A6FF, #79C0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            DSA Patterns Cheatsheet
          </div>
          <div style={{ fontSize: 11, color: "#8B949E", marginTop: 3 }}>14 patterns · identification · templates · pairings</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["patterns", "flowchart", "cheatsheet"].map(v => (
            <button key={v} onClick={() => {
              setView(v);
              if (v === "flowchart") resetFlowchart();
            }} style={{
              padding: "8px 18px",
              borderRadius: 6,
              border: `1px solid ${view === v ? "#58A6FF" : "#30363D"}`,
              background: view === v ? "#58A6FF20" : "transparent",
              color: view === v ? "#58A6FF" : "#8B949E",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "inherit",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              {v === "patterns" ? "📘 Patterns" : v === "flowchart" ? "🌳 Flowchart" : "📋 Cheatsheet"}
            </button>
          ))}
        </div>
      </div>

      {view === "cheatsheet" ? (
        // CHEATSHEET VIEW
        <div style={{ padding: "32px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 24, fontSize: 13, color: "#8B949E" }}>Quick reference — scan before your interview</div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: "#161B22" }}>
                  {["Pattern", "Identify When You See", "Time", "Best For", "Key Trick"].map(h => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8B949E", fontWeight: 600, borderBottom: "1px solid #30363D", letterSpacing: 1, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cheatData.map((row, i) => {
                  const p = patterns.find(p => p.name.startsWith(row.pattern.split(" ")[0]));
                  return (
                    <tr key={i} style={{ borderBottom: "1px solid #21262D", cursor: "pointer" }}
                      onClick={() => { const found = patterns.find(x => x.name.startsWith(row.pattern.split(" ")[0])); if (found) { setActive(found); setView("patterns"); setTab("identify"); }}}
                      onMouseEnter={e => e.currentTarget.style.background = "#161B22"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{ color: p?.color || "#58A6FF", fontWeight: 700 }}>{p?.emoji} {row.pattern}</span>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#C9D1D9" }}>{row.keySignal}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{ background: "#1F6FEB20", color: "#79C0FF", padding: "2px 8px", borderRadius: 4, fontSize: 11 }}>{row.timeHint}</span>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#8B949E" }}>{row.bestFor}</td>
                      <td style={{ padding: "12px 16px", color: "#C9D1D9", fontSize: 11 }}>
                        {p?.trick?.substring(0, 70)}...
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pattern Pairing Matrix */}
          <div style={{ marginTop: 48 }}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: "#E6EDF3" }}>🔀 Pattern Pairing Guide</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {patterns.map(p => (
                <div key={p.id} style={{ background: "#161B22", border: `1px solid ${p.border}`, borderRadius: 8, padding: 16 }}>
                  <div style={{ color: p.color, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>{p.emoji} {p.name}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.pairs.map((pair, i) => (
                      <span key={i} style={{ background: "#21262D", color: "#8B949E", padding: "3px 8px", borderRadius: 4, fontSize: 11 }}>+ {pair}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // PATTERNS VIEW
        <div style={{ display: "flex", height: "calc(100vh - 90px)" }}>
          {/* Sidebar */}
          <div style={{
            width: 240,
            borderRight: "1px solid #21262D",
            background: "#0D1117",
            overflowY: "auto",
            flexShrink: 0,
          }}>
            <div style={{ padding: "12px 12px 8px" }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search patterns..."
                style={{
                  width: "100%",
                  background: "#161B22",
                  border: "1px solid #30363D",
                  borderRadius: 6,
                  padding: "7px 10px",
                  color: "#E6EDF3",
                  fontSize: 12,
                  fontFamily: "inherit",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            {filtered.map(p => (
              <div key={p.id}
                onClick={() => { setActive(p); setTab("identify"); }}
                style={{
                  padding: "10px 14px",
                  cursor: "pointer",
                  background: active.id === p.id ? `${p.color}15` : "transparent",
                  borderLeft: active.id === p.id ? `3px solid ${p.color}` : "3px solid transparent",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => { if (active.id !== p.id) e.currentTarget.style.background = "#161B22"; }}
                onMouseLeave={e => { if (active.id !== p.id) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14 }}>{p.emoji}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: active.id === p.id ? 700 : 500, color: active.id === p.id ? p.color : "#C9D1D9" }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: "#8B949E", marginTop: 1 }}>{p.rank}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
            {/* Pattern Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: active.color, marginBottom: 4 }}>
                  {active.emoji} {active.name}
                </div>
                <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1 }}>{active.rank}</div>
              </div>
              <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                <div style={{ textAlign: "center", background: "#161B22", border: "1px solid #30363D", borderRadius: 8, padding: "8px 16px" }}>
                  <div style={{ fontSize: 10, color: "#8B949E", letterSpacing: 1 }}>TIME</div>
                  <div style={{ fontSize: 12, color: "#79C0FF", fontWeight: 700, marginTop: 3 }}>{active.timeComplexity}</div>
                </div>
                <div style={{ textAlign: "center", background: "#161B22", border: "1px solid #30363D", borderRadius: 8, padding: "8px 16px" }}>
                  <div style={{ fontSize: 10, color: "#8B949E", letterSpacing: 1 }}>SPACE</div>
                  <div style={{ fontSize: 12, color: "#56D364", fontWeight: 700, marginTop: 3 }}>{active.spaceComplexity}</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 4, borderBottom: "1px solid #21262D", marginBottom: 20 }}>
              {[
                { key: "identify", label: "🔍 Identify" },
                { key: "template", label: "💻 Template" },
                { key: "pairs", label: "🔀 Pairs" },
                { key: "problems", label: "🎯 Problems" },
              ].map(t => (
                <button key={t.key} onClick={() => setTab(t.key)} style={{
                  padding: "8px 16px",
                  background: "transparent",
                  border: "none",
                  borderBottom: tab === t.key ? `2px solid ${active.color}` : "2px solid transparent",
                  color: tab === t.key ? active.color : "#8B949E",
                  cursor: "pointer",
                  fontSize: 12,
                  fontFamily: "inherit",
                  fontWeight: tab === t.key ? 700 : 400,
                  marginBottom: -1,
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {tab === "identify" && (
              <div>
                <div style={{ background: `${active.color}10`, border: `1px solid ${active.border}`, borderRadius: 8, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: active.color, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>WHEN TO USE</div>
                  <div style={{ fontSize: 13, color: "#C9D1D9", lineHeight: 1.7 }}>{active.whenToUse}</div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 12 }}>🚦 IDENTIFICATION SIGNALS</div>
                  {active.identify.map((sig, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: active.color, fontSize: 14, marginTop: 1 }}>▸</span>
                      <span style={{ fontSize: 13, color: "#C9D1D9" }}>{sig}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 12 }}>📦 VARIANTS</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {active.types.map((t, i) => (
                      <span key={i} style={{ background: "#161B22", border: `1px solid ${active.border}`, color: active.color, padding: "5px 12px", borderRadius: 6, fontSize: 12 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ background: "#1C2128", border: "1px solid #30363D", borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 11, color: "#F0883E", fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>💡 KEY TRICK</div>
                  <div style={{ fontSize: 13, color: "#C9D1D9", lineHeight: 1.7 }}>{active.trick}</div>
                </div>
              </div>
            )}

            {tab === "template" && (
              <div>
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#161B22", borderRadius: "8px 8px 0 0", padding: "10px 16px", border: "1px solid #30363D", borderBottom: "none" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      {["#FF5F57", "#FFBD2E", "#28C940"].map((c, i) => (
                        <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                      ))}
                      <span style={{ fontSize: 11, color: "#8B949E", marginLeft: 8 }}>{active.name} · C#</span>
                    </div>
                    <button onClick={() => copy(active.template)} style={{
                      background: copied ? "#56D36420" : "#21262D",
                      border: `1px solid ${copied ? "#56D364" : "#30363D"}`,
                      color: copied ? "#56D364" : "#8B949E",
                      padding: "4px 12px",
                      borderRadius: 5,
                      cursor: "pointer",
                      fontSize: 11,
                      fontFamily: "inherit",
                    }}>
                      {copied ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                  <pre style={{
                    background: "#0D1117",
                    border: "1px solid #30363D",
                    borderRadius: "0 0 8px 8px",
                    padding: 20,
                    overflowX: "auto",
                    fontSize: 12,
                    lineHeight: 1.7,
                    color: "#C9D1D9",
                    margin: 0,
                    whiteSpace: "pre",
                  }}>
                    {active.template.split("\n").map((line, i) => {
                      const colored = line
                        .replace(/(\/\/.*)/g, '<span style="color:#8B949E">$1</span>')
                        .replace(/\b(function|const|let|var|return|while|for|if|else|of|new|class|this|true|false|null)\b/g, '<span style="color:#FF7B72">$1</span>')
                        .replace(/\b(\d+)\b/g, '<span style="color:#79C0FF">$1</span>');
                      return <div key={i} dangerouslySetInnerHTML={{ __html: colored }} />;
                    })}
                  </pre>
                </div>
              </div>
            )}

            {tab === "pairs" && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 16 }}>🔀 PAIRS WITH</div>
                  {active.pairs.map((pair, i) => {
                    const related = patterns.find(p => p.name.toLowerCase().includes(pair.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "")));
                    return (
                      <div key={i} style={{
                        background: "#161B22",
                        border: "1px solid #21262D",
                        borderRadius: 8,
                        padding: "14px 16px",
                        marginBottom: 10,
                        cursor: related ? "pointer" : "default",
                      }}
                        onClick={() => related && (setActive(related), setTab("identify"))}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 16 }}>{related?.emoji || "🔧"}</span>
                          <div>
                            <div style={{ fontSize: 13, color: related?.color || "#58A6FF", fontWeight: 600 }}>{pair}</div>
                            {related && <div style={{ fontSize: 11, color: "#8B949E", marginTop: 2 }}>Click to view pattern →</div>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ background: "#1C2128", border: "1px solid #30363D", borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 11, color: "#FDCB6E", fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>⚡ COMBINATION INSIGHT</div>
                  <div style={{ fontSize: 12, color: "#C9D1D9", lineHeight: 1.7 }}>
                    <strong style={{ color: active.color }}>{active.name}</strong> often combines with <strong style={{ color: "#FDCB6E" }}>{active.pairs[0]}</strong> to solve the most common Google interview problems. Study both patterns and look for opportunities to apply them together.
                  </div>
                </div>
              </div>
            )}

            {tab === "problems" && (
              <div>
                <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 16 }}>🎯 MUST-SOLVE PROBLEMS</div>
                {active.problems.map((prob, i) => (
                  <div key={i} style={{
                    background: "#161B22",
                    border: "1px solid #21262D",
                    borderRadius: 8,
                    padding: "12px 16px",
                    marginBottom: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: `${active.color}20`,
                      color: active.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, flexShrink: 0,
                    }}>{i + 1}</span>
                    <span style={{ fontSize: 13, color: "#C9D1D9" }}>{prob}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20, background: `${active.color}10`, border: `1px solid ${active.border}`, borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 11, color: active.color, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>📝 STUDY ORDER</div>
                  <div style={{ fontSize: 12, color: "#C9D1D9", lineHeight: 1.6 }}>
                    Solve in order shown. First 2–3 are foundational. Last 1–2 are Google-hard variants that combine this pattern with others.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : view === "flowchart" ? (
        // FLOWCHART VIEW
        <div style={{
          padding: "32px",
          maxWidth: 1000,
          margin: "0 auto",
          minHeight: "100vh",
        }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, background: "linear-gradient(90deg, #58A6FF, #79C0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              🌳 Decision Flowchart
            </div>
            <div style={{ fontSize: 13, color: "#8B949E", lineHeight: 1.7 }}>
              Answer questions step by step to identify the right pattern for your problem. This flowchart guides you through the decision-making process.
            </div>
          </div>

          {currentFlowNode && (
            <div style={{
              background: "#161B22",
              border: "2px solid #30363D",
              borderRadius: 12,
              padding: "32px",
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              {currentFlowNode.type === "decision" ? (
                <>
                  <div>
                    <div style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#79C0FF",
                      marginBottom: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}>
                      <span>❓</span>
                      {currentFlowNode.question}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {currentFlowNode.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleFlowchartChoice(option.next)}
                          style={{
                            padding: "16px 20px",
                            background: "#1C2128",
                            border: "2px solid #30363D",
                            borderRadius: 8,
                            color: "#E6EDF3",
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.2s",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "#21262D";
                            e.currentTarget.style.borderColor = "#58A6FF";
                            e.currentTarget.style.color = "#58A6FF";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "#1C2128";
                            e.currentTarget.style.borderColor = "#30363D";
                            e.currentTarget.style.color = "#E6EDF3";
                          }}
                        >
                          <span style={{ fontSize: 16 }}>→</span>
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {currentNode !== "start" && (
                    <button
                      onClick={resetFlowchart}
                      style={{
                        padding: "10px 16px",
                        background: "#1C2128",
                        border: "1px solid #30363D",
                        borderRadius: 6,
                        color: "#8B949E",
                        fontSize: 12,
                        cursor: "pointer",
                        marginTop: 24,
                        alignSelf: "flex-start",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "#21262D";
                        e.currentTarget.style.color = "#E6EDF3";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "#1C2128";
                        e.currentTarget.style.color = "#8B949E";
                      }}
                    >
                      ↺ Start Over
                    </button>
                  )}
                </>
              ) : (
                <>
                  <div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 24,
                    }}>
                      <div style={{
                        width: 60,
                        height: 60,
                        borderRadius: 8,
                        background: "#56D364",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                      }}>
                        ✓
                      </div>
                      <div>
                        <div style={{ fontSize: 12, color: "#8B949E", letterSpacing: 1, marginBottom: 4 }}>RECOMMENDED PATTERN</div>
                        <div style={{ fontSize: 32, fontWeight: 800, color: "#56D364" }}>
                          {currentFlowNode.pattern}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      fontSize: 14,
                      color: "#C9D1D9",
                      lineHeight: 1.8,
                      marginBottom: 24,
                      padding: "16px",
                      background: "#1C2128",
                      borderRadius: 8,
                      borderLeft: "3px solid #56D364",
                    }}>
                      {currentFlowNode.description}
                    </div>

                    {/* Show why this pattern */}
                    <div style={{
                      background: "#0D1117",
                      border: "1px solid #30363D",
                      borderRadius: 8,
                      padding: "16px",
                      marginBottom: 24,
                    }}>
                      <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 12 }}>WHY THIS PATTERN?</div>
                      <ul style={{
                        margin: 0,
                        paddingLeft: 20,
                        color: "#C9D1D9",
                        fontSize: 13,
                        lineHeight: 1.8,
                      }}>
                        {currentFlowNode.pattern === "Sliding Window" && (
                          <>
                            <li>Best for contiguous subarray/substring problems</li>
                            <li>Reduces O(n²) brute force to O(n)</li>
                            <li>Use when answer is a contiguous range</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "Two Pointers" && (
                          <>
                            <li>Works with sorted arrays for O(n) solution</li>
                            <li>Great for pairs, triplets, and palindromes</li>
                            <li>Saves space compared to hashing</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "Binary Search" && (
                          <>
                            <li>O(log n) time on sorted data</li>
                            <li>Can search on answer space</li>
                            <li>Eliminates half search space each iteration</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "Hash Map / Hash Set" && (
                          <>
                            <li>O(1) average lookup time</li>
                            <li>Perfect for frequency counting</li>
                            <li>Great for grouping and deduplication</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "DFS / Backtracking" && (
                          <>
                            <li>Explores all possible paths/combinations</li>
                            <li>Natural for tree/graph traversal</li>
                            <li>Choose-explore-unchoose pattern</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "BFS" && (
                          <>
                            <li>Guarantees shortest path (unweighted)</li>
                            <li>Level-by-level exploration</li>
                            <li>Essential for distance/nearest problems</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "Dynamic Programming" && (
                          <>
                            <li>Solves problems with overlapping subproblems</li>
                            <li>Optimal substructure present</li>
                            <li>Memoization eliminates redundant work</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "Union-Find" && (
                          <>
                            <li>O(α(n)) for dynamic connectivity</li>
                            <li>Efficient for component counting</li>
                            <li>Better than DFS for many queries</li>
                          </>
                        )}
                        {currentFlowNode.pattern === "Topological Sort" && (
                          <>
                            <li>Perfect for dependency ordering</li>
                            <li>Works on directed acyclic graphs (DAG)</li>
                            <li>Detects cycles in dependencies</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button
                      onClick={() => handleFlowchartResultClick(currentFlowNode.pattern)}
                      style={{
                        padding: "12px 24px",
                        background: "#56D364",
                        border: "none",
                        borderRadius: 6,
                        color: "#0D1117",
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "#3D8B40";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "#56D364";
                      }}
                    >
                      📖 View Pattern Details
                    </button>
                    <button
                      onClick={resetFlowchart}
                      style={{
                        padding: "12px 24px",
                        background: "transparent",
                        border: "2px solid #30363D",
                        borderRadius: 6,
                        color: "#E6EDF3",
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "#58A6FF";
                        e.currentTarget.style.color = "#58A6FF";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "#30363D";
                        e.currentTarget.style.color = "#E6EDF3";
                      }}
                    >
                      ↺ Try Another Problem
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Progress indicator */}
          <div style={{
            marginTop: 32,
            padding: "16px",
            background: "#161B22",
            borderRadius: 8,
            fontSize: 12,
            color: "#8B949E",
            textAlign: "center",
          }}>
            {currentFlowNode.type === "decision"
              ? `Step: ${currentNode === "start" ? 1 : 2} of ~3-4 questions`
              : "✓ Pattern identified! Click 'View Pattern Details' to explore."}
          </div>
        </div>
      )}
    </div>
  );
}
