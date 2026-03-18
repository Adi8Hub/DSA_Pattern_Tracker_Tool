# Pattern Recognition Quick Reference (One Page)

## STEP 1: Identify the Data Structure Type
- [ ] **Array/List** → Go to Array patterns
- [ ] **String** → Go to String patterns  
- [ ] **Tree** → Go to Tree patterns
- [ ] **Graph** → Go to Graph patterns
- [ ] **Matrix/2D Grid** → Go to Matrix patterns
- [ ] **Heap/Priority Queue** → Use with selection problems
- [ ] **Hash Table/Set** → Frequency, grouping, deduplication

---

## STEP 2: Identify the Task
- [ ] **Search/Find** → Binary Search, Hash Map, Two Pointers
- [ ] **Traverse/Visit** → DFS, BFS
- [ ] **Optimize (max/min/best)** → DP, Greedy, Heap
- [ ] **Count/Frequency** → Hash Map, DP, Combinatorics
- [ ] **Generate all** → Backtracking, Recursion
- [ ] **Modify/Reorder** → Sorting, Two Pointers, In-place
- [ ] **Connect/Group** → Union-Find, Hash Map, DFS/BFS

---

## STEP 3: Check Constraints (These are Pattern Hints!)
- [ ] Data is **sorted** → **Try: Binary Search, Two Pointers**
- [ ] Need **O(1) space** → **Try: Two Pointers, In-place, Bit manipulation**
- [ ] Need **O(n) time** → **Try: Single pass, Sliding Window, Hash Map**
- [ ] **Duplicates** present → **Try: Hash Set, Two Pointers with skip, DP**
- [ ] Multiple **range queries** → **Try: Prefix Sum, Segment Tree, Sparse Table**
- [ ] Need **all solutions** → **Try: Backtracking, DFS, Combinations**
- [ ] Need **optimal substructure** → **Try: DP, Greedy**

---

## ARRAY/LIST PATTERNS

| Pattern | When to Use | Keywords | Quick Test |
|---------|------------|----------|-----------|
| **Two Pointers** | Pairs, validation, removal | sorted, pair, container, trap, remove | Sorted array + target sum? |
| **Sliding Window** | Contiguous, max/min, longest | substring, window, longest, shortest | Contiguous answer + char constraints? |
| **Binary Search** | Sorted arrays, boundaries | sorted, rotated, search, target | Can you eliminate half search space? |
| **Hash Map** | Frequency, pairs, grouping | first, duplicate, count, anagram | Need O(1) lookups? |
| **Prefix Sum** | Range sums, cumulative | sum, range, subarray, partition | Multiple range queries? |

---

## STRING PATTERNS

| Pattern | When to Use | Keywords | Quick Test |
|---------|------------|----------|-----------|
| **Sliding Window** | Substrings, patterns | substring, anagram, window, length k | Fixed/variable window substring? |
| **Two Pointers** | Palindromes, reversal | palindrome, valid, reverse, symmetric | Comparing from both ends? |
| **Backtracking** | Generate patterns | all, permutation, combination, pattern | Generating vs. checking? |
| **DP** | String matching | longest, edit distance, subsequence | Overlapping subproblems? |

---

## TREE PATTERNS

| Pattern | When to Use | Keywords | Quick Test |
|---------|------------|----------|-----------|
| **DFS (Recursion)** | Paths, validation, counting | path, sum, valid, count, ancestor | Parent→child dependency? |
| **BFS (Queue)** | Level-order, distance | level, distance, closest, shortest | Need level-by-level? |
| **Morris Traversal** | O(1) space, in-order | O(1) space, in-order, no recursion | Strict space constraint? |
| **Segment Tree** | Range queries, updates | range sum, update, query, interval | Multiple queries + updates? |

---

## GRAPH PATTERNS

| Pattern | When to Use | Keywords | Quick Test |
|---------|------------|----------|-----------|
| **DFS** | Components, cycles, paths | connected, cycle, path, component | Exploring fully? |
| **BFS** | Shortest path (unweighted) | shortest, distance, level | Unweighted shortest path? |
| **Dijkstra** | Shortest path (weighted) | shortest, weighted, distance | Weighted edges? Single source? |
| **Union-Find** | Components, cycles, MST | connected, parent, cycle, component | Dynamic connectivity? Merge queries? |
| **Topological Sort** | Dependencies, ordering | order, prerequisites, dependency | Directed graph with dependencies? |

---

## MATRIX/2D GRID PATTERNS

| Pattern | When to Use | Keywords | Quick Test |
|---------|------------|----------|-----------|
| **DFS/BFS** | Regions, flood fill, paths | island, flood fill, path, visited | Connected regions? 4/8-directional? |
| **Binary Search** | Sorted matrix | sorted, search, target, row/col sorted | Each row/column sorted? |
| **DP** | Path counting, costs | path, count, maximum, minimum | Multiple ways to reach cell? |

