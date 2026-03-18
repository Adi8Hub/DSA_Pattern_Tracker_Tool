# Pattern Recognition Questionnaire
## Self-Assessment Questions to Ask During Interviews

---

## PHASE 1: PROBLEM UNDERSTANDING (Before Pattern Hunting)

### Basic Comprehension Questions
1. [ ] Can I **restate the problem in my own words** without looking at the statement?
2. [ ] What is the **input**? (type, constraints, size)
3. [ ] What is the **output**? (single value, array, count, path, all solutions)
4. [ ] What defines **success**? (exact match, optimal, all combinations, count)
5. [ ] Are there any **constraints on time or space**? (memory limit, speed requirement)
6. [ ] What **can't** I do? (modifications, extra space, recursion, etc.)

### Clarification Questions
7. [ ] Are the **elements unique** or can there be **duplicates**?
8. [ ] Can the input be **empty or null**? (edge case awareness)
9. [ ] Are the **values positive/negative/zero**? (value range matters)
10. [ ] Does **order matter** in the output?
11. [ ] Should the **input be modified** or **preserved**?
12. [ ] Are there any **special characters or constraints** on the data?

### Example/Edge Cases
13. [ ] Can I **manually solve** the given example(s)?
14. [ ] What's a **simple edge case** I should test? (empty, single element, all same)
15. [ ] What's a **complex edge case**? (large input, duplicates, mixed conditions)
16. [ ] What would be a **bad/invalid input**? (does it matter?)

---

## PHASE 2: DATA STRUCTURE IDENTIFICATION

### "What structure am I working with?"

**The Main Question:**
- [ ] Is this an **array/list**, **string**, **tree**, **graph**, **matrix**, **hash**, or **number** problem?

#### If ARRAY/LIST:
17. [ ] Is the array **sorted**?
18. [ ] Are there **duplicates**?
19. [ ] Are the **values positive/negative**?
20. [ ] Is the array **read-only** or can I **modify it**?
21. [ ] Do I need to work with **subarrays** or **indices** specifically?
22. [ ] Can I **add extra space** (hash map, auxiliary array)?
23. [ ] Is this about **searching, sorting, modifying,** or **counting**?

#### If STRING:
24. [ ] Is the string **case-sensitive**?
25. [ ] Can it have **spaces or special characters**?
26. [ ] Am I looking for **substrings, characters,** or **patterns**?
27. [ ] Is it about **matching, encoding, transformation,** or **generation**?
28. [ ] Do **duplicate characters** matter?

#### If TREE:
29. [ ] Is it a **binary tree** or **n-ary tree**?
30. [ ] Is it **balanced** or **sorted** (BST)?
31. [ ] Do I need to **visit all nodes** or **find a specific path**?
32. [ ] Am I returning a **single value, path, or count**?
33. [ ] Can I use **recursion** or must it be **iterative**?

#### If GRAPH:
34. [ ] Is it **directed or undirected**?
35. [ ] Does it have **cycles** or is it **acyclic** (DAG)?
36. [ ] Are edges **weighted or unweighted**?
37. [ ] Am I finding **paths, components, cycles,** or **ordering**?
38. [ ] Do I need **shortest path** or **any path**?

#### If MATRIX/2D GRID:
39. [ ] Are rows and columns **sorted**?
40. [ ] Can I treat it as a **flattened array**?
41. [ ] Am I looking for **connected regions, paths,** or **values**?
42. [ ] Is this **4-directional or 8-directional** movement?

---

## PHASE 3: TASK IDENTIFICATION

### "What am I trying to accomplish?"

#### SEARCHING/FINDING Questions:
43. [ ] Am I looking for a **specific value** or a **range of values**?
44. [ ] Do I need **exact match** or **closest match**?
45. [ ] Is it **single target** or **multiple targets** (pairs, triplets)?
46. [ ] Can I use **binary search** (is data sorted or property monotonic)?
47. [ ] Do I need **first/last occurrence** or **all occurrences**?

