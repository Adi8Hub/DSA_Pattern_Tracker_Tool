import { useState, useEffect } from "react";

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
int FixedWindow(int[] arr, int k) {
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
int VariableWindow(string s, int k) {
    int left = 0, maxLen = 0;
    var freq = new Dictionary<char, int>();
    for (int right = 0; right < s.Length; right++) {
        freq[s[right]] = freq.GetValueOrDefault(s[right]) + 1;
        while (freq.Count > k) { // shrink
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
int[] TwoSum(int[] arr, int target) {
    int left = 0, right = arr.Length - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return new[] { left, right };
        else if (sum < target) left++;
        else right--;
    }
    return new[] { -1, -1 };
}

// Same direction: Remove duplicates
int RemoveDups(int[] arr) {
    int slow = 0;
    for (int fast = 1; fast < arr.Length; fast++) {
        if (arr[fast] != arr[slow]) arr[++slow] = arr[fast];
    }
    return slow + 1;
}

// Three Sum (Two Pointers + Sort)
IList<IList<int>> ThreeSum(int[] nums) {
    Array.Sort(nums);
    var result = new List<IList<int>>();
    for (int i = 0; i < nums.Length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue; // skip dups
        int l = i + 1, r = nums.Length - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) { result.Add(new[] { nums[i], nums[l], nums[r] }); l++; r--; }
            else if (sum < 0) l++;
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
// public class ListNode { public int val; public ListNode next; }

// Detect cycle (Floyd's)
bool HasCycle(ListNode head) {
    var slow = head; var fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}

// Find cycle start
ListNode DetectCycle(ListNode head) {
    var slow = head; var fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next; fast = fast.next.next;
        if (slow == fast) {
            slow = head; // reset slow to head
            while (slow != fast) { slow = slow.next; fast = fast.next; }
            return slow; // cycle start
        }
    }
    return null;
}

// Find middle of linked list
ListNode FindMiddle(ListNode head) {
    var slow = head; var fast = head;
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
int BinarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.Length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2; // avoid overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

// Search on Answer (minimize max, maximize min)
// "Is 'mid' a feasible answer?" → binary search on that bool
int MinDays(int[] blooms, int m, int k) {
    int lo = 1, hi = blooms.Max(), ans = -1;
    bool Feasible(int day) { /* check if possible */ return false; }
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (Feasible(mid)) { ans = mid; hi = mid - 1; }
        else lo = mid + 1;
    }
    return ans;
}

// Rotated sorted array
int SearchRotated(int[] nums, int target) {
    int lo = 0, hi = nums.Length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
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
    name: "BFS",
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
int Bfs(List<List<int>> graph, int start, int end) {
    var queue = new Queue<(int node, int dist)>();
    var visited = new HashSet<int> { start };
    queue.Enqueue((start, 0));
    while (queue.Count > 0) {
        var (node, dist) = queue.Dequeue();
        if (node == end) return dist;
        foreach (int neighbor in graph[node]) {
            if (!visited.Contains(neighbor)) {
                visited.Add(neighbor);
                queue.Enqueue((neighbor, dist + 1));
            }
        }
    }
    return -1;
}

// Multi-source BFS (e.g., 01 Matrix - distance from 0)
int[][] MultiSourceBFS(int[][] grid) {
    int rows = grid.Length, cols = grid[0].Length;
    var dist = new int[rows][];
    for (int i = 0; i < rows; i++) {
        dist[i] = new int[cols];
        Array.Fill(dist[i], int.MaxValue);
    }
    var queue = new Queue<(int r, int c)>();
    // Add all sources at distance 0
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            if (grid[i][j] == 0) { dist[i][j] = 0; queue.Enqueue((i, j)); }
    int[][] dirs = { new[]{0,1}, new[]{0,-1}, new[]{1,0}, new[]{-1,0} };
    while (queue.Count > 0) {
        var (r, c) = queue.Dequeue();
        foreach (var d in dirs) {
            int nr = r + d[0], nc = c + d[1];
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
                && dist[nr][nc] > dist[r][c] + 1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.Enqueue((nr, nc));
            }
        }
    }
    return dist;
}`,
    pairs: ["HashSet (visited)", "DFS (when path doesn't matter)", "Dijkstra (weighted graphs)"],
    problems: ["Binary Tree Level Order", "Word Ladder", "Rotting Oranges", "Shortest Path in Binary Matrix", "Number of Islands"],
    trick: "Always mark visited BEFORE adding to queue (not after dequeue) to avoid duplicates.",
  },
  {
    id: 6,
    name: "DFS",
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
void Dfs(List<List<int>> graph, int start) {
    var stack = new Stack<int>();
    var visited = new HashSet<int> { start };
    stack.Push(start);
    while (stack.Count > 0) {
        int node = stack.Pop();
        foreach (int neighbor in graph[node])
            if (!visited.Contains(neighbor)) {
                visited.Add(neighbor);
                stack.Push(neighbor);
            }
    }
}

// Backtracking DFS (all subsets)
IList<IList<int>> Subsets(int[] nums) {
    var result = new List<IList<int>>();
    void Backtrack(int start, List<int> current) {
        result.Add(new List<int>(current));
        for (int i = start; i < nums.Length; i++) {
            current.Add(nums[i]);
            Backtrack(i + 1, current); // explore
            current.RemoveAt(current.Count - 1); // undo
        }
    }
    Backtrack(0, new List<int>());
    return result;
}

// DFS on grid (number of islands)
int NumIslands(char[][] grid) {
    int count = 0;
    void Dfs(int r, int c) {
        if (r < 0 || r >= grid.Length || c < 0 || c >= grid[0].Length
            || grid[r][c] != '1') return;
        grid[r][c] = '0'; // mark visited
        Dfs(r+1,c); Dfs(r-1,c); Dfs(r,c+1); Dfs(r,c-1);
    }
    for (int r = 0; r < grid.Length; r++)
        for (int c = 0; c < grid[0].Length; c++)
            if (grid[r][c] == '1') { Dfs(r, c); count++; }
    return count;
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
int CoinChange(int[] coins, int amount) {
    var dp = new int[amount + 1];
    Array.Fill(dp, int.MaxValue);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++)
        foreach (int coin in coins)
            if (coin <= i && dp[i - coin] != int.MaxValue)
                dp[i] = Math.Min(dp[i], dp[i - coin] + 1);
    return dp[amount] == int.MaxValue ? -1 : dp[amount];
}

// 2D DP: Longest Common Subsequence
int LCS(string text1, string text2) {
    int m = text1.Length, n = text2.Length;
    var dp = new int[m + 1, n + 1];
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            dp[i, j] = text1[i-1] == text2[j-1]
                ? dp[i-1, j-1] + 1
                : Math.Max(dp[i-1, j], dp[i, j-1]);
    return dp[m, n];
}

// Knapsack (0/1)
int Knapsack(int[] weights, int[] values, int W) {
    int n = weights.Length;
    var dp = new int[n + 1, W + 1];
    for (int i = 1; i <= n; i++)
        for (int w = 0; w <= W; w++) {
            dp[i, w] = dp[i-1, w]; // skip
            if (weights[i-1] <= w)
                dp[i, w] = Math.Max(dp[i, w],
                    dp[i-1, w - weights[i-1]] + values[i-1]);
        }
    return dp[n, W];
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
void Backtrack(List<List<int>> result, List<int> current,
               int[] options, int start) {
    if (/* base case */) { result.Add(new List<int>(current)); return; }
    for (int i = start; i < options.Length; i++) {
        if (/* pruning condition */) continue;
        current.Add(options[i]);                  // choose
        Backtrack(result, current, options, i+1); // explore
        current.RemoveAt(current.Count - 1);      // unchoose
    }
}

// Permutations
IList<IList<int>> Permutations(int[] nums) {
    var result = new List<IList<int>>();
    var used = new bool[nums.Length];
    void Bt(List<int> curr) {
        if (curr.Count == nums.Length) { result.Add(new List<int>(curr)); return; }
        for (int i = 0; i < nums.Length; i++) {
            if (used[i]) continue;
            used[i] = true; curr.Add(nums[i]);
            Bt(curr);
            used[i] = false; curr.RemoveAt(curr.Count - 1);
        }
    }
    Bt(new List<int>());
    return result;
}

// Combination Sum (reuse allowed)
IList<IList<int>> CombinationSum(int[] candidates, int target) {
    Array.Sort(candidates);
    var result = new List<IList<int>>();
    void Bt(int start, List<int> curr, int remaining) {
        if (remaining == 0) { result.Add(new List<int>(curr)); return; }
        for (int i = start; i < candidates.Length; i++) {
            if (candidates[i] > remaining) break; // pruning
            curr.Add(candidates[i]);
            Bt(i, curr, remaining - candidates[i]);
            curr.RemoveAt(curr.Count - 1);
        }
    }
    Bt(0, new List<int>(), target);
    return result;
}`,
    pairs: ["DFS", "DP (memoize repeated states)", "Pruning"],
    problems: ["Subsets", "Permutations", "Combination Sum", "N-Queens", "Sudoku Solver", "Word Search"],
    trick: "Sort first to enable early pruning. Skip duplicates with 'if(i > start && nums[i] == nums[i-1]) continue'.",
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
    template: `// C# has PriorityQueue<TElement, TPriority> (.NET 6+)
// Lower priority value = higher priority (min-heap behavior)

// K largest elements using min-heap of size k
int[] KLargest(int[] nums, int k) {
    // PriorityQueue is a min-heap by default
    var minHeap = new PriorityQueue<int, int>();
    foreach (int n in nums) {
        minHeap.Enqueue(n, n);
        if (minHeap.Count > k) minHeap.Dequeue(); // keep k largest
    }
    return minHeap.UnorderedItems.Select(x => x.Element).ToArray();
}

// Top K Frequent Elements
int[] TopKFrequent(int[] nums, int k) {
    var freq = new Dictionary<int, int>();
    foreach (int n in nums) freq[n] = freq.GetValueOrDefault(n) + 1;
    // min-heap by frequency
    var heap = new PriorityQueue<int, int>();
    foreach (var (num, count) in freq) {
        heap.Enqueue(num, count);
        if (heap.Count > k) heap.Dequeue();
    }
    return heap.UnorderedItems.Select(x => x.Element).ToArray();
}

// Max-heap: negate priority for K smallest
var maxHeap = new PriorityQueue<int, int>();
maxHeap.Enqueue(val, -val); // negate to simulate max-heap

// Find median with two heaps
// maxHeap (lower half, negate) | minHeap (upper half)`,
    pairs: ["Dictionary (Top K frequent)", "BFS (Dijkstra)", "Sorting (when k ≈ n)"],
    problems: ["Kth Largest Element", "Top K Frequent Elements", "Merge K Sorted Lists", "Find Median from Data Stream", "Task Scheduler"],
    trick: "K Largest → min-heap of size k. K Smallest → max-heap of size k (negate priority). When heap exceeds k, Dequeue. The Peek() is your answer.",
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
    template: `class UnionFind {
    private int[] parent, rank;
    public int Components { get; private set; }

    public UnionFind(int n) {
        parent = Enumerable.Range(0, n).ToArray();
        rank = new int[n];
        Components = n;
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
        else { parent[py] = px; rank[px]++; }
        Components--;
        return true;
    }

    public bool Connected(int x, int y) => Find(x) == Find(y);
}

// Number of islands using DSU
int NumIslandsDSU(char[][] grid) {
    int rows = grid.Length, cols = grid[0].Length;
    var uf = new UnionFind(rows * cols);
    int islands = 0;
    int[][] dirs = { new[]{0,1}, new[]{1,0} };
    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++)
            if (grid[r][c] == '1') {
                islands++;
                foreach (var d in dirs) {
                    int nr = r+d[0], nc = c+d[1];
                    if (nr<rows && nc<cols && grid[nr][nc]=='1')
                        if (uf.Union(r*cols+c, nr*cols+nc)) islands--;
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
int[] NextGreater(int[] nums) {
    var result = new int[nums.Length];
    Array.Fill(result, -1);
    var stack = new Stack<int>(); // stores indices
    for (int i = 0; i < nums.Length; i++) {
        // pop elements smaller than current → current is their NGE
        while (stack.Count > 0 && nums[stack.Peek()] < nums[i])
            result[stack.Pop()] = nums[i];
        stack.Push(i);
    }
    return result; // remaining in stack have no greater element
}

// Largest Rectangle in Histogram
int LargestRectangle(int[] heights) {
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
int[] DailyTemps(int[] temps) {
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
    whenToUse: "Use when you repeatedly query sums over ranges or need to count subarrays with a specific sum property. Prefix sum + Dictionary enables O(n) for subarray sum = k.",
    types: ["1D Prefix Sum", "2D Prefix Sum", "Prefix Sum + HashMap"],
    template: `// Build prefix sum
int[] BuildPrefix(int[] nums) {
    var prefix = new int[nums.Length + 1];
    for (int i = 0; i < nums.Length; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    // sum from i to j = prefix[j+1] - prefix[i]
    return prefix;
}

// Subarray sum equals K (prefix + dictionary)
int SubarraySum(int[] nums, int k) {
    var map = new Dictionary<int, int> { [0] = 1 }; // {prefixSum: count}
    int sum = 0, count = 0;
    foreach (int n in nums) {
        sum += n;
        // if (sum - k) exists, there's a subarray summing to k
        count += map.GetValueOrDefault(sum - k);
        map[sum] = map.GetValueOrDefault(sum) + 1;
    }
    return count;
}

// 2D prefix sum for matrix range queries
int[,] Matrix2DPrefix(int[][] matrix) {
    int m = matrix.Length, n = matrix[0].Length;
    var pre = new int[m + 1, n + 1];
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            pre[i,j] = matrix[i-1][j-1] + pre[i-1,j] + pre[i,j-1] - pre[i-1,j-1];
    // query(r1,c1,r2,c2) = pre[r2+1,c2+1]-pre[r1,c2+1]-pre[r2+1,c1]+pre[r1,c1]
    return pre;
}`,
    pairs: ["Dictionary (prefix + map)", "Sliding Window", "Binary Search"],
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
    template: `class TrieNode {
    public Dictionary<char, TrieNode> Children = new();
    public bool IsEnd = false;
}

class Trie {
    private TrieNode root = new TrieNode();

    public void Insert(string word) {
        var node = root;
        foreach (char ch in word) {
            if (!node.Children.ContainsKey(ch))
                node.Children[ch] = new TrieNode();
            node = node.Children[ch];
        }
        node.IsEnd = true;
    }

    public bool Search(string word) {
        var node = root;
        foreach (char ch in word) {
            if (!node.Children.ContainsKey(ch)) return false;
            node = node.Children[ch];
        }
        return node.IsEnd;
    }

    public bool StartsWith(string prefix) {
        var node = root;
        foreach (char ch in prefix) {
            if (!node.Children.ContainsKey(ch)) return false;
            node = node.Children[ch];
        }
        return true;
    }
}

// Word Search II (Trie + DFS backtracking)
// Build trie of words, then DFS on grid checking trie nodes`,
    pairs: ["DFS (Word Search II)", "Backtracking", "Dictionary (simpler but slower)"],
    problems: ["Implement Trie", "Word Search II", "Design Add and Search Words", "Replace Words", "Maximum XOR of Two Numbers"],
    trick: "Use Dictionary<char, TrieNode> (not array of 26) for sparse alphabets. Mark IsEnd at word termination. For deletion, unmark IsEnd.",
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
int[] TopoSort(int numCourses, int[][] prerequisites) {
    var graph = new List<List<int>>();
    var inDegree = new int[numCourses];
    for (int i = 0; i < numCourses; i++) graph.Add(new List<int>());

    foreach (var prereq in prerequisites) {
        graph[prereq[1]].Add(prereq[0]);
        inDegree[prereq[0]]++;
    }

    var queue = new Queue<int>();
    for (int i = 0; i < numCourses; i++)
        if (inDegree[i] == 0) queue.Enqueue(i); // no dependencies

    var order = new List<int>();
    while (queue.Count > 0) {
        int node = queue.Dequeue();
        order.Add(node);
        foreach (int neighbor in graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] == 0) queue.Enqueue(neighbor);
        }
    }
    return order.Count == numCourses ? order.ToArray() : Array.Empty<int>();
}

// DFS-based (post-order DFS)
int[] TopoSortDfs(int n, int[][] edges) {
    var graph = new List<List<int>>();
    for (int i = 0; i < n; i++) graph.Add(new List<int>());
    foreach (var e in edges) graph[e[0]].Add(e[1]);
    var visited = new int[n]; // 0=unvisited,1=visiting,2=done
    var result = new List<int>();
    bool Dfs(int node) {
        if (visited[node] == 1) return false; // cycle!
        if (visited[node] == 2) return true;
        visited[node] = 1;
        foreach (int nb in graph[node]) if (!Dfs(nb)) return false;
        visited[node] = 2;
        result.Add(node);
        return true;
    }
    for (int i = 0; i < n; i++) if (!Dfs(i)) return Array.Empty<int>();
    result.Reverse();
    return result.ToArray();
}`,
    pairs: ["BFS (Kahn's)", "DFS", "Dynamic Programming on DAG"],
    problems: ["Course Schedule", "Course Schedule II", "Alien Dictionary", "Sequence Reconstruction", "Build a Matrix With Conditions"],
    trick: "If output order.Length < numNodes → cycle exists. Kahn's is easier to implement. DFS-based reverses the post-order.",
  },
];

// Pattern Finder Decision Tree
const questions = [
  {
    id: "q1",
    text: "What is the primary data structure?",
    options: [
      { label: "Array / String", next: "q2" },
      { label: "Linked List", next: "q_ll" },
      { label: "Tree / Graph", next: "q_graph" },
      { label: "Other / Unclear", next: "q_other" },
    ],
  },
  {
    id: "q2",
    text: "What does the problem ask for?",
    options: [
      { label: "Subarray / Substring result", next: "q3" },
      { label: "Find a target / index", next: "q_search" },
      { label: "Count / sum over range", next: "q_prefix" },
      { label: "All combinations / permutations", next: "q_bt" },
      { label: "Optimal (min/max) result", next: "q_dp" },
    ],
  },
  {
    id: "q3",
    text: "Is the subarray/substring fixed or variable size?",
    options: [
      { label: "Fixed size k", result: [1] },
      { label: "Variable / longest / shortest", next: "q4" },
    ],
  },
  {
    id: "q4",
    text: "Does the problem involve pairs or sorted input?",
    options: [
      { label: "Yes — sorted or pair/triplet sums", result: [2] },
      { label: "No — just need optimal window", result: [1] },
    ],
  },
  {
    id: "q_ll",
    text: "What do you need from the linked list?",
    options: [
      { label: "Detect cycle / find middle", result: [3] },
      { label: "Reorder / merge", result: [2] },
    ],
  },
  {
    id: "q_graph",
    text: "What kind of graph problem?",
    options: [
      { label: "Shortest path (unweighted)", result: [5] },
      { label: "All paths / components / backtrack", result: [6] },
      { label: "Dependency order / scheduling", result: [14] },
      { label: "Dynamic connectivity / grouping", result: [10] },
    ],
  },
  {
    id: "q_search",
    text: "Is the array sorted?",
    options: [
      { label: "Yes — sorted or rotated", result: [4] },
      { label: "No — need top-K or streaming", result: [9] },
    ],
  },
  {
    id: "q_prefix",
    text: "Repeated range queries or subarray sum = k?",
    options: [
      { label: "Yes", result: [12] },
      { label: "No — more like a sliding condition", result: [1] },
    ],
  },
  {
    id: "q_bt",
    text: "Do repeated subproblems exist?",
    options: [
      { label: "Yes — overlapping subproblems", result: [7] },
      { label: "No — explore + undo is enough", result: [8] },
    ],
  },
  {
    id: "q_dp",
    text: "Does the problem have overlapping subproblems?",
    options: [
      { label: "Yes", next: "q_dp2" },
      { label: "No — greedy or sort works", result: [4] },
    ],
  },
  {
    id: "q_dp2",
    text: "Is it string-based or involves prefix matching?",
    options: [
      { label: "Yes — prefix / word matching", result: [13] },
      { label: "No — numeric / grid / sequences", result: [7] },
    ],
  },
  {
    id: "q_other",
    text: "Which best describes the goal?",
    options: [
      { label: "Next greater/smaller in sequence", result: [11] },
      { label: "Top K / median / merge sorted", result: [9] },
      { label: "Connectivity / grouping", result: [10] },
      { label: "Prefix / word dictionary", result: [13] },
    ],
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

const STATUS = { none: null, inProgress: "inProgress", done: "done" };
const STATUS_CONFIG = {
  inProgress: { label: "In Progress", color: "#FFD700", bg: "#FFD70020", border: "#FFD70050", icon: "⏳" },
  done:       { label: "Completed",   color: "#56D364", bg: "#56D36420", border: "#56D36450", icon: "✅" },
};

export default function DSACheatsheet() {
  const [active, setActive] = useState(patterns[0]);
  const [tab, setTab] = useState("identify");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("patterns");
  const [copied, setCopied] = useState(false);
  // Pattern Finder state
  const [finderHistory, setFinderHistory] = useState([]);
  const [currentQ, setCurrentQ] = useState("q1");
  const [finderResult, setFinderResult] = useState(null);
  const [finderDone, setFinderDone] = useState(false);
  // Progress tracker — persisted in storage
  const [progress, setProgress] = useState({});

  // Load from persistent storage on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get("dsa_progress");
        if (res) setProgress(JSON.parse(res.value));
      } catch {}
    })();
  }, []);

  

  const setStatus = (patternId, status) => {
    const next = { ...progress };
    if (status === null) delete next[patternId];
    else next[patternId] = status;
    setProgress(next);
    // persist
    try { window.storage.set("dsa_progress", JSON.stringify(next)); } catch {}
    try { localStorage.setItem("dsa_progress", JSON.stringify(next)); } catch {}
  };

  const cycleStatus = (patternId, e) => {
    e.stopPropagation();
    const cur = progress[patternId];
    const next = cur === STATUS.none || !cur ? "inProgress"
               : cur === "inProgress" ? "done"
               : null;
    setStatus(patternId, next);
  };

  const doneCount = Object.values(progress).filter(v => v === "done").length;
  const inProgressCount = Object.values(progress).filter(v => v === "inProgress").length;

  const filtered = patterns.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.problems.some(pr => pr.toLowerCase().includes(search.toLowerCase()))
  );

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFinderAnswer = (option) => {
    const newHistory = [...finderHistory, { qId: currentQ, chosen: option.label }];
    setFinderHistory(newHistory);
    if (option.result) {
      setFinderResult(option.result);
      setFinderDone(true);
    } else if (option.next) {
      setCurrentQ(option.next);
    }
  };

  const resetFinder = () => {
    setFinderHistory([]);
    setCurrentQ("q1");
    setFinderResult(null);
    setFinderDone(false);
  };

  const goToPattern = (patternId) => {
    const p = patterns.find(x => x.id === patternId);
    if (p) { setActive(p); setTab("identify"); setViewMode("patterns"); }
  };

  const currentQuestion = questions.find(q => q.id === currentQ);

  const S = {
    root: { fontFamily: "'JetBrains Mono', 'Fira Code', monospace", background: "#0D1117", minHeight: "100vh", color: "#E6EDF3" },
    header: { background: "linear-gradient(135deg, #161B22 0%, #0D1117 100%)", borderBottom: "1px solid #21262D", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
    title: { fontSize: 18, fontWeight: 700, letterSpacing: 2, color: "#E6EDF3" },
    subtitle: { fontSize: 11, color: "#8B949E", marginTop: 2 },
    navBtn: (active) => ({ padding: "7px 16px", background: active ? "#161B22" : "transparent", border: active ? "1px solid #30363D" : "1px solid transparent", borderRadius: 6, color: active ? "#E6EDF3" : "#8B949E", cursor: "pointer", fontSize: 12, fontFamily: "inherit" }),
    body: { display: "flex", gap: 0, height: "calc(100vh - 73px)" },
    sidebar: { width: 220, borderRight: "1px solid #21262D", overflowY: "auto", padding: "12px 8px", flexShrink: 0 },
    searchBox: { width: "100%", background: "#161B22", border: "1px solid #21262D", borderRadius: 6, padding: "8px 10px", color: "#E6EDF3", fontSize: 11, fontFamily: "inherit", marginBottom: 10, boxSizing: "border-box", outline: "none" },
    patternBtn: (isActive, color, bg, border) => ({ width: "100%", textAlign: "left", background: isActive ? bg : "transparent", border: isActive ? `1px solid ${border}` : "1px solid transparent", borderRadius: 6, padding: "9px 10px", cursor: "pointer", marginBottom: 3, transition: "all 0.15s" }),
    mainPanel: { flex: 1, overflowY: "auto", padding: 24 },
  };

  return (
    <div style={S.root}>
      {/* Header */}
      <div style={S.header}>
        <div>
          <div style={S.title}>⚡ DSA PATTERNS — C#</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
            <div style={{ fontSize: 11, color: "#8B949E" }}>14 patterns · Google L4 Interview Prep</div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 10, color: "#56D364", background: "#56D36420", border: "1px solid #56D36450", borderRadius: 4, padding: "2px 7px" }}>✅ {doneCount}/14</span>
              {inProgressCount > 0 && <span style={{ fontSize: 10, color: "#FFD700", background: "#FFD70020", border: "1px solid #FFD70050", borderRadius: 4, padding: "2px 7px" }}>⏳ {inProgressCount}</span>}
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ width: 260, height: 3, background: "#21262D", borderRadius: 2, marginTop: 8 }}>
            <div style={{ height: "100%", width: `${(doneCount / 14) * 100}%`, background: "linear-gradient(90deg, #56D364, #2EA043)", borderRadius: 2, transition: "width 0.4s" }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[["patterns","📖 Patterns"],["cheatsheet","📊 Quick Ref"],["finder","🎯 Pattern Finder"],["approach","🧭 Approach Order"]].map(([key, label]) => (
            <button key={key} onClick={() => setViewMode(key)} style={S.navBtn(viewMode === key)}>{label}</button>
          ))}
        </div>
      </div>

      {/* PATTERNS VIEW */}
      {viewMode === "patterns" && (
        <div style={S.body}>
          {/* Sidebar */}
          <div style={S.sidebar}>
            <input
              placeholder="🔍 Search patterns..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={S.searchBox}
            />
            {filtered.map(p => {
              const st = progress[p.id];
              const sc = STATUS_CONFIG[st];
              return (
                <button key={p.id} onClick={() => { setActive(p); setTab("identify"); }} style={S.patternBtn(active.id === p.id, p.color, p.bg, p.border)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14 }}>{p.emoji}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, color: active.id === p.id ? p.color : "#C9D1D9", fontWeight: active.id === p.id ? 700 : 400 }}>{p.name}</div>
                      <div style={{ fontSize: 9, color: "#8B949E", marginTop: 1 }}>{p.timeComplexity}</div>
                    </div>
                    {/* Status cycle button */}
                    <div onClick={(e) => cycleStatus(p.id, e)}
                      title={sc ? `${sc.label} — click to cycle` : "Click to mark In Progress"}
                      style={{ width: 20, height: 20, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0, background: sc ? sc.bg : "#21262D", border: `1px solid ${sc ? sc.border : "#30363D"}`, cursor: "pointer" }}>
                      {sc ? sc.icon : <span style={{ color: "#484F58", fontSize: 9 }}>○</span>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div style={S.mainPanel}>
            {/* Pattern Header */}
            <div style={{ background: `linear-gradient(135deg, ${active.bg}, transparent)`, border: `1px solid ${active.border}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{active.emoji}</span>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: active.color }}>{active.name}</div>
                    <div style={{ fontSize: 11, color: "#8B949E", marginTop: 2 }}>{active.rank}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  {[["⏱", active.timeComplexity], ["💾", active.spaceComplexity]].map(([icon, val]) => (
                    <div key={val} style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: 8, padding: "8px 14px", textAlign: "center" }}>
                      <div style={{ fontSize: 9, color: "#8B949E", marginBottom: 3 }}>{icon} COMPLEXITY</div>
                      <div style={{ fontSize: 12, color: active.color, fontWeight: 700 }}>{val}</div>
                    </div>
                  ))}
                  {/* Status toggle */}
                  <div style={{ display: "flex", gap: 6 }}>
                    {["inProgress", "done"].map(s => {
                      const sc = STATUS_CONFIG[s];
                      const isActive = progress[active.id] === s;
                      return (
                        <button key={s} onClick={() => setStatus(active.id, isActive ? null : s)}
                          style={{ background: isActive ? sc.bg : "#161B22", border: `1px solid ${isActive ? sc.border : "#30363D"}`, borderRadius: 7, padding: "7px 12px", cursor: "pointer", color: isActive ? sc.color : "#8B949E", fontSize: 11, fontFamily: "inherit", fontWeight: isActive ? 700 : 400, display: "flex", alignItems: "center", gap: 5 }}>
                          {sc.icon} {sc.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 4, borderBottom: "1px solid #21262D", marginBottom: 20 }}>
              {[["identify","🔍 Identify"],["template","💻 C# Template"],["pairs","🔀 Pairs"],["problems","🎯 Problems"]].map(([key, label]) => (
                <button key={key} onClick={() => setTab(key)} style={{ padding: "8px 16px", background: "transparent", border: "none", borderBottom: tab === key ? `2px solid ${active.color}` : "2px solid transparent", color: tab === key ? active.color : "#8B949E", cursor: "pointer", fontSize: 12, fontFamily: "inherit", fontWeight: tab === key ? 700 : 400, marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>

            {/* Tab: Identify */}
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
                      <span key={i} style={{ background: "#161B22", border: `1px solid ${active.border}`, color: active.color, padding: "5px 12px", borderRadius: 6, fontSize: 12 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: "#1C2128", border: "1px solid #30363D", borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 11, color: "#F0883E", fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>💡 KEY TRICK</div>
                  <div style={{ fontSize: 13, color: "#C9D1D9", lineHeight: 1.7 }}>{active.trick}</div>
                </div>
              </div>
            )}

            {/* Tab: C# Template */}
            {tab === "template" && (
              <div>
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#161B22", borderRadius: "8px 8px 0 0", padding: "10px 16px", border: "1px solid #30363D", borderBottom: "none" }}>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      {["#FF5F57","#FFBD2E","#28C940"].map((c, i) => (
                        <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                      ))}
                      <span style={{ fontSize: 11, color: "#8B949E", marginLeft: 8 }}>{active.name} · C#</span>
                    </div>
                    <button onClick={() => copy(active.template)} style={{ background: copied ? "#56D36420" : "#21262D", border: `1px solid ${copied ? "#56D364" : "#30363D"}`, color: copied ? "#56D364" : "#8B949E", padding: "4px 12px", borderRadius: 5, cursor: "pointer", fontSize: 11, fontFamily: "inherit" }}>
                      {copied ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                  <pre style={{ background: "#0D1117", border: "1px solid #30363D", borderRadius: "0 0 8px 8px", padding: 20, overflowX: "auto", fontSize: 12, lineHeight: 1.7, color: "#C9D1D9", margin: 0, whiteSpace: "pre" }}>
                    {active.template.split("\n").map((line, i) => {
                      const colored = line
                        .replace(/(\/\/.*)/g, '<span style="color:#8B949E">$1</span>')
                        .replace(/\b(int|string|bool|var|void|return|while|for|foreach|if|else|new|class|public|private|true|false|null|this|static|readonly|in|out|ref)\b/g, '<span style="color:#FF7B72">$1</span>')
                        .replace(/\b(\d+)\b/g, '<span style="color:#79C0FF">$1</span>')
                        .replace(/\b(Math|Array|List|Dictionary|HashSet|Stack|Queue|PriorityQueue|Enumerable|string)\b/g, '<span style="color:#FFA657">$1</span>');
                      return <div key={i} dangerouslySetInnerHTML={{ __html: colored }} />;
                    })}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab: Pairs */}
            {tab === "pairs" && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 16 }}>🔀 PAIRS WITH</div>
                  {active.pairs.map((pair, i) => {
                    const related = patterns.find(p => p.name.toLowerCase().includes(pair.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "")));
                    return (
                      <div key={i} style={{ background: "#161B22", border: "1px solid #21262D", borderRadius: 8, padding: "14px 16px", marginBottom: 10, cursor: related ? "pointer" : "default" }}
                        onClick={() => related && (setActive(related), setTab("identify"))}>
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
                    <strong style={{ color: active.color }}>{active.name}</strong> often combines with <strong style={{ color: "#FDCB6E" }}>{active.pairs[0]}</strong> to solve the most common Google interview problems.
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Problems */}
            {tab === "problems" && (
              <div>
                <div style={{ fontSize: 11, color: "#8B949E", letterSpacing: 1, marginBottom: 16 }}>🎯 MUST-SOLVE PROBLEMS</div>
                {active.problems.map((prob, i) => (
                  <div key={i} style={{ background: "#161B22", border: "1px solid #21262D", borderRadius: 8, padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: `${active.color}20`, color: active.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: 13, color: "#C9D1D9" }}>{prob}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20, background: `${active.color}10`, border: `1px solid ${active.border}`, borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 11, color: active.color, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>📝 STUDY ORDER</div>
                  <div style={{ fontSize: 12, color: "#C9D1D9", lineHeight: 1.6 }}>Solve in order shown. First 2–3 are foundational. Last 1–2 are Google-hard variants that combine this pattern with others.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* QUICK REF VIEW */}
      {viewMode === "cheatsheet" && (
        <div style={{ padding: 24, overflowY: "auto", height: "calc(100vh - 73px)" }}>
          <div style={{ fontSize: 13, color: "#8B949E", marginBottom: 20 }}>Quick signal → pattern mapping for interview problem identification</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 10 }}>
            {cheatData.map((row, i) => {
              const p = patterns.find(x => x.name.includes(row.pattern.split(" ")[0]));
              return (
                <div key={i} onClick={() => { if (p) { setActive(p); setTab("identify"); setViewMode("patterns"); } }}
                  style={{ background: "#161B22", border: `1px solid ${p?.border || "#21262D"}`, borderRadius: 8, padding: "14px 16px", cursor: "pointer", transition: "all 0.15s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ fontSize: 13, color: p?.color || "#58A6FF", fontWeight: 700 }}>{p?.emoji} {row.pattern}</div>
                    <span style={{ background: "#0D1117", border: "1px solid #30363D", borderRadius: 4, padding: "2px 8px", fontSize: 10, color: "#79C0FF" }}>{row.timeHint}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#8B949E", marginBottom: 6 }}>🚦 {row.keySignal}</div>
                  <div style={{ fontSize: 11, color: "#C9D1D9" }}>✅ {row.bestFor}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PATTERN FINDER VIEW */}
      {viewMode === "finder" && (
        <div style={{ padding: 24, overflowY: "auto", height: "calc(100vh - 73px)", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#E6EDF3", marginBottom: 6 }}>🎯 Pattern Finder</div>
            <div style={{ fontSize: 12, color: "#8B949E" }}>Answer a few questions to identify the best pattern for your problem.</div>
          </div>

          {/* Breadcrumb trail */}
          {finderHistory.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, color: "#8B949E", letterSpacing: 1, marginBottom: 10 }}>YOUR ANSWERS</div>
              {finderHistory.map((h, i) => {
                const q = questions.find(x => x.id === h.qId);
                return (
                  <div key={i} style={{ background: "#161B22", border: "1px solid #21262D", borderRadius: 6, padding: "8px 14px", marginBottom: 6, display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ fontSize: 10, color: "#8B949E", minWidth: 16 }}>Q{i+1}</span>
                    <span style={{ fontSize: 11, color: "#8B949E" }}>{q?.text}</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, color: "#58A6FF", fontWeight: 600, whiteSpace: "nowrap" }}>→ {h.chosen}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Question or Result */}
          {!finderDone ? (
            <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 11, color: "#8B949E", marginBottom: 12, letterSpacing: 1 }}>QUESTION {finderHistory.length + 1}</div>
              <div style={{ fontSize: 15, color: "#E6EDF3", fontWeight: 600, marginBottom: 24, lineHeight: 1.5 }}>{currentQuestion?.text}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {currentQuestion?.options.map((opt, i) => (
                  <button key={i} onClick={() => handleFinderAnswer(opt)}
                    style={{ textAlign: "left", background: "#0D1117", border: "1px solid #30363D", borderRadius: 8, padding: "12px 16px", cursor: "pointer", color: "#C9D1D9", fontSize: 13, fontFamily: "inherit", transition: "all 0.15s" }}
                    onMouseEnter={e => { e.target.style.borderColor = "#58A6FF"; e.target.style.color = "#E6EDF3"; }}
                    onMouseLeave={e => { e.target.style.borderColor = "#30363D"; e.target.style.color = "#C9D1D9"; }}>
                    <span style={{ color: "#58A6FF", marginRight: 10 }}>{String.fromCharCode(65 + i)}.</span>{opt.label}
                  </button>
                ))}
              </div>
              {finderHistory.length > 0 && (
                <button onClick={resetFinder} style={{ marginTop: 20, background: "transparent", border: "none", color: "#8B949E", cursor: "pointer", fontSize: 11, fontFamily: "inherit" }}>↩ Start over</button>
              )}
            </div>
          ) : (
            <div>
              <div style={{ background: "#0F2A1A", border: "1px solid #238636", borderRadius: 12, padding: 24, marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: "#56D364", fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>✅ RECOMMENDED PATTERN{finderResult.length > 1 ? "S" : ""}</div>
                {finderResult.map(id => {
                  const p = patterns.find(x => x.id === id);
                  return (
                    <div key={id} onClick={() => goToPattern(id)}
                      style={{ background: p.bg, border: `1px solid ${p.border}`, borderRadius: 10, padding: 18, cursor: "pointer", marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ fontSize: 24 }}>{p.emoji}</span>
                          <div>
                            <div style={{ fontSize: 16, color: p.color, fontWeight: 700 }}>{p.name}</div>
                            <div style={{ fontSize: 11, color: "#8B949E", marginTop: 3 }}>{p.timeComplexity} · {p.rank}</div>
                          </div>
                        </div>
                        <span style={{ fontSize: 11, color: p.color, border: `1px solid ${p.border}`, borderRadius: 5, padding: "4px 10px" }}>View Pattern →</span>
                      </div>
                      <div style={{ marginTop: 14, fontSize: 12, color: "#C9D1D9", lineHeight: 1.6, borderTop: `1px solid ${p.border}`, paddingTop: 12 }}>{p.whenToUse}</div>
                      <div style={{ marginTop: 10 }}>
                        <div style={{ fontSize: 10, color: "#8B949E", marginBottom: 6, letterSpacing: 1 }}>KEY SIGNALS</div>
                        {p.identify.slice(0, 2).map((sig, i) => (
                          <div key={i} style={{ fontSize: 11, color: "#C9D1D9", marginBottom: 4 }}>▸ {sig}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button onClick={resetFinder} style={{ background: "#21262D", border: "1px solid #30363D", borderRadius: 8, padding: "10px 20px", color: "#E6EDF3", cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>🔄 Try Another Problem</button>
            </div>
          )}
        </div>
      )}

      {/* APPROACH ORDER VIEW */}
      {viewMode === "approach" && (() => {
        const steps = [
          {
            step: 0,
            label: "Always Start Here",
            title: "Brute Force First",
            color: "#8B949E",
            bg: "#8B949E15",
            border: "#8B949E40",
            emoji: "🧱",
            desc: "Write the naive O(n²) or O(n³) solution out loud before pattern-matching. This proves you understand the problem, gives you a baseline to optimize from, and shows the interviewer your reasoning. Google L4 interviewers care deeply about this step — never skip it.",
            signal: "Always — no exceptions",
            patternIds: [],
          },
          {
            step: 1,
            label: "Step 1 — Array / String",
            title: "Sliding Window · Two Pointers",
            color: "#00D4FF",
            bg: "#00D4FF15",
            border: "#00D4FF40",
            emoji: "🪟👆",
            desc: "Is the brute force doing repeated work over a linear structure? These are the most common easy-win optimizations and cover a huge chunk of array/string problems.",
            signal: "Subarray / substring · contiguous range · pair/triplet sums · sorted input",
            patternIds: [1, 2],
          },
          {
            step: 2,
            label: "Step 2 — Sorted Input / Search",
            title: "Binary Search",
            color: "#FFD700",
            bg: "#FFD70015",
            border: "#FFD70040",
            emoji: "🔍",
            desc: "Is the input sorted, or can sorting help? Also ask: can I binary search on the answer instead of the array? This covers 'minimize the maximum' and 'maximize the minimum' problem families.",
            signal: "Sorted / rotated · find minimum / maximum · monotonic condition · log n hint",
            patternIds: [4],
          },
          {
            step: 3,
            label: "Step 3 — Graph / Tree",
            title: "BFS · DFS · Topological Sort",
            color: "#FF9F43",
            bg: "#FF9F4315",
            border: "#FF9F4340",
            emoji: "🌊🌲📋",
            desc: "Does the problem involve a graph or tree? Ask: do I need shortest path (BFS), all paths or components (DFS), or ordering with dependencies (Topo Sort)?",
            signal: "shortest / minimum steps → BFS · all paths / islands → DFS · prerequisites / order → Topo Sort",
            patternIds: [5, 6, 14],
          },
          {
            step: 4,
            label: "Step 4 — Repeated Subproblems",
            title: "Dynamic Programming",
            color: "#FD79A8",
            bg: "#FD79A815",
            border: "#FD79A840",
            emoji: "🧮",
            desc: "Does your brute force recursion recompute the same inputs? Add memoization first (top-down), then convert to tabulation (bottom-up). The recurrence relation is the hardest part — get it right before optimizing.",
            signal: "maximum / minimum / count ways / longest · decision at each step · optimal substructure",
            patternIds: [7],
          },
          {
            step: 5,
            label: "Step 5 — Top K / Streaming",
            title: "Heap / Priority Queue",
            color: "#00CEC9",
            bg: "#00CEC915",
            border: "#00CEC940",
            emoji: "🏔️",
            desc: "Do you need repeated access to the min or max, especially with a K constraint? Min-heap for K largest, max-heap (negate priority) for K smallest.",
            signal: "top K / K largest / K smallest · merge K sorted · streaming median",
            patternIds: [9],
          },
          {
            step: 6,
            label: "Step 6 — All Possibilities",
            title: "Backtracking",
            color: "#FDCB6E",
            bg: "#FDCB6E15",
            border: "#FDCB6E40",
            emoji: "↩️",
            desc: "Do you need to explore all options and undo invalid choices? Choose → Explore → Unchoose. Add pruning to cut branches early — this is what separates a working solution from a fast one.",
            signal: "all possible / generate / find all · constraint satisfaction · N-Queens / Sudoku",
            patternIds: [8],
          },
        ];

        const constraintHints = [
          { keyword: "k", patterns: "Sliding Window · Heap", color: "#00D4FF" },
          { keyword: "shortest / minimum steps", patterns: "BFS", color: "#FF9F43" },
          { keyword: "all possible / generate", patterns: "Backtracking", color: "#FDCB6E" },
          { keyword: "prerequisite / dependency", patterns: "Topological Sort", color: "#55EFC4" },
          { keyword: "sorted / rotated", patterns: "Binary Search · Two Pointers", color: "#FFD700" },
          { keyword: "cycle / middle", patterns: "Fast & Slow Pointers", color: "#A8FF78" },
          { keyword: "range sum / subarray sum = k", patterns: "Prefix Sum", color: "#DDA0DD" },
          { keyword: "connected / same group", patterns: "Union-Find", color: "#E17055" },
          { keyword: "next greater / histogram", patterns: "Monotonic Stack", color: "#B8E994" },
          { keyword: "prefix / word / dictionary", patterns: "Trie", color: "#74B9FF" },
        ];

        return (
          <div style={{ padding: 24, overflowY: "auto", height: "calc(100vh - 73px)" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#E6EDF3", marginBottom: 6 }}>🧭 Interview Approach Order</div>
                <div style={{ fontSize: 12, color: "#8B949E" }}>The mental order to work through when you see a new problem. Covers ~85% of Google L4 problems.</div>
              </div>

              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 23, top: 48, bottom: 48, width: 2, background: "linear-gradient(to bottom, #30363D, #21262D)", zIndex: 0 }} />
                {steps.map((s, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 16, marginBottom: 16, position: "relative", zIndex: 1 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: s.step === 0 ? "#21262D" : s.bg, border: `2px solid ${s.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: s.step === 0 ? 11 : 18 }}>
                      {s.step === 0 ? <span style={{ color: "#8B949E", fontWeight: 700 }}>GO</span> : <span>{s.step}</span>}
                    </div>
                    <div style={{ flex: 1, background: "#161B22", border: `1px solid ${s.border}`, borderRadius: 10, padding: 18 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                        <div>
                          <div style={{ fontSize: 10, color: s.color, letterSpacing: 1, fontWeight: 700, marginBottom: 4 }}>{s.label.toUpperCase()}</div>
                          <div style={{ fontSize: 15, color: "#E6EDF3", fontWeight: 700 }}>{s.title}</div>
                        </div>
                        {s.patternIds.length > 0 && (
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                            {s.patternIds.map(id => {
                              const p = patterns.find(x => x.id === id);
                              return (
                                <button key={id} onClick={() => { setActive(p); setTab("identify"); setViewMode("patterns"); }}
                                  style={{ background: p.bg, border: `1px solid ${p.border}`, borderRadius: 5, padding: "3px 10px", color: p.color, fontSize: 10, cursor: "pointer", fontFamily: "inherit" }}>
                                  {p.emoji} {p.name}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <div style={{ fontSize: 12, color: "#C9D1D9", lineHeight: 1.7, marginBottom: 10 }}>{s.desc}</div>
                      <div style={{ background: "#0D1117", borderRadius: 6, padding: "8px 12px", borderLeft: `3px solid ${s.color}` }}>
                        <span style={{ fontSize: 10, color: s.color, fontWeight: 700, letterSpacing: 1 }}>SIGNAL: </span>
                        <span style={{ fontSize: 11, color: "#8B949E" }}>{s.signal}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#E6EDF3", marginBottom: 6 }}>⚡ Constraint Keyword Lookup</div>
                <div style={{ fontSize: 11, color: "#8B949E", marginBottom: 16 }}>The pattern is usually hidden in the constraint, not the problem description. Train yourself to read these.</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
                  {constraintHints.map((h, i) => (
                    <div key={i} style={{ background: "#161B22", border: `1px solid ${h.color}30`, borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ fontSize: 11, color: h.color, fontWeight: 700, marginBottom: 3 }}>"{h.keyword}"</div>
                      <div style={{ fontSize: 11, color: "#8B949E" }}>→ {h.patterns}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 24, background: "#1C2128", border: "1px solid #30363D", borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 11, color: "#F0883E", fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>📊 COVERAGE NOTE</div>
                <div style={{ fontSize: 12, color: "#C9D1D9", lineHeight: 1.7 }}>
                  <strong style={{ color: "#00D4FF" }}>Arrays → Sliding Window / Two Pointers.</strong>{" "}
                  <strong style={{ color: "#FF9F43" }}>Graphs → BFS / DFS.</strong>{" "}
                  <strong style={{ color: "#FD79A8" }}>Optimal value + repeated subproblems → DP.</strong>{" "}
                  These three alone cover roughly <strong style={{ color: "#56D364" }}>70% of Google L4 problems</strong>. Master them before specializing.
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
