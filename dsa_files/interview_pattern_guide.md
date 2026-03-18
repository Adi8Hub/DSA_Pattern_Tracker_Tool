# Interview Problem Pattern Recognition Guide

## 1. Initial Problem Analysis Checklist

Before jumping to patterns, ask yourself these questions:

### Structure & Constraints
- [ ] What is the **input** (array, string, tree, graph, number)?
- [ ] What is the **output** (single value, modified array, count, path)?
- [ ] What are the **constraints**? (size limits, value ranges, time/space limits)
- [ ] Is there a **sorted** array or data structure?
- [ ] Do we need to preserve **order** or find **unique** elements?
- [ ] Are there **duplicate** elements?
- [ ] Is the data **dynamic** (changing) or **static**?

### Complexity Requirements
- [ ] Is O(n²) acceptable or do we need O(n log n) or O(n)?
- [ ] Can we use O(n) extra space or must it be O(1)?
- [ ] Is there a **follow-up** about optimizing space or time?

---

## 2. Pattern Decision Tree

Start at the top and work down:

```
┌─ Is it about searching/finding something?
│  ├─ Sorted data? → Binary Search
│  ├─ Finding a target with 2 elements? → Two Pointers / Hash Map
│  ├─ Finding in unsorted data? → Hash Map / Hash Set
│  └─ Searching in matrix? → Binary Search (2D) or Graph Traversal
│
├─ Is it about traversing/visiting elements?
│  ├─ Tree/hierarchical structure? → DFS / BFS
│  ├─ Graph with cycles? → DFS / BFS with visited set
│  ├─ Undirected/Directed? → Graph Traversal variants
│  └─ All paths/combinations? → Backtracking / DFS
│
├─ Is it about optimization (max/min/best)?
│  ├─ Optimal substructure present? → Dynamic Programming
│  ├─ Greedy choice works? → Greedy Algorithm
│  ├─ Need all solutions? → Backtracking
│  └─ Real-time/streaming? → Sliding Window / Heap
│
├─ Is it about sequences/patterns in data?
│  ├─ Substring/subsequence match? → Sliding Window / Two Pointers
│  ├─ Pattern in string? → Regex / KMP / Z-Algorithm
│  ├─ Overlapping repeats? → Sliding Window
│  └─ Longest/shortest contiguous? → Sliding Window
│
├─ Is it about grouping/combining elements?
│  ├─ Group by relationship? → Union-Find / Hash Map
│  ├─ Generate all combinations? → Backtracking / Combinations
│  ├─ Permutations? → Backtracking
│  └─ Partition into groups? → Hash Map / Sorting
│
└─ Is it about numeric/mathematical operations?
   ├─ Prime numbers? → Sieve of Eratosthenes
   ├─ GCD/LCM? → Euclidean Algorithm
   ├─ Modular arithmetic? → Math
   └─ Bit operations? → Bit Manipulation
```

---

## 3. Pattern Matching Checklist by Data Structure

### **Arrays/Lists**
- [ ] **Two Pointers** — sorted array, finding pairs, valid sequences
  - *Keywords*: "sorted", "pair", "container", "trap", "remove duplicates"
  - *Check*: Do you need O(1) space? Are elements positioned meaningfully?
  
- [ ] **Sliding Window** — contiguous elements, max/min, longest/shortest
  - *Keywords*: "substring", "subarray", "window", "longest", "shortest"
  - *Check*: Is the answer a contiguous sequence? Fixed or variable window size?
  
- [ ] **Binary Search** — sorted array, finding position or value
  - *Keywords*: "sorted", "rotated", "find target", "search position"
  - *Check*: Is data sorted? Can you eliminate half the search space?
  
- [ ] **Prefix Sum** — range queries, subarray sum
  - *Keywords*: "sum", "range", "subarray", "equal partition"
  - *Check*: Multiple range sum queries? Preprocessing helpful?
  
- [ ] **Hash Map** — frequency, grouping, finding pairs
  - *Keywords*: "first", "duplicate", "count", "group", "anagram"
  - *Check*: Need O(1) lookup? Counting occurrences?

---

### **Strings**
- [ ] **Sliding Window** — substring patterns, character constraints
  - *Keywords*: "substring", "anagram", "window", "length k"
  - *Check*: Fixed or variable window? Need exact match or contains?
  
- [ ] **Two Pointers** — palindromes, reversing, comparing
  - *Keywords*: "palindrome", "valid", "reverse", "symmetric"
  - *Check*: Checking from both ends? Mirror relationship?
  
- [ ] **Backtracking** — generate patterns, permutations, combinations
  - *Keywords*: "all", "permutation", "combination", "pattern"
  - *Check*: Generating vs. checking? Need all solutions?
  
- [ ] **DP** — string matching, longest sequences
  - *Keywords*: "longest", "edit distance", "match", "subsequence"
  - *Check*: Overlapping subproblems? Optimal substructure?

---