**Pattern Hints:** Binary Search, Two Pointers, Hash Map, Sliding Window

#### TRAVERSING/VISITING Questions:
48. [ ] Do I need to **visit all nodes** or **find shortest path**?
49. [ ] Is it **level-order, depth-first,** or **any order**?
50. [ ] Do I need to **track the path** or just **visit**?
51. [ ] Are there **cycles** I need to handle?
52. [ ] Do I return **all paths, shortest path,** or **single path**?

**Pattern Hints:** DFS, BFS, Recursion, Iteration

#### COUNTING/FREQUENCY Questions:
53. [ ] Am I counting **occurrences** of elements?
54. [ ] Am I counting **combinations, permutations,** or **subsequences**?
55. [ ] Do duplicates affect the count?
56. [ ] Is this about **how many ways** to do something?
57. [ ] Can I use **hash map for frequency** or do I need **DP**?

**Pattern Hints:** Hash Map, DP, Backtracking, Combinatorics

#### OPTIMIZATION (Max/Min) Questions:
58. [ ] Am I finding **global maximum/minimum** or **local**?
59. [ ] Does the problem have **optimal substructure**? (best subproblem = part of best solution)
60. [ ] Can I use **greedy** (always pick the best locally)?
61. [ ] Are there **overlapping subproblems** (solve same thing multiple times)?
62. [ ] Does order matter? (Is rearranging allowed?)

**Pattern Hints:** DP, Greedy, Heap, Sorting

#### GENERATION/PERMUTATION Questions:
63. [ ] Do I need **all solutions** or **one solution**?
64. [ ] Can I **prune invalid branches early**?
65. [ ] Is this about **permutations, combinations,** or **arrangements**?
66. [ ] Do I need to **backtrack** if path is invalid?

**Pattern Hints:** Backtracking, Recursion, DFS

#### MODIFICATION/TRANSFORMATION Questions:
67. [ ] Can I **modify the input** or must it be **unchanged**?
68. [ ] Am I **rearranging, removing,** or **updating** elements?
69. [ ] Is there an **in-place solution** available?
70. [ ] Do I need to **track changes** or just return the result?

**Pattern Hints:** Two Pointers, Sorting, In-place algorithms

#### GROUPING/PARTITIONING Questions:
71. [ ] Am I **grouping similar elements** together?
72. [ ] Are there **parent-child or equivalence relationships**?
73. [ ] Is this about **connected components or clusters**?
74. [ ] Do elements need to be **merged or separated**?

**Pattern Hints:** Union-Find, Hash Map, DFS, BFS

---

## PHASE 4: CONSTRAINT ANALYSIS

### "What do the constraints tell me?"

#### Time Complexity Hints:
72. [ ] Is **O(n²)** acceptable? (brute force might work)
73. [ ] Must it be **O(n log n)** or better? (need sorting or binary search)
74. [ ] Must it be **O(n)** single pass? (streaming, sliding window, hash map)
75. [ ] Do I have **multiple queries** that benefit from **preprocessing**? (prefix sum, segment tree)

#### Space Complexity Hints:
76. [ ] Must it be **O(1) extra space**? (in-place, two pointers, bit manipulation)
77. [ ] Can I use **O(n) extra space**? (hash map, DP table, auxiliary arrays)
78. [ ] Is **stack space** allowed (recursion)?

#### Data Properties:
79. [ ] Is data **sorted**? → Binary Search, Two Pointers
80. [ ] Is data **partially sorted** (rotated)? → Modified Binary Search
81. [ ] Are there **duplicates**? → Hash Set, DP, Two Pointers with skip
82. [ ] Is data **static or dynamic** (changing)?

#### Special Conditions:
83. [ ] Do I need **O(1) lookups**? → Hash Map/Set
84. [ ] Do I need **sequential access**? → Arrays, Linked Lists
85. [ ] Do I need **priority-based access**? → Heap, Priority Queue
86. [ ] Do I need **range queries**? → Prefix Sum, Segment Tree, Binary Indexed Tree

---

