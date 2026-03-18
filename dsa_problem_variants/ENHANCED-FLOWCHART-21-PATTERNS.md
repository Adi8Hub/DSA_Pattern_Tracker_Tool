# 🌳 ENHANCED FLOWCHART WITH ALL 21 PATTERNS (Including Trees)

## Complete Decision Tree for Pattern Identification

This flowchart guides you through identifying the correct pattern from **all 21 patterns**, including the 7 tree-specific patterns.

---

## MAIN ENTRY POINT

```
START: What type of data structure?
├── Array/List
├── String
├── LinkedList
├── Tree/Binary Tree
├── Graph
├── Matrix/2D Grid
└── General Problem (No specific DS)
```

---

## PATH 1: ARRAY/LIST

```
ARRAY/LIST
│
├─→ What's the task?
│   │
│   ├── Search in sorted array?
│   │   └─→ Binary Search (Pattern 5) ✓
│   │
│   ├── Find elements with specific property?
│   │   └─→ Is array sorted?
│   │       ├─ Yes → Two Pointers (Pattern 2) ✓
│   │       └─ No → Hash Map or Sliding Window
│   │
│   ├── Contiguous subarray/substring?
│   │   └─→ Sliding Window (Pattern 1) ✓
│   │
│   ├── Range queries?
│   │   └─→ Do you need dynamic updates?
│   │       ├─ No → Prefix Sum (Pattern 3) ✓
│   │       ├─ Yes, sum only → Fenwick Tree (Pattern 19) ✓
│   │       └─ Yes, complex → Segment Tree (Pattern 18) ✓
│   │
│   ├── Next greater/smaller element?
│   │   └─→ Monotonic Stack (Pattern 4) ✓
│   │
│   ├── Top K elements?
│   │   └─→ Heap/Priority Queue (Pattern 11) ✓
│   │
│   ├── Frequency/counting?
│   │   └─→ Hash Map (use with other patterns)
│   │
│   └── Generate all combinations?
│       └─→ Backtracking (Pattern 10) ✓
│
└─ Other array operations
   └─→ Consider combination of above patterns
```

---

## PATH 2: STRING

```
STRING
│
├─→ What's the task?
│   │
│   ├── Substring/pattern matching?
│   │   └─→ Sliding Window (Pattern 1) ✓
│   │
│   ├── Palindrome check?
│   │   ├─ Exact palindrome → Two Pointers (Pattern 2) ✓
│   │   └─ Longest palindrome → Dynamic Programming (Pattern 9)
│   │
│   ├── Prefix matching / autocomplete?
│   │   └─→ Trie (Pattern 13) ✓
│   │
│   ├── Pattern matching (KMP)?
│   │   └─→ KMP Algorithm (Advanced, not in 21 basic)
│   │
│   ├── Generate all permutations/combinations?
│   │   └─→ Backtracking (Pattern 10) ✓
│   │
│   ├── Longest/shortest sequence?
│   │   └─→ Dynamic Programming (Pattern 9) ✓
│   │
│   └── Word search in grid?
│       └─→ DFS + Backtracking (Patterns 8, 10) ✓
```

---

## PATH 3: LINKEDLIST

```
LINKEDLIST
│
├─→ What's the task?
│   │
│   ├── Cycle detection?
│   │   └─→ Fast & Slow Pointers (Pattern 6) ✓
│   │
│   ├── Find middle element?
│   │   └─→ Fast & Slow Pointers (Pattern 6) ✓
│   │
│   ├── Kth element from end?
│   │   └─→ Two Pointers (Pattern 2) ✓
│   │
│   ├── Reorder/partition?
│   │   └─→ Two Pointers or DFS (Patterns 2, 8)
│   │
│   └── Reverse/manipulation?
│       └─→ Two Pointers (Pattern 2) ✓
```

---

## 🌳 PATH 4: TREE/BINARY TREE (NEW - 7 Patterns)