### **Trees**
- [ ] **DFS (Recursion)** — path problems, validation, counting
  - *Keywords*: "path", "sum", "valid", "count paths"
  - *Check*: Parent→child dependency? Returning values from children?
  
- [ ] **BFS (Queue)** — level-order, closest node, shortest path
  - *Keywords*: "level", "distance", "closest", "shortest path"
  - *Check*: Shortest path? Level-by-level processing?
  
- [ ] **Morris/Iterator** — O(1) space traversal, in-order without recursion
  - *Keywords*: "O(1) space", "in-order traversal"
  - *Check*: Strict space constraint? No recursion allowed?
  
- [ ] **Segment Tree / Binary Indexed Tree** — range queries, updates
  - *Keywords*: "range sum", "update", "query"
  - *Check*: Multiple queries on ranges? Both updates and queries?

---

### **Graphs**
- [ ] **DFS** — connected components, cycles, topological sort
  - *Keywords*: "connected", "cycle", "path", "component"
  - *Check*: Need to explore fully? Detecting cycles?
  
- [ ] **BFS** — shortest path (unweighted), level-order
  - *Keywords*: "shortest", "distance", "level"
  - *Check*: Unweighted graph? Shortest path needed?
  
- [ ] **Dijkstra** — shortest path (weighted), single source
  - *Keywords*: "shortest", "weighted", "distance"
  - *Check*: Weighted edges? Finding shortest path from one source?
  
- [ ] **Union-Find** — connected components, cycles, MST prep
  - *Keywords*: "connected", "parent", "rank", "component"
  - *Check*: Multiple merge/find queries? Dynamic connectivity?
  
- [ ] **Topological Sort** — dependency ordering, cycle detection
  - *Keywords*: "order", "prerequisites", "dependency"
  - *Check*: Dependencies between nodes? Directed graph?

---

### **2D Grids/Matrices**
- [ ] **DFS/BFS** — path finding, flood fill, connected regions
  - *Keywords*: "island", "flood fill", "path", "visited"
  - *Check*: 4-directional or 8-directional? Need all reachable cells?
  
- [ ] **Binary Search** — 2D matrix searching
  - *Keywords*: "sorted", "search", "target"
  - *Check*: Each row sorted? Each column sorted?
  
- [ ] **DP** — path counting, maximum path
  - *Keywords*: "path", "count", "maximum", "minimum"
  - *Check*: Multiple ways to reach a cell? Optimal substructure?

---

## 4. Pattern Verification Questions

### For Two Pointers:
- [ ] Is the array sorted or can you sort it?
- [ ] Are you looking for a pair/pair sum target?
- [ ] Can you move pointers based on comparison?
- [ ] Does order matter for the output?

### For Sliding Window:
- [ ] Is the answer a contiguous subarray/substring?
- [ ] Can you expand and contract the window?
- [ ] Do you need exact matches or character conditions?
- [ ] Can you track state with a hash map in the window?

### For Binary Search:
- [ ] Is data sorted or can you determine ordering?
- [ ] Can you eliminate half the search space each step?
- [ ] Can you define a condition to check mid-point?
- [ ] Are you searching for exact value or boundary?

### For Dynamic Programming:
- [ ] Does the problem have overlapping subproblems?
- [ ] Can you express current state using previous states?
- [ ] Can you define a clear recurrence relation?
- [ ] Is memoization sufficient or do you need tabulation?

### For Backtracking:
- [ ] Do you need ALL solutions or just one?
- [ ] Can you prune invalid branches early?
- [ ] Can you represent the state to explore?
- [ ] Is there a clear base case?

### For Greedy:
- [ ] Does choosing the locally optimal lead to global optimum?
- [ ] Can you prove the greedy choice is safe?
- [ ] Does the problem have optimal substructure?
- [ ] Are there counterexamples where greedy fails?

### For Union-Find:
- [ ] Are you detecting cycles or connected components?
- [ ] Is there a dynamic connectivity problem?
- [ ] Can you represent elements as a union of disjoint sets?
- [ ] Do you need path compression and union by rank for efficiency?

---

## 5. Quick Pattern Identification Flowchart

```
Start with the problem statement
↓
[Question 1: What type of data structure?]
├─ Array/List/String? → Go to section 3 (Arrays) or 3 (Strings)
├─ Tree? → Go to section 3 (Trees)
├─ Graph? → Go to section 3 (Graphs)
└─ Matrix/2D Grid? → Go to section 3 (2D Grids)

↓
[Question 2: What's the main task?]
├─ Finding/Searching? → Binary Search, Hash Map, Two Pointers
├─ Traversing? → DFS, BFS
├─ Optimizing? → DP, Greedy
├─ Generating? → Backtracking
└─ Counting? → DP, Combination, Hash Map

↓
[Question 3: Constraints hint?]
├─ Sorted data? → Binary Search, Two Pointers
├─ O(1) extra space? → Two Pointers, In-place
├─ O(n) time required? → Single pass, Streaming (Sliding Window)
├─ Multiple queries? → Preprocessing (Prefix Sum, Segment Tree)
└─ All solutions? → Backtracking, DFS

↓
Verify with Pattern Verification Questions (Section 4)
↓
Code & Test
```

