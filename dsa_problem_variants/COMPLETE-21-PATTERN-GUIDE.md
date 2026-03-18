# 🌳 COMPLETE 21-PATTERN DSA GUIDE (Including All Tree Patterns)

## COMPREHENSIVE PATTERN COLLECTION

You are right - the original 14 patterns were missing critical **tree-specific patterns**. I've now created a complete **21-pattern collection** that covers all essential DSA patterns including:

- ✅ 14 Original patterns (arrays, strings, graphs, general)
- ✅ 7 New tree patterns (BST, traversals, paths, advanced trees)

---

## THE COMPLETE 21 PATTERNS

### GROUP 1: ARRAY & STRING PATTERNS (5 patterns)

#### 1. **Sliding Window** ⭐ Most Common
- **Use**: Contiguous subarray/substring problems
- **Time**: O(n) | **Space**: O(1-k)
- **Problems**: Max/min in subarray, longest substring, sliding average
- **Keywords**: "window", "contiguous", "subarray", "substring"

#### 2. **Two Pointers** ⭐ Very Common
- **Use**: Sorted array pairs, palindromes, partitioning
- **Time**: O(n) | **Space**: O(1)
- **Problems**: Two sum, container with water, valid palindrome
- **Keywords**: "sorted", "pairs", "two sum", "opposite ends"

#### 3. **Prefix Sum** ⭐ Common
- **Use**: Range sum queries, subarray sum equals k
- **Time**: O(n) setup, O(1) query | **Space**: O(n)
- **Problems**: Range sum, subarray count, 2D prefix sum
- **Keywords**: "range sum", "sum of subarray", "query"

#### 4. **Monotonic Stack** ⭐ Intermediate
- **Use**: Next greater/smaller element, histogram problems
- **Time**: O(n) | **Space**: O(n)
- **Problems**: Daily temperatures, largest rectangle, next greater element
- **Keywords**: "next greater", "next smaller", "monotonic", "span"

#### 5. **Binary Search** ⭐ Very Common
- **Use**: Sorted array searching, searching on answer
- **Time**: O(log n) | **Space**: O(1)
- **Problems**: Search rotated array, find target, capacity to ship
- **Keywords**: "sorted", "find", "binary search", "monotonic"

---

### GROUP 2: LINKED LIST PATTERNS (1 pattern)

#### 6. **Fast & Slow Pointers** ⭐ Common
- **Use**: Cycle detection, find middle, Kth from end
- **Time**: O(n) | **Space**: O(1)
- **Problems**: Linked list cycle, find middle, Kth node
- **Keywords**: "cycle", "middle", "fast/slow", "tortoise/hare"

---

### GROUP 3: GRAPH PATTERNS (2 patterns)

#### 7. **BFS (Breadth-First Search)** ⭐ Very Common
- **Use**: Shortest path (unweighted), level-order, distance
- **Time**: O(V+E) | **Space**: O(V)
- **Problems**: Binary tree level order, shortest path, rotten oranges
- **Keywords**: "shortest path", "distance", "level-order", "nearest"

#### 8. **DFS (Depth-First Search)** ⭐ Very Common
- **Use**: All paths, components, cycles, topological
- **Time**: O(V+E) | **Space**: O(H)
- **Problems**: All paths, connected components, island problems
- **Keywords**: "all paths", "components", "connectivity", "exploration"

---

### GROUP 4: GENERAL ALGORITHMIC PATTERNS (3 patterns)

#### 9. **Dynamic Programming** ⭐ Very Common
- **Use**: Optimization with overlapping subproblems
- **Time**: O(n²) typical | **Space**: O(n)
- **Problems**: Climbing stairs, max product, coin change, house robber
- **Keywords**: "overlapping subproblems", "optimal substructure", "memo"

#### 10. **Backtracking** ⭐ Common
- **Use**: Generate all solutions, permutations, combinations
- **Time**: O(n!-2ⁿ) | **Space**: O(n)
- **Problems**: Permutations, N-queens, subsets, word ladder
- **Keywords**: "all solutions", "permutations", "combinations", "undo"