```
TREE / BINARY TREE
│
├─→ Is it a BINARY SEARCH TREE (BST)?
│   │
│   ├─ YES
│   │  ├─→ Need to search/insert/delete?
│   │  │   └─→ BST Operations (Pattern 15) ✓
│   │  │
│   │  ├─→ Need guaranteed O(log n)?
│   │  │   └─→ Balanced BST (Pattern 20) ✓
│   │  │
│   │  ├─→ Need O(1) space traversal?
│   │  │   └─→ Morris Traversal (Pattern 21) ✓
│   │  │
│   │  └─→ Need sorted output?
│   │      └─→ Inorder Traversal (Pattern 16) ✓
│   │
│   └─ NO
│      └─→ Continue below (general tree patterns)
│
├─→ What's the primary task?
│   │
│   ├── Visit all nodes in specific order?
│   │   ├─ Inorder (sorted for BST)?
│   │   │  └─→ Tree Traversals - Inorder (Pattern 16) ✓
│   │   ├─ Preorder (root first)?
│   │   │  └─→ Tree Traversals - Preorder (Pattern 16) ✓
│   │   ├─ Postorder (children first)?
│   │   │  └─→ Tree Traversals - Postorder (Pattern 16) ✓
│   │   ├─ Level by level?
│   │   │  └─→ Tree Traversals - BFS (Pattern 16) ✓
│   │   └─ O(1) space?
│   │      └─→ Morris Traversal (Pattern 21) ✓
│   │
│   ├── Find specific path or relationship?
│   │   ├─ Lowest Common Ancestor (LCA)?
│   │   │  └─→ Tree Path Problems (Pattern 17) ✓
│   │   ├─ Path Sum / Check path?
│   │   │  └─→ Tree Path Problems (Pattern 17) ✓
│   │   ├─ Diameter of tree?
│   │   │  └─→ Tree Path Problems (Pattern 17) ✓
│   │   ├─ Maximum path sum?
│   │   │  └─→ Tree Path Problems + DP (Patterns 17, 9) ✓
│   │   └─ Distance between nodes?
│   │      └─→ Tree Path Problems (Pattern 17) ✓
│   │
│   ├── Explore all nodes/paths?
│   │   ├─ All paths root to leaf?
│   │   │  └─→ DFS + Backtracking (Patterns 8, 10) ✓
│   │   ├─ Connected components?
│   │   │  └─→ DFS / Union-Find (Patterns 8, 12) ✓
│   │   └─ Shortest distance?
│   │      └─→ BFS (Pattern 7) ✓
│   │
│   ├── Need range queries on tree (advanced)?
│   │   ├─ Range sum on BST?
│   │   │  └─→ Segment Tree (Pattern 18) ✓
│   │   └─ Dynamic updates?
│   │      └─→ Segment Tree (Pattern 18) ✓
│   │
│   └── Need to modify tree?
│       ├─ Insert/Delete/Update?
│       │  └─→ BST Operations or Balanced BST (Patterns 15, 20) ✓
│       └─ Flatten to linkedlist?
│          └─→ Morris/DFS/Postorder (Patterns 21, 8, 16) ✓
│
└─→ Combine patterns
   ├─ DFS + Backtracking for all paths
   ├─ BFS + Tree Traversals for level-order
   ├─ Tree Traversals + DP for optimization
   └─ Tree operations + other patterns
```

---

## PATH 5: GRAPH

```
GRAPH
│
├─→ What type of problem?
│   │
│   ├── Shortest path?
│   │   └─→ Is graph weighted?
│   │       ├─ No (unweighted) → BFS (Pattern 7) ✓
│   │       └─ Yes (weighted) → Dijkstra (not in 21 basic)
│   │
│   ├── All paths / exploration?
│   │   └─→ DFS (Pattern 8) ✓
│   │
│   ├── Connected components?
│   │   ├─→ DFS (Pattern 8) ✓
│   │   └─→ Union-Find (Pattern 12) ✓
│   │
│   ├── Cycle detection?
│   │   ├─→ DFS (Pattern 8) ✓
│   │   └─→ Union-Find (Pattern 12) ✓
│   │
│   ├── Dependency ordering?
│   │   └─→ Topological Sort (Pattern 14) ✓
│   │
│   ├── Minimum spanning tree?
│   │   └─→ Union-Find (Pattern 12) ✓
│   │
│   └── Connectivity?
│       └─→ Union-Find (Pattern 12) ✓
```

