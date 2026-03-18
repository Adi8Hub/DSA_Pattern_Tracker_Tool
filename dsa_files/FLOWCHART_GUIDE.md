# 🌳 Decision Flowchart - Feature Guide

## Overview

The **Decision Flowchart** is a new interactive tool added to the DSA Patterns Cheatsheet that helps you **identify which pattern to use** for any given problem. Instead of guessing, you answer simple yes/no questions that systematically narrow down to the right pattern.

---

## How It Works

### Three Simple Steps:

1. **Click the "🌳 Flowchart" tab** in the navigation
2. **Answer yes/no questions** about your problem
3. **Get the recommended pattern** with explanation

---

## The Decision Tree

The flowchart uses a intelligent decision tree with ~8 entry points and multiple paths:

```
START: What type of data structure?
├── Array/List
│   ├── Searching → Binary Search check
│   ├── Contiguous → Sliding Window
│   ├── Pairs → Two Pointers
│   └── Frequency → Hash Map
├── String
│   ├── Substring → Sliding Window
│   ├── Palindrome → Two Pointers
│   ├── Generate → Backtracking
│   └── Longest → DP
├── Tree
│   ├── Path/Traversal → DFS
│   ├── Level-order → BFS
│   └── Shortest → BFS
├── Graph
│   ├── Shortest path → BFS
│   ├── Components → Union-Find / DFS
│   ├── Task order → Topological Sort
│   └── Exploration → DFS
└── Matrix/Grid
    ├── Path/Regions → DFS
    ├── Distance → BFS
    └── Counting → DP
```

---

## Entry Points

The flowchart supports these data structure categories:

### 1. **Array/List**
Guides you through:
- Is it sorted? → Binary Search
- Contiguous elements? → Sliding Window
- Looking for pairs? → Two Pointers
- Need frequency? → Hash Map

### 2. **String**
Helps you identify:
- Substring/pattern? → Sliding Window
- Palindrome checks? → Two Pointers
- Generate all? → Backtracking
- Find longest? → DP

### 3. **Tree**
Asks about:
- Path problems? → DFS
- Level-order? → BFS
- Distance/nearest? → BFS
- Counting? → DFS

### 4. **Graph**
Questions for:
- Shortest path (unweighted)? → BFS
- All paths/components? → DFS
- Connected components? → Union-Find
- Dependency order? → Topological Sort

### 5. **Matrix/2D Grid**
Guides through:
- Path/region finding? → DFS
- Distance queries? → BFS
- Path counting? → DP
- Searching? → Binary Search

---

## Recommended Patterns

The flowchart can recommend any of these patterns:

| Pattern | When Recommended |
|---------|------------------|
| **Sliding Window** | Contiguous subarray/substring with O(n) |
| **Two Pointers** | Sorted arrays, pairs, palindromes |
| **Binary Search** | Sorted data or monotonic conditions |
| **Hash Map / Hash Set** | Frequency, grouping, lookups |
| **DFS / Backtracking** | All paths, exploration, combinations |
| **BFS** | Shortest path, level-order, distance |
| **Dynamic Programming** | Optimization with overlapping subproblems |
| **Union-Find** | Dynamic connectivity, components |
| **Topological Sort** | Dependency ordering, prerequisites |

---

## Features

### ✅ Interactive Decision Making
- Click buttons to answer questions
- Visual feedback on hover
- Clear indication of current step
- Progress tracker at the bottom

### ✅ Result Explanation
When a pattern is identified, you get:
- **Green checkmark** - Confirmation of pattern
- **Description** - Brief explanation of the pattern
- **Why this pattern?** - Bullet points explaining the reasoning
- **Key benefits** - Why this is the best choice

### ✅ Navigation
- **"Start Over" button** - Reset and try another problem
- **"View Pattern Details"** - Jump to full pattern documentation
- **"Try Another Problem"** - Reset from result screen

### ✅ Smart Paths
The flowchart intelligently routes you:
- Based on data structure type first
- Then by task/goal
- Then by specific characteristics
- Avoids irrelevant questions

---

## Example Walkthrough

### Problem: "Find longest substring without repeating characters"

**Step 1:** "What type of data structure?" 
→ Answer: **String**

**Step 2:** "What do you need?"
→ Answer: **Substring/pattern**

**Step 3:** Result: **Sliding Window** ✓
- Recommended because it's a contiguous substring problem
- Reduces O(n²) brute force to O(n)
- Use expand/shrink window pattern

---

## Use Cases

### During Interview Preparation
- **Practice mode**: Before solving a problem, use the flowchart
- **Verification**: After identifying a pattern yourself, verify with flowchart
- **Discovery**: Learn how problems route through decision trees

### During Mock Interviews
- Use as a warm-up tool
- Quick reference before coding
- Check pattern choice before implementation

### For Learning
- Understand how patterns relate to each other
- See the decision criteria
- Learn why certain patterns fit certain problems