#### 11. **Heap / Priority Queue** ⭐ Common
- **Use**: Top K elements, median, merging sorted lists
- **Time**: O(n log k) | **Space**: O(k)
- **Problems**: Kth largest, median finder, merge K lists
- **Keywords**: "top K", "streaming", "median", "priority"

---

### GROUP 5: CONNECTIVITY PATTERNS (1 pattern)

#### 12. **Union-Find (DSU)** ⭐ Intermediate
- **Use**: Dynamic connectivity, components, cycle detection
- **Time**: O(α(n)) ≈ O(1) | **Space**: O(n)
- **Problems**: Connected components, redundant connection, equations
- **Keywords**: "connectivity", "components", "union", "find"

---

### GROUP 6: STRING/TREE PATTERNS (1 pattern)

#### 13. **Trie (Prefix Trees)** ⭐ Intermediate
- **Use**: Prefix search, word dictionary, autocomplete
- **Time**: O(L) per op, O(N·L) space | **Space**: O(N·L)
- **Problems**: Implement trie, word search II, autocomplete
- **Keywords**: "prefix", "word search", "dictionary", "autocomplete"

---

### GROUP 7: GRAPH-SPECIFIC PATTERNS (1 pattern)

#### 14. **Topological Sort** ⭐ Intermediate
- **Use**: Task scheduling, course prerequisites, dependency ordering
- **Time**: O(V+E) | **Space**: O(V+E)
- **Problems**: Course schedule, alien dictionary, build order
- **Keywords**: "ordering", "prerequisite", "dependency", "DAG"

---

## 🌳 GROUP 8: TREE PATTERNS (7 NEW PATTERNS)

### **15. Binary Search Tree (BST) Operations** ⭐ Very Common

**Identification Signals**:
- Search, Insert, Delete in ordered tree
- Validate BST
- Kth smallest/largest
- Keywords: "BST", "binary search tree", "ordered tree", "successor"

**When to Use**:
- Need to maintain sorted order with fast lookup
- O(log n) average case operations
- Perfect for range queries
- Java TreeMap/TreeSet use Red-Black BST

**Time Complexity**: O(log n) avg, O(n) worst  
**Space Complexity**: O(h) where h = height

**Key Operations**:
- Search: Recursively left or right based on comparison
- Insert: Find leaf position and add
- Delete: Handle 3 cases (leaf, 1 child, 2 children)
- Validate: Ensure each node fits min-max range

**Problems**:
- Validate BST
- Kth Smallest Element
- Lowest Common Ancestor
- Insert/Delete in BST

---

### **16. Tree Traversals** ⭐ Very Common

**Identification Signals**:
- Visit all nodes in tree
- DFS: Inorder, Preorder, Postorder
- BFS: Level-order traversal
- Keywords: "traverse", "visit all", "order of nodes", "serialize"

**When to Use**:
- Need specific ordering of node visits
- Inorder = sorted order for BST
- Preorder = copy tree or serialize
- Postorder = delete tree

**Time Complexity**: O(n)  
**Space Complexity**: O(h) recursive, O(n) iterative

**Types**:
1. **Inorder** (Left-Root-Right) → Sorted for BST
2. **Preorder** (Root-Left-Right) → Serialization
3. **Postorder** (Left-Right-Root) → Deletion, building tree
4. **Level-order** (BFS) → BFS traversal
5. **Morris Traversal** → O(1) space (Pattern 21)

**Use Cases**:
- Inorder on BST gives sorted sequence
- Preorder useful for constructing copy
- Postorder for post-processing (e.g., size, height)
- Level-order for line-by-line processing

**Problems**:
- Binary Tree Inorder Traversal
- Level Order Traversal
- Serialize/Deserialize Tree
- Construct Tree from Preorder+Inorder

---