## PHASE 5: PATTERN MATCHING QUESTIONNAIRE

### Question Set 1: Is it TWO POINTERS?
87. [ ] Is the array **sorted** (or can it be)?
88. [ ] Am I looking for **pairs/triplets** with a **target**?
89. [ ] Am I checking something from **both ends** (palindrome, container)?
90. [ ] Can I move pointers based on **comparison logic**?
91. [ ] Is O(1) extra space **required**?
92. [ ] Can I solve this by comparing elements **from opposite directions**?

**✅ If YES to most → Use TWO POINTERS**

---

### Question Set 2: Is it SLIDING WINDOW?
93. [ ] Is the answer a **contiguous subarray/substring**?
94. [ ] Can I define a **valid window** based on conditions?
95. [ ] Can I **expand** the window while valid, **shrink** when invalid?
96. [ ] Can I track state using a **hash map or counter**?
97. [ ] Does the problem ask for **longest/shortest subarray/substring**?
98. [ ] Are characters/values **repeated** and I need **specific constraints**?

**✅ If YES to most → Use SLIDING WINDOW**

---

### Question Set 3: Is it BINARY SEARCH?
99. [ ] Is the input **sorted** or does a **property hold monotonically**?
100. [ ] Can I **eliminate half the search space** at each step?
101. [ ] Can I define a **condition to check** the mid-point? (valid/invalid)
102. [ ] Am I searching for a **specific value** or a **boundary**?
103. [ ] Is the search space **continuous** (can I binary search on answer)?
104. [ ] Does brute force require checking **all elements** when I can skip?

**✅ If YES to most → Use BINARY SEARCH**

---

### Question Set 4: Is it DYNAMIC PROGRAMMING?
105. [ ] Does the problem have **overlapping subproblems**? (solve same thing twice)
106. [ ] Can I express the **current state** using **previous states**?
107. [ ] Can I write a **clear recurrence relation**? (f(n) = f(n-1) + f(n-2))
108. [ ] Can I break the problem into **independent subproblems**?
109. [ ] Does the problem ask for **optimal value** (max/min/count)?
110. [ ] Is **memoization** (top-down) or **tabulation** (bottom-up) applicable?

**✅ If YES to most → Consider DYNAMIC PROGRAMMING**

---

### Question Set 5: Is it BACKTRACKING?
111. [ ] Do I need **all solutions** or just **one solution**?
112. [ ] Can I **explore candidates** by adding/removing elements?
113. [ ] Can I **prune invalid branches early** (reject partial solutions)?
114. [ ] Is this about **permutations, combinations, subsets,** or **constraints**?
115. [ ] Can I represent the state as a **partial solution** being built?
116. [ ] Is there a **clear base case** (complete solution)?

**✅ If YES to most → Use BACKTRACKING**

---

### Question Set 6: Is it DFS/BFS?
117. [ ] Is this a **tree or graph problem**?
118. [ ] Do I need to **explore all reachable nodes** from a start?
119. [ ] Am I looking for **all nodes, shortest path, or connected components**?
120. [ ] For **BFS**: Do I need **shortest path in unweighted graph** or **level-order**?
121. [ ] For **DFS**: Do I need to **explore deeply** or detect **cycles**?
122. [ ] Can I handle **cycles** with a **visited set**?

**✅ If YES to most → Use DFS/BFS**

---

### Question Set 7: Is it GREEDY?
123. [ ] Does the problem ask for **optimization** (max/min)?
124. [ ] Can I make a **locally optimal choice** at each step?
125. [ ] Does the **greedy choice always lead to global optimum**?
126. [ ] Can I think of a **counterexample** where greedy fails? (if not, likely greedy)
127. [ ] Can I **sort** elements and then greedily pick?
128. [ ] Is the problem about **scheduling, intervals, or selection**?

**✅ If YES to most (and no counterexample) → Use GREEDY**

---