---

## Tips for Using the Flowchart

### ✅ DO:
- **Be specific** with data structure answers
- **Think about the task first** (search, sort, count, etc.)
- **Use constraints** to guide your answers
- **Verify multiple times** with different problem examples
- **Combine patterns** - sometimes flowchart suggests one, but you may need 2

### ❌ DON'T:
- **Rush through questions** - read carefully
- **Overthink answers** - pick the most obvious one
- **Ignore edge cases** - they matter for pattern selection
- **Skip the explanation** - that's where the learning happens

---

## Decision Criteria Explained

### When Choosing Between Patterns

**Binary Search vs Two Pointers** (both for sorted arrays)
- Use **Binary Search** if you need O(log n)
- Use **Two Pointers** if O(n) is sufficient but you want simplicity

**DFS vs BFS** (both for graphs)
- Use **DFS** for all paths, components, cycles
- Use **BFS** for shortest path, level-order, distance

**Hash Map vs Binary Search** (both for lookups)
- Use **Hash Map** if O(1) lookup needed, unsorted
- Use **Binary Search** if array is sorted, need O(log n)

**Backtracking vs DP** (both for optimization)
- Use **Backtracking** if you need ALL solutions
- Use **DP** if you only need OPTIMAL solution

---

## Limitations

The flowchart helps with **initial pattern identification**, but:

- It may suggest multiple valid patterns for one problem
- Some problems combine 2-3 patterns
- Edge cases might require adjustments
- Your constraints might suggest optimization to a different pattern

**Always verify** the recommended pattern makes sense for your specific constraints.

---

## Integration with Other Views

The flowchart integrates seamlessly:

### From Flowchart → Pattern Details
- **"View Pattern Details"** button switches to Pattern view
- Shows the full documentation of identified pattern
- All 4 tabs available (Identify, Template, Pairs, Problems)

### From Patterns → Flowchart
- Use flowchart to verify pattern choice
- Cross-reference with problem examples
- See how pattern is positioned in decision tree

### With Cheatsheet
- Quick reference table shows all patterns
- Flowchart personalizes the selection process
- Together they provide guidance and reference

---

## Learning Outcomes

After using the flowchart, you'll:

✅ Learn **decision criteria** for pattern selection  
✅ Understand **when each pattern applies**  
✅ Build **intuition** for pattern recognition  
✅ Develop **systematic approach** to problem analysis  
✅ Know **why** one pattern beats others  

---

## Practice Suggestions

### Level 1: Guided Practice
1. Pick a LeetCode problem
2. Use flowchart to identify pattern
3. View pattern details
4. Solve the problem

### Level 2: Verification Practice
1. Solve a problem yourself
2. Identify pattern you used
3. Use flowchart to verify
4. Check if flowchart would have found same pattern

### Level 3: Problem Discovery
1. Use flowchart to find a pattern
2. Let flowchart suggest which pattern
3. Solve a problem using that pattern
4. Understand why it fits

---

## Customization

The flowchart is **data-driven**, meaning you can:
- Add new decision nodes
- Extend decision paths
- Add more pattern recommendations
- Customize explanations

All stored in the `flowchartNodes` array in the code.

---

## Keyboard Navigation (Future)

Planned improvements:
- Arrow keys to navigate choices
- Enter to confirm selection
- Escape to restart
- Number keys for quick selection

---

## Troubleshooting

### "Flowchart doesn't recommend any pattern"
- Make sure you've answered all questions
- Go back and reconsider your answers
- Hybrid patterns might be needed

### "Recommended pattern doesn't feel right"
- Read the "WHY THIS PATTERN?" explanation
- Check pattern details for verification
- You might need to combine patterns

### "Getting different results each time"
- Your answers might differ - that's fine!
- Different paths = different valid approaches
- All recommendations are correct for that path

---

## Examples by Problem Type

### Array Problems
- **Sliding window** → "Longest substring without repeating"
- **Two pointers** → "Container with most water"
- **Binary search** → "Search in rotated array"
- **Hash map** → "Two sum"

### String Problems
- **Sliding window** → "Min window substring"
- **Two pointers** → "Valid palindrome"
- **Backtracking** → "Permutations"
- **DP** → "Longest common subsequence"

### Tree Problems
- **DFS** → "Path sum"
- **BFS** → "Level order traversal"
- **DP** → "Unique paths"

### Graph Problems
- **BFS** → "Shortest path"
- **DFS** → "Number of islands"
- **Union-Find** → "Redundant connection"
- **Topological sort** → "Course schedule"

---

## Summary

The **Decision Flowchart** is your **interactive pattern identifier** that:
1. **Guides** you through decision process
2. **Recommends** the best pattern
3. **Explains** why it's a good fit
4. **Links** directly to pattern details
5. **Supports** your interview preparation

Use it as your first tool when encountering a new problem!

---

*Happy pattern hunting! 🎯*