### **17. Tree Path Problems (LCA & More)** ⭐ Very Common

**Identification Signals**:
- Path sum, path to leaf
- Lowest Common Ancestor (LCA)
- Diameter, height, distance
- Keywords: "path", "ancestor", "distance", "diameter", "route"

**When to Use**:
- Finding specific paths in tree
- LCA: Most common ancestor of 2 nodes
- Calculate distances between nodes
- Sum paths from root to leaf
- Maximum path problems

**Time Complexity**: O(n)  
**Space Complexity**: O(h)

**Key Concepts**:
- **LCA**: Node that is ancestor of both p and q
- **Path Sum**: Sum of values on path from root to node
- **Diameter**: Longest path between any 2 nodes
- **Distance**: Number of edges between nodes

**Problems**:
- Lowest Common Ancestor
- Path Sum
- Diameter of Binary Tree
- Maximum Path Sum
- Binary Tree Paths
- All Paths Root to Leaf
- Vertical Order Traversal

---

### **18. Segment Trees** ⭐ Intermediate/Advanced

**Identification Signals**:
- Range sum/min/max queries
- Dynamic range queries with updates
- Keywords: "range query", "interval", "segment", "update", "RMQ"

**When to Use**:
- Need O(log n) range queries on array
- Range queries with point updates
- Range updates (with lazy propagation)
- More powerful than Prefix Sum for updates
- Not for simple static queries (use Prefix Sum instead)

**Time Complexity**: O(log n) query, O(log n) update  
**Space Complexity**: O(n)

**Key Concepts**:
- Build tree in O(n)
- Query any range in O(log n)
- Update any point in O(log n)
- Supports lazy propagation for range updates

**Variants**:
- **Sum Segment Tree**: For range sum queries
- **Min/Max Segment Tree**: For range min/max
- **Lazy Propagation**: For range updates

**Problems**:
- Range Sum Query - Mutable
- Range Minimum Query
- Count Inversions
- Merge Sorted Array (using Segment Tree)

**When to Use vs Fenwick Tree**:
- Use Segment Tree for: Range updates, non-sum queries
- Use Fenwick Tree for: Simpler implementation, sum queries only

---

### **19. Fenwick Tree (Binary Indexed Tree)** ⭐ Intermediate

**Identification Signals**:
- Prefix sum queries
- Point updates
- Keywords: "prefix sum", "range sum", "update", "cumulative"

**When to Use**:
- Simpler than Segment Tree
- O(log n) prefix sum and point update
- Less space than Segment Tree
- Better cache locality
- Can be extended with coordinate compression

**Time Complexity**: O(log n) both query and update  
**Space Complexity**: O(n)

**Key Concepts**:
- Uses bit manipulation: `i & (-i)` to get lowest set bit
- 1-indexed arrays
- More elegant than Segment Tree for this use case
- Perfect for range sum queries

**How it Works**:
- Each node stores sum of power-of-2 elements
- Query: Remove lowest bit repeatedly, add values
- Update: Add lowest bit repeatedly, update values

**Problems**:
- Range Sum Query - Mutable
- Count Inversions
- Coordinate Compression problems
- 2D Fenwick Tree (for 2D range queries)

**vs Prefix Sum**:
- Prefix Sum: O(1) query but O(n) update
- Fenwick: O(log n) both query and update
- Choose Fenwick when many updates needed

---

### **20. Balanced BST (AVL / Red-Black)** ⭐ Intermediate

**Identification Signals**:
- Self-balancing binary search tree
- Guarantee O(log n) operations
- AVL: strict height balance
- Red-Black: color-based balance
- Used by TreeMap (Java), std::map (C++)
- Keywords: "balance", "rotation", "AVL", "Red-Black"