### Question Set 8: Is it HASH MAP/SET?
129. [ ] Do I need **O(1) lookups** for existence or frequency?
130. [ ] Am I counting **occurrences** of elements?
131. [ ] Am I looking for **first duplicate, unique elements,** or **anagrams**?
132. [ ] Do I need to **group elements** by some property?
133. [ ] Is **order irrelevant** for the solution?
134. [ ] Can I store **complement/target values** for quick lookup?

**✅ If YES to most → Use HASH MAP/SET**

---

### Question Set 9: Is it UNION-FIND?
135. [ ] Am I detecting **connected components**?
136. [ ] Am I detecting **cycles** in an undirected graph?
137. [ ] Do I have **dynamic connectivity** queries (merge/find)?
138. [ ] Are elements grouped into **disjoint sets** that merge over time?
139. [ ] Is the problem about **equivalence relations** (which elements are related)?
140. [ ] Do I benefit from **path compression and union by rank** optimization?

**✅ If YES to most → Use UNION-FIND**

---

### Question Set 10: Is it HEAP/PRIORITY QUEUE?
141. [ ] Do I need **K largest/smallest** elements?
142. [ ] Do I need **top K frequent** elements?
143. [ ] Do I need elements in **sorted order while inserting dynamically**?
144. [ ] Do I need **median** of a stream?
145. [ ] Is this about **scheduling with priorities**?
146. [ ] Do I need **efficient max/min tracking** with **insert/delete**?

**✅ If YES to most → Use HEAP/PRIORITY QUEUE**

---

## PHASE 6: PATTERN VERIFICATION (Final Check Before Coding)

### Before you code, run through this verification:

141. [ ] Does my **chosen pattern match the problem structure**?
142. [ ] Can I **explain why this pattern applies** in one sentence?
143. [ ] Have I **verified with the pattern-specific questions** (above)?
144. [ ] Is there a **simpler pattern** I missed?
145. [ ] Is there a **backup pattern** if this approach fails?

### Complexity Verification:
146. [ ] What is the **time complexity** of my approach?
147. [ ] Does it meet the **time constraints** given?
148. [ ] What is the **space complexity**?
149. [ ] Does it meet the **space constraints** given?
150. [ ] Can I **optimize further** without changing the pattern?

### Edge Case Verification:
151. [ ] Does my solution handle **empty input**?
152. [ ] Does it handle **single element**?
153. [ ] Does it handle **duplicates** correctly?
154. [ ] Does it handle **negative numbers/special values**?
155. [ ] Does it handle **very large input**?

### Implementation Verification:
156. [ ] Can I **code this pattern without external libraries** (if required)?
157. [ ] Are there **tricky index/pointer movements** I need to be careful with?
158. [ ] Do I need to **initialize any data structures** before the loop?
159. [ ] Are there **off-by-one errors** I should watch for?
160. [ ] Should I use **recursion or iteration**? (stack overflow risk?)

---

## PHASE 7: DECISION FLOWCHART (When Stuck)

### Use these questions in order:

**Q: Can I solve it with a hash map?**
- Store frequencies, pairs, or complements?
- YES → Try Hash Map first (simplest)
- NO → Continue

**Q: Is the array sorted or can I sort it?**
- YES → Try Two Pointers or Binary Search
- NO → Continue

**Q: Is the answer a contiguous subarray/substring?**
- YES → Try Sliding Window
- NO → Continue

**Q: Is this a tree/graph problem?**
- YES → Try DFS/BFS
- NO → Continue

**Q: Do I need all solutions?**
- YES → Try Backtracking
- NO → Continue

**Q: Does the problem have overlapping subproblems?**
- YES → Try Dynamic Programming
- NO → Continue

**Q: Can I use greedy (always pick best locally)?**
- YES → Try Greedy
- NO → Likely need advanced techniques

---

## PHASE 8: Quick Decision Table