---

## 6. Pattern Priority Order

When you're stuck, try patterns in this order:

### Priority 1 (Try First)
1. **Hash Map / Hash Set** — Simple, fast, solves many problems
2. **Two Pointers** — Works for sorted arrays, pairs
3. **Sliding Window** — Works for contiguous sequences
4. **DFS/BFS** — Works for any graph/tree structure

### Priority 2 (If Priority 1 Fails)
5. **Binary Search** — If data is sorted or answer is searchable
6. **Sorting + Greedy** — Often works for optimization
7. **Prefix Sum** — For range queries
8. **Union-Find** — For connectivity problems

### Priority 3 (Last Resort / Complex)
9. **Dynamic Programming** — Most versatile but hardest
10. **Backtracking** — For generating all solutions
11. **Advanced algorithms** — Dijkstra, Topological Sort, Segment Trees

---

## 7. Common Interview Patterns Quick Reference

| Pattern | Best For | Time | Space | Difficulty |
|---------|----------|------|-------|------------|
| Hash Map | Counting, grouping, lookups | O(n) | O(n) | ⭐ |
| Two Pointers | Sorted arrays, pairs | O(n) | O(1) | ⭐ |
| Sliding Window | Subarrays, substrings | O(n) | O(k) | ⭐⭐ |
| Binary Search | Sorted arrays, boundaries | O(log n) | O(1) | ⭐⭐ |
| DFS | Trees, graphs, paths | O(V+E) | O(h) | ⭐⭐ |
| BFS | Shortest path (unweighted) | O(V+E) | O(V) | ⭐⭐ |
| Prefix Sum | Range queries | O(n) setup | O(n) | ⭐⭐ |
| DP | Optimization with subproblems | Varies | Varies | ⭐⭐⭐ |
| Backtracking | All solutions, permutations | O(n!) | O(n) | ⭐⭐⭐ |
| Union-Find | Components, cycles | O(α(n)) | O(n) | ⭐⭐ |

---

## 8. Real Interview Example

**Problem:** "Find all unique pairs in a sorted array that sum to a target."

### Following the Framework:

**Step 1: Initial Analysis**
- Input: Sorted array, target sum
- Output: Pairs of indices/values
- Constraint: Array is sorted
- Unique pairs ✓

**Step 2: Decision Tree**
- "Is it about searching/finding?" → Yes
- "Finding target with 2 elements?" → Yes
- **→ Two Pointers likely**

**Step 3: Pattern Verification**
- [ ] Sorted array? ✓ Yes
- [ ] Looking for pairs? ✓ Yes
- [ ] Can move pointers on comparison? ✓ Yes
- [ ] **Verified: Two Pointers**

**Step 4: Backup Pattern**
- If duplicates are problematic → Add Hash Set to skip duplicates
- **Backup: Hash Map approach** (store complements)

**Step 5: Implementation & Testing**
- Code the two-pointer solution
- Test with edge cases (duplicates, no pairs found, negative numbers)

---

## 9. Pattern Recognition Tips

### Red Flags That Help You Identify
- **"sorted"** → Binary Search, Two Pointers
- **"substring/subarray"** → Sliding Window, Two Pointers
- **"all"/"every"** → Backtracking, DFS, DP
- **"maximum/minimum"** → DP, Greedy, Heap
- **"count"** → Hash Map, DP, Combination
- **"connected/component"** → DFS, BFS, Union-Find
- **"path"** → DFS, BFS, DP
- **"cycle"** → DFS, Union-Find
- **"distance/shortest"** → BFS, Dijkstra
- **"O(1) space"** → In-place algorithms, Two Pointers, Bit manipulation
- **"O(n) time"** → Single pass, Sliding Window, Hash Map

### Mental Checklist Before Coding
1. [ ] Have I understood the problem correctly?
2. [ ] Have I identified the data structure?
3. [ ] Have I applied the decision tree?
4. [ ] Have I verified against pattern verification questions?
5. [ ] Can I think of a brute force first?
6. [ ] Can I optimize from brute force?
7. [ ] What are edge cases?
8. [ ] What's the space/time complexity?

---

## 10. Practice Strategy

1. **Solve 3 problems of the same pattern** to internalize it
2. **Mix patterns** — solve problems from different categories
3. **Review after solving** — note which pattern applied, why others didn't
4. **Categorize your mistakes** — track which patterns you miss
5. **Create your own examples** — write problems that fit each pattern
6. **Teach it** — explain to someone else why pattern X applies

---

## Summary

**When stuck in an interview:**
1. Ask clarifying questions (constraints, edge cases)
2. Run through the decision tree
3. Check the pattern-specific verification questions
4. Verify with another approach if time allows
5. Code, test, optimize
6. Explain your choice confidently

Remember: The pattern isn't magic—it's a **heuristic that matches problem structure to algorithm design**.