**When to Use**:
- Need guaranteed O(log n) operations
- Many insertions/deletions
- Use TreeMap/TreeSet from standard library (don't implement)
- Understanding rotations important for interviews

**Time Complexity**: O(log n) guaranteed  
**Space Complexity**: O(n)

**Types**:
1. **AVL Tree**: |height(left) - height(right)| ≤ 1
   - Strict balance requirement
   - More rotations during insert/delete
   - Better for read-heavy workloads

2. **Red-Black Tree**: 5 color properties
   - Looser balance than AVL
   - Fewer rotations
   - Used in Java collections
   - Better for write-heavy workloads

3. **B-Tree**: Multiple keys per node
   - Used in databases
   - Optimized for disk access patterns
   - Not typically in coding interviews

**Rotations**:
- Left rotation: Move right child up
- Right rotation: Move left child up
- Double rotations: For left-right and right-left cases

**Problems**:
- Design BST
- Insert/Delete in BST (validate balance)
- AVL Tree Operations
- Most real problems use TreeMap/TreeSet directly

---

### **21. Morris Traversal** ⭐ Advanced/Interview Trick

**Identification Signals**:
- Tree traversal without recursion
- O(1) space complexity
- Uses threaded tree technique
- Keywords: "in-place", "O(1) space", "no recursion"

**When to Use**:
- Need O(1) space tree traversal
- Cannot use recursion (stack limit)
- Interview trick for demonstrating advanced knowledge
- Not commonly used in production

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

**How it Works**:
1. Create temporary links (threads) in the tree
2. Use threads to navigate without stack
3. Remove threads after visiting (restore tree)
4. Inorder, Preorder, Postorder all possible

**Key Idea**:
- If no left subtree, go right
- If left subtree exists, find predecessor (rightmost node in left subtree)
- Use predecessor's right pointer as thread to current

**Problems**:
- Binary Tree Inorder Traversal (O(1) space)
- Flatten Binary Tree to Linked List
- Recover Binary Search Tree

**Note**: This is usually a follow-up question: "Can you do it in O(1) space?"

---

## PATTERN ORGANIZATION BY FREQUENCY

### 🔴 MUST KNOW (Appear 30%+ of interviews):
1. Sliding Window
2. Two Pointers
3. Binary Search
4. DFS / BFS
5. Dynamic Programming
6. Binary Search Tree Operations
7. Tree Traversals
8. Tree Path Problems

### 🟡 SHOULD KNOW (Appear 15-30%):
9. Backtracking
10. Heap / Priority Queue
11. Union-Find
12. Prefix Sum
13. Trie
14. Topological Sort
15. Balanced BST
16. Segment Trees

### 🟢 NICE TO KNOW (Appear 5-15%):
17. Monotonic Stack
18. Fast & Slow Pointers
19. Fenwick Trees
20. Morris Traversal

---

## TREE PATTERNS - WHEN TO USE DECISION TREE

### Data Structure is a TREE?

```
Is it a TREE?
  ├─ YES
  │  ├─ Need to TRAVERSE nodes?
  │  │  ├─ All nodes in specific order?
  │  │  │  └─→ Tree Traversals (Pattern 16)
  │  │  ├─ Find path between nodes?
  │  │  │  └─→ DFS/BFS (Patterns 7-8)
  │  │  └─ Find specific paths/values?
  │  │     └─→ Tree Path Problems (Pattern 17)
  │  │
  │  ├─ Is it a BINARY SEARCH TREE?
  │  │  ├─ Need to insert/search/delete?
  │  │  │  └─→ BST Operations (Pattern 15)
  │  │  ├─ Need guaranteed O(log n)?
  │  │  │  └─→ Balanced BST (Pattern 20)
  │  │  └─ Need O(1) space traversal?
  │  │     └─→ Morris Traversal (Pattern 21)
  │  │
  │  └─ Is it a GENERAL TREE?
  │     └─ Use DFS/BFS + Traversals
  │
  └─ Is it PREFIX MATCHING?
     └─→ Trie (Pattern 13)
```

---

## ARRAY/RANGE QUERY PATTERNS

```
Need ARRAY/RANGE queries?
  ├─ Simple range SUM with NO updates?
  │  └─→ Prefix Sum (Pattern 3) - O(1) query
  │
  ├─ Need point updates + range queries?
  │  ├─ Only SUM queries?
  │  │  └─→ Fenwick Tree (Pattern 19) - O(log n)
  │  └─ More complex (min/max, range update)?
  │     └─→ Segment Tree (Pattern 18) - O(log n)
  │
  ├─ Need CONTIGUOUS subarray?
  │  └─→ Sliding Window (Pattern 1)
  │
  ├─ Array is SORTED?
  │  ├─ Binary Search?
  │  │  └─→ Binary Search (Pattern 5) - O(log n)
  │  ├─ Pairs/combinations?
  │  │  └─→ Two Pointers (Pattern 2) - O(n)
  │  └─ Pairs with sorted constraint?
  │     └─→ Two Pointers or Hash Map
  │
  └─ Next greater/smaller element?
     └─→ Monotonic Stack (Pattern 4)
```

---

## SUMMARY TABLE

| # | Pattern | Type | Time | Space | Frequency |
|----|---------|------|------|-------|-----------|
| 1 | Sliding Window | Array | O(n) | O(1) | Very High |
| 2 | Two Pointers | Array | O(n) | O(1) | Very High |
| 3 | Prefix Sum | Array | O(n) | O(n) | High |
| 4 | Monotonic Stack | Array | O(n) | O(n) | Medium |
| 5 | Binary Search | Array | O(log n) | O(1) | Very High |
| 6 | Fast & Slow Pointers | LinkedList | O(n) | O(1) | Medium |
| 7 | BFS | Graph | O(V+E) | O(V) | Very High |
| 8 | DFS | Graph | O(V+E) | O(H) | Very High |
| 9 | Dynamic Programming | General | O(n²) | O(n) | Very High |
| 10 | Backtracking | General | O(n!) | O(n) | High |
| 11 | Heap/Priority Queue | General | O(nlogk) | O(k) | High |
| 12 | Union-Find | Graph | O(α(n)) | O(n) | Medium |
| 13 | Trie | String | O(L) | O(N·L) | Medium |
| 14 | Topological Sort | Graph | O(V+E) | O(V) | Medium |
| **15** | **BST Operations** | **Tree** | **O(logn)** | **O(h)** | **Very High** |
| **16** | **Tree Traversals** | **Tree** | **O(n)** | **O(h)** | **Very High** |
| **17** | **Tree Paths (LCA)** | **Tree** | **O(n)** | **O(h)** | **Very High** |
| **18** | **Segment Trees** | **Tree** | **O(logn)** | **O(n)** | **High** |
| **19** | **Fenwick Trees** | **Tree** | **O(logn)** | **O(n)** | **High** |
| **20** | **Balanced BST** | **Tree** | **O(logn)** | **O(n)** | **Medium** |
| **21** | **Morris Traversal** | **Tree** | **O(n)** | **O(1)** | **Low** |

---

## NEXT STEPS

1. **Review** this 21-pattern guide
2. **Study** tree patterns (15-21) thoroughly
3. **Update** your DSA cheatsheet to include all 21
4. **Practice** tree-heavy problems:
   - LeetCode: Filter by "tree" data structure
   - Focus on: BST, Traversals, LCA, Path problems
5. **Master** tree pattern recognition
6. **Combine** with other patterns (DFS on tree, DP on tree, etc.)

---

## INTERVIEW TIPS

✅ **Always ask**: "Is this a tree or just graph?"  
✅ **Check**: "Is it a BST or just binary tree?"  
✅ **Consider**: "Can I modify the tree during traversal?"  
✅ **Optimize**: "Can I do this in O(1) space?" (Morris)  
✅ **Pattern mix**: Trees + DP, Trees + DFS, etc.  

---

*Complete 21-Pattern DSA Guide | Updated with all Tree Patterns | Ready for Google SWE L4 Interview*