| If you're stuck between... | Ask yourself... |
|---------------------------|-----------------|
| Two Pointers vs Sliding Window | Is the answer a **contiguous** sequence? (Window = YES, Pointers = comparing ends) |
| Sliding Window vs Hash Map | Do I need **contiguity**? (Sliding = YES, Hash = NO) |
| DFS vs BFS | Do I need **shortest path** or **all paths**? (BFS = shortest, DFS = all/paths) |
| DP vs Greedy | Can I think of a **counterexample** to greedy? (Greedy fails = use DP) |
| Backtracking vs DP | Do I need **all solutions** or **optimal solution**? (All = Backtracking, Optimal = DP) |
| Union-Find vs DFS | Are there **multiple connectivity queries**? (Yes = Union-Find, No = DFS) |

---

## PHASE 9: Red Flag Keywords Questionnaire

When you see these words, what should you think?

161. [ ] **"sorted"** → Binary Search or Two Pointers?
162. [ ] **"substring/subarray"** → Sliding Window or Two Pointers?
163. [ ] **"all"/"every"** → Backtracking or DFS?
164. [ ] **"maximum/minimum"** → DP or Greedy or Heap?
165. [ ] **"count"** → Hash Map or DP or Combinatorics?
166. [ ] **"connected/component"** → DFS or BFS or Union-Find?
167. [ ] **"path"** → DFS or BFS or DP?
168. [ ] **"cycle"** → DFS or Union-Find?
169. [ ] **"distance/shortest"** → BFS or Dijkstra?
170. [ ] **"O(1) space"** → Two Pointers or In-place?
171. [ ] **"O(n) time"** → Single pass, Hash Map, or Sliding Window?
172. [ ] **"duplicate"** → Hash Map or Two Pointers?
173. [ ] **"unique"** → Hash Set or DP?
174. [ ] **"pair/target sum"** → Two Pointers or Hash Map?
175. [ ] **"K largest/smallest"** → Heap?
176. [ ] **"order matters"** → Backtracking or Permutations?

---

## PHASE 10: Final Checklist (Right Before Coding)

177. [ ] I can **restate the problem** in my own words.
178. [ ] I've identified the **data structure**.
179. [ ] I've identified the **task type**.
180. [ ] I've reviewed the **constraints**.
181. [ ] I've chosen a **pattern** and verified it.
182. [ ] I can explain **why this pattern applies**.
183. [ ] I have a **backup pattern** in mind.
184. [ ] I've thought about **edge cases**.
185. [ ] I know the **time and space complexity**.
186. [ ] I'm confident to **start coding**.

---

## SUMMARY: The Pattern Recognition Process

### Three Quick Questions That Solve Everything:

**Q1: What data structure am I working with?**
(Array, String, Tree, Graph, Matrix, Hash, Heap, etc.)

**Q2: What is the main task?**
(Search, Traverse, Count, Optimize, Generate, Modify, Group, Connect)

**Q3: What constraints hint at the pattern?**
(Sorted, O(1) space, O(n) time, Duplicates, Multiple queries, etc.)

**These 3 questions + verification = Your pattern!**

---

## How to Use This Questionnaire in an Interview

1. **Spend 2-3 minutes** on Phase 1 & 2 (understand + identify structure)
2. **Spend 1-2 minutes** on Phase 3 & 4 (identify task + constraints)
3. **Spend 2-3 minutes** on Phase 5 (match pattern)
4. **Spend 1 minute** on Phase 6 (verify)
5. **Code!**

**Total: ~8-10 minutes before coding. Then you code with confidence!**

---

## Pro Tips

✅ **DO:**
- Ask clarifying questions out loud (shows thinking)
- Restate constraints to the interviewer
- Explain your pattern choice before coding
- Think out loud about trade-offs

❌ **DON'T:**
- Jump to coding without pattern identification
- Assume the "obvious" pattern without verification
- Ignore edge cases in your pattern verification
- Change patterns mid-code without good reason

---

## Useful Mantras

💭 *"The pattern isn't magic—it's a systematic way to match problem structure to algorithm design."*

💭 *"Constraints are hints. Keywords are clues. Questions are keys."*

💭 *"If I can't explain why this pattern applies, I don't understand it well enough to code it."*

💭 *"The first pattern isn't always right. Verify before coding."*