---

## PATH 6: MATRIX/2D GRID

```
MATRIX / 2D GRID
│
├─→ What's the task?
│   │
│   ├── Path/region finding?
│   │   └─→ DFS/BFS (Patterns 8, 7) ✓
│   │
│   ├── Shortest distance?
│   │   └─→ BFS (Pattern 7) ✓
│   │
│   ├── Searching in sorted matrix?
│   │   └─→ Binary Search (Pattern 5) ✓
│   │
│   ├── Counting paths?
│   │   └─→ Dynamic Programming (Pattern 9) ✓
│   │
│   ├── Connected components?
│   │   └─→ DFS / Union-Find (Patterns 8, 12) ✓
│   │
│   ├── Range queries?
│   │   └─→ 2D Prefix Sum or Segment Tree
│   │
│   └── Generate all permutations?
│       └─→ Backtracking (Pattern 10) ✓
```

---

## PATH 7: GENERAL PROBLEM (No specific DS)

```
GENERAL PROBLEM
│
├─→ What's the core requirement?
│   │
│   ├── Find optimal solution?
│   │   ├─ Overlapping subproblems?
│   │   │  └─→ Dynamic Programming (Pattern 9) ✓
│   │   ├─ Greedy choice works?
│   │   │  └─→ Greedy Algorithm (not in 21 basic)
│   │   └─ Maximize/minimize?
│   │      └─→ DP / Backtracking (Patterns 9, 10)
│   │
│   ├── Generate all solutions?
│   │   └─→ Backtracking (Pattern 10) ✓
│   │
│   ├── Quick lookup needed?
│   │   └─→ Hash Map (use with other patterns)
│   │
│   ├── Priority processing?
│   │   └─→ Heap / Priority Queue (Pattern 11) ✓
│   │
│   ├── Connectivity/grouping?
│   │   └─→ Union-Find (Pattern 12) ✓
│   │
│   └── Word/prefix problems?
│       └─→ Trie (Pattern 13) ✓
```

---

## QUICK DECISION TABLE

| Data Structure | Task | Best Pattern | Backup |
|---|---|---|---|
| **Array/List** | Contiguous | Sliding Window (1) | - |
| | Sorted pairs | Two Pointers (2) | Hash Map |
| | Range sum | Prefix Sum (3) | Fenwick (19) |
| | Next greater | Monotonic Stack (4) | - |
| | Binary search | Binary Search (5) | - |
| | Top K | Heap (11) | - |
| **String** | Substring | Sliding Window (1) | - |
| | Palindrome | Two Pointers (2) | DP (9) |
| | Prefix | Trie (13) | - |
| | Permutations | Backtracking (10) | - |
| **LinkedList** | Cycle | Fast & Slow (6) | - |
| | Middle | Fast & Slow (6) | - |
| | Reorder | Two Pointers (2) | - |
| **🌳 Tree** | Traverse | Traversals (16) | - |
| | BST ops | BST Operations (15) | - |
| | Paths/LCA | Tree Paths (17) | - |
| | Balanced | Balanced BST (20) | - |
| | O(1) space | Morris (21) | - |
| **Graph** | Shortest path | BFS (7) | Dijkstra |
| | All paths | DFS (8) | Backtracking (10) |
| | Components | Union-Find (12) | DFS (8) |
| | Topological | Topo Sort (14) | - |
| **Matrix** | Path | DFS/BFS (8/7) | - |
| | Distance | BFS (7) | - |
| | Counting | DP (9) | - |

---

## HOW TO USE THIS FLOWCHART

### During Interview:

1. **Identify data structure** at top level
2. **Ask clarifying questions**: sorted? range updates? constraints?
3. **Follow path** down the decision tree
4. **Identify pattern** from recommendations
5. **Implement** using the pattern template

### Example 1: "Given array, find subarray with max sum"
- Data structure: Array
- Task: Contiguous subarray
- Path: Sliding Window (Pattern 1) ✓