---

## OPTIMIZATION PATTERNS

| Pattern | When to Use | Keywords | Quick Test |
|---------|------------|----------|-----------|
| **Dynamic Programming** | Optimal substructure | longest, maximum, minimum, count | Overlapping subproblems + optimal substructure? |
| **Greedy** | Local optimal = global | maximum, minimum, earliest, latest | Does greedy choice always work? |
| **Backtracking** | Exhaustive search | all, permutation, combination, subset | Need all solutions? Can you prune? |
| **Heap/Priority Queue** | K elements, median | K, heap, median, max/min | Selecting K elements? Need ordering? |

---

## VERIFICATION CHECKLIST (Before Coding!)

### If you chose **Two Pointers**, verify:
- [ ] Is array sorted OR can pointers guide you?
- [ ] Are you comparing/matching from specific directions?
- [ ] Can you move left → right or both directions?

### If you chose **Sliding Window**, verify:
- [ ] Is the answer a **contiguous** subarray/substring?
- [ ] Can you expand/contract window based on validity?
- [ ] Can you track state with hash/counter?

### If you chose **Binary Search**, verify:
- [ ] Is data sorted OR does a property hold over range?
- [ ] Can you eliminate half the space per iteration?
- [ ] Can you define a valid/invalid condition?

### If you chose **DP**, verify:
- [ ] Does problem have **overlapping subproblems**?
- [ ] Can you express current state from previous states?
- [ ] Can you write a **clear recurrence relation**?

### If you chose **Backtracking**, verify:
- [ ] Do you need **ALL** solutions (not just one)?
- [ ] Can you **prune** invalid branches early?
- [ ] Can you represent the exploration state?
- [ ] Is there a clear base case?

### If you chose **DFS/BFS**, verify:
- [ ] Is it a graph or tree problem?
- [ ] Do you need **all neighbors** or **shortest path**?
- [ ] Does it have **cycles** (use visited set for DFS)?

### If you chose **Union-Find**, verify:
- [ ] Are you detecting cycles or components?
- [ ] Is there **dynamic connectivity**?
- [ ] Do you need path compression + union by rank?

---

## PATTERN SELECTION PRIORITY

**Try in this order if stuck:**

1️⃣ **Hash Map** (simplest, covers many cases)
2️⃣ **Two Pointers** (sorted data, pairs)
3️⃣ **Sliding Window** (contiguous sequences)
4️⃣ **Binary Search** (if data is sorted)
5️⃣ **DFS/BFS** (any graph/tree)
6️⃣ **Sorting + Greedy** (optimization without DP)
7️⃣ **DP** (if above fails, check for subproblems)
8️⃣ **Backtracking** (if you need all solutions)

---

## RED FLAG KEYWORDS → PATTERNS

```
"sorted"               → Binary Search, Two Pointers
"substring/subarray"   → Sliding Window, Two Pointers
"all/every"            → Backtracking, DFS, DP
"maximum/minimum"      → DP, Greedy, Heap
"count"                → Hash Map, DP
"connected/component"  → DFS, BFS, Union-Find
"path"                 → DFS, BFS, DP
"cycle"                → DFS, Union-Find
"distance/shortest"    → BFS, Dijkstra
"pair/sum"             → Two Pointers, Hash Map
"O(1) space"           → Two Pointers, In-place
"O(n) time"            → Single pass, Sliding Window
"duplicate"            → Hash Map, Two Pointers
"unique"               → Hash Set, DP
"permutation"          → Backtracking
"combination"          → Backtracking, DP
"first/last"           → Hash Map, Two Pointers
```

---

## QUICK EXAMPLE WALKTHROUGH

**Problem:** "Find longest substring without repeating characters"

1. **Data structure:** String ✓
2. **Task:** Find longest (contiguous) ✓
3. **Keywords:** "longest substring" ✓
4. **Pattern hint:** Contiguous + constraint = **Sliding Window**
5. **Verify:** 
   - Is answer contiguous? Yes ✓
   - Can expand/contract window? Yes ✓
   - Can track state (seen chars)? Yes ✓
6. **Pattern confirmed:** Sliding Window ✓

---

## BEFORE YOU CODE

- [ ] Did I restate the problem correctly?
- [ ] Did I identify data structure and task?
- [ ] Did I apply the decision tree?
- [ ] Did I verify the pattern matches?
- [ ] Did I think of edge cases?
- [ ] Did I estimate time/space complexity?
- [ ] Could I explain why this pattern applies?

**Once you can answer all above → Code with confidence!**