### Example 2: "Find LCA of two nodes in tree"
- Data structure: Tree
- Task: Find relationship between nodes
- Path: Tree Path Problems (Pattern 17) ✓

### Example 3: "Course schedule with prerequisites"
- Data structure: Graph
- Task: Dependency ordering
- Path: Topological Sort (Pattern 14) ✓

### Example 4: "Validate if tree is BST"
- Data structure: Tree (BST)
- Task: Validate structure
- Path: BST Operations + Inorder Traversal (Patterns 15, 16) ✓

---

## PATTERN COMBINATION TIPS

**Tree + DFS**:
- All paths in tree → DFS + Backtracking
- Tree components → DFS for counting

**Tree + DP**:
- Maximum path sum → Tree Path + DP
- Optimal binary tree → Tree + DP

**Tree + Other Patterns**:
- Serialize tree → Tree Traversals
- Find path in tree → BFS/DFS
- BST → Traversals for sorted output

**Graph + Tree Patterns**:
- Tree is special graph
- Tree Traversals ≈ Graph Traversals
- Can use Union-Find on trees

---

## MOST COMMON COMBINATIONS

1. **Array + Sorting**: Two Pointers or Binary Search
2. **Array + Range**: Prefix Sum or Segment Tree
3. **Array + All possibilities**: Sliding Window or Backtracking
4. **String + Pattern**: Sliding Window or Trie
5. **Tree + Paths**: DFS/BFS + Tree Traversals
6. **Tree + Optimization**: Tree Traversals + DP
7. **Graph + Connectivity**: Union-Find or DFS
8. **Graph + Shortest Path**: BFS (unweighted)

---

## RED FLAG KEYWORDS → PATTERNS

| Keywords | Pattern |
|----------|---------|
| "window", "contiguous", "substring" | Sliding Window (1) |
| "sorted", "pairs", "two sum" | Two Pointers (2) |
| "range sum", "prefix" | Prefix Sum (3) |
| "next greater", "monotonic" | Monotonic Stack (4) |
| "sorted", "binary search", "find" | Binary Search (5) |
| "cycle", "middle", "fast/slow" | Fast & Slow (6) |
| "shortest path", "distance", "nearest" | BFS (7) |
| "all paths", "components", "explore" | DFS (8) |
| "optimal", "overlapping subproblems" | DP (9) |
| "all solutions", "permutations", "combinations" | Backtracking (10) |
| "top K", "streaming", "median", "priority" | Heap (11) |
| "connectivity", "union", "find", "components" | Union-Find (12) |
| "prefix", "word", "dictionary", "autocomplete" | Trie (13) |
| "ordering", "dependency", "prerequisite" | Topo Sort (14) |
| "BST", "search", "insert", "delete" | BST Operations (15) |
| "traverse", "visit all", "inorder", "preorder" | Tree Traversals (16) |
| "path", "ancestor", "LCA", "distance" | Tree Paths (17) |
| "range query", "segment", "interval", "update" | Segment Tree (18) |
| "range sum", "prefix sum", "cumulative" | Fenwick Tree (19) |
| "balance", "rotation", "guarantee O(log n)" | Balanced BST (20) |
| "in-place", "O(1) space", "no recursion" | Morris Traversal (21) |

---

## PRACTICE STRATEGY

1. **Learn** all 21 patterns deeply
2. **Identify** which pattern(s) fit your problem
3. **Use** this flowchart during practice
4. **Time** yourself: Can you identify in < 2 minutes?
5. **Combine** patterns when needed
6. **Implement** using templates from cheatsheet
7. **Optimize** once basic solution works

---

## TREE PATTERNS - KEY TAKEAWAYS

🌳 **Patterns 15-17**: Core tree patterns (must know)
- BST Operations, Tree Traversals, Tree Paths

🌳 **Patterns 18-19**: Advanced range queries
- Segment Trees, Fenwick Trees (good to know)

🌳 **Pattern 20**: Guaranteed O(log n)
- Balanced BSTs (use standard library, don't implement)

🌳 **Pattern 21**: Interview trick
- Morris Traversal (follow-up to traversal question)

---

*Enhanced Flowchart with All 21 Patterns | Ready for Google SWE L4 Interview*
