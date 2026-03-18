# DSA Patterns Cheatsheet - JavaScript to C# Conversion Summary

## Overview
All JavaScript template code in the DSA patterns cheatsheet has been successfully converted to **C#** syntax and idioms.

---

## Patterns Converted (14 Total)

### 1. **Sliding Window** ✅
- **JavaScript**: `function fixedWindow(arr, k)` with `let`, `const`, `Map()`
- **C#**: `public static int FixedWindow(int[] arr, int k)` with `Dictionary<char, int>`
- **Key Changes**:
  - `function` → `public static`
  - `let/const` → `int/var`
  - `arr.length` → `arr.Length`
  - `new Map()` → `new Dictionary<char, int>()`

### 2. **Two Pointers** ✅
- **JavaScript**: `function twoSum(arr, target)`, `nums.sort((a,b) => a-b)`
- **C#**: `public static int[] TwoSum(int[] arr, int target)`, `Array.Sort(nums)`
- **Key Changes**:
  - Array method sort → `Array.Sort()`
  - Return array syntax → `new int[] {}`
  - `List<List<int>>` for nested collections

### 3. **Fast & Slow Pointers** ✅
- **JavaScript**: Works with linked list nodes directly
- **C#**: Added `ListNode` class definition with properties
- **Key Changes**:
  - `node.next` access → same in C#
  - `null` comparison: `fast && fast.next` → `fast != null && fast.next != null`
  - Class-based approach with constructors

### 4. **Binary Search** ✅
- **JavaScript**: `Math.max(...blooms)` spread operator
- **C#**: `blooms.Max()` using LINQ
- **Key Changes**:
  - Bit shift operator `>>` works same way in both
  - Helper method `IsFeasible()` added
  - `Math.Max()` works identically

### 5. **BFS (Breadth-First Search)** ✅
- **JavaScript**: `new Queue()` pattern with arrays
- **C#**: Native `Queue<T>` generic class
- **Key Changes**:
  - `queue.shift()` → `queue.Dequeue()`
  - `queue.push()` → `queue.Enqueue()`
  - Tuple syntax: `(node, dist)` for storing pairs
  - `queue.Count` instead of `queue.length`

### 6. **DFS (Depth-First Search)** ✅
- **JavaScript**: Nested recursive functions with closures
- **C#**: Static helper methods with parameters
- **Key Changes**:
  - `new Set()` → `new HashSet<int>()`
  - `grid[r][c] === '1'` → `grid[r][c] == '1'`
  - Recursive calls as static methods
  - `char[][]` for 2D grid

### 7. **Dynamic Programming** ✅
- **JavaScript**: `Array(amount+1).fill(Infinity)`
- **C#**: `new int[amount + 1]` with manual initialization
- **Key Changes**:
  - `Array()` constructor → typed arrays
  - `Math.min/max` → `Math.Min/Max`
  - Multi-dimensional arrays: `int[][]`
  - Loop initialization `for (int i = 0; i <= amount; i++)`

### 8. **Backtracking** ✅
- **JavaScript**: Arrow functions and closures
- **C#**: Private static helper methods
- **Key Changes**:
  - `const result = []` → `var result = new List<List<int>>()`
  - `.push([...current])` → `.Add(new List<int>(current))`
  - `.pop()` → `.RemoveAt(current.Count - 1)`
  - `used.fill(false)` → `new bool[nums.Length]`
  - Method overloading patterns

### 9. **Heap / Priority Queue** ✅
- **JavaScript**: Custom `MinHeap` class implementation
- **C#**: Native `PriorityQueue<T, TPriority>` (.NET 6+) + custom class option
- **Key Changes**:
  - `PriorityQueue<int, int>` for built-in support
  - Custom heap class with `BubbleUp()` and `SinkDown()`
  - Tuple swaps: `(a, b) = (b, a)`
  - `heap.Count` instead of `heap.length`

### 10. **Union-Find (DSU)** ✅
- **JavaScript**: Class with methods and properties
- **C#**: Class with properties and methods, path compression
- **Key Changes**:
  - `this.parent[x] !== x` → `parent[x] != x`
  - Ternary conditional syntax same in both
  - Return boolean for union operations
  - `components--` works identically

### 11. **Monotonic Stack** ✅
- **JavaScript**: Array-based stack operations
- **C#**: `Stack<T>` generic class
- **Key Changes**:
  - `stack.push(i)` → `stack.Push(i)`
  - `stack.pop()` → `stack.Pop()`
  - `stack[stack.length-1]` → `stack.Peek()`
  - `stack.length` → `stack.Count`

### 12. **Prefix Sum** ✅
- **JavaScript**: `new Map()` and array operations
- **C#**: `Dictionary<int, int>` and arrays
- **Key Changes**:
  - `map.get(sum-k) || 0` → `map.ContainsKey(sum-k) ? map[sum-k] : 0`
  - `.length` → `.Length`
  - Manual dictionary initialization with check-and-insert

### 13. **Trie (Prefix Trees)** ✅
- **JavaScript**: Plain JavaScript objects for children
- **C#**: `Dictionary<char, TrieNode>` for type safety
- **Key Changes**:
  - `this.children = {}` → `Dictionary<char, TrieNode>`
  - `!node.children[ch]` → `!node.children.ContainsKey(ch)`
  - Class properties with access modifiers
  - PascalCase for method names: `Insert()`, `Search()`, `StartsWith()`

### 14. **Topological Sort** ✅
- **JavaScript**: Array and Set-based graph representation
- **C#**: List-based adjacency list with array for visited state
- **Key Changes**:
  - `new Array(n).fill()` → `new int[n]`
  - `const graph = Array.from({length: numCourses}, () => [])` → `List<int>[]`
  - `queue.shift()` → `queue.Dequeue()`
  - Result list with `.ToArray()` at the end
  - Helper method `DFSTopo()` with pass-by-reference patterns

---

## Language-Specific Conversions

### Variables & Types
| JavaScript | C# | Notes |
|-----------|-----|-------|
| `let` / `const` | `int` / `var` | C# is strongly typed |
| `Array(n).fill(v)` | `new int[n]` | Must initialize each element or use default |
| `new Map()` | `Dictionary<K, V>` | Type-safe key-value pairs |
| `new Set()` | `HashSet<T>` | For unique collections |

### Arrays & Collections
| JavaScript | C# | Notes |
|-----------|-----|-------|
| `arr.length` | `arr.Length` | Capital L in C# |
| `arr.push(x)` | `list.Add(x)` | Lists instead of arrays for dynamic |
| `arr.shift()` | `queue.Dequeue()` | Queue operations |
| `[...arr]` | `new List<int>(arr)` | Copy semantics |
| `.sort((a,b) => a-b)` | `Array.Sort(arr)` | Built-in sorting |

### Control Flow
| JavaScript | C# | Notes |
|-----------|-----|-------|
| `const [a, b] = arr` | `var (a, b) = tuple` | Tuple destructuring (C# 7+) |
| `for (const x of arr)` | `foreach (var x in arr)` | Same concept, different syntax |
| `if (!obj)` | `if (obj == null)` | Explicit null checking |
| `===` / `!==` | `==` / `!=` | C# uses `==` for value types |

### Functions & Methods
| JavaScript | C# | Notes |
|-----------|-----|-------|
| `function fn()` | `public static void Fn()` | Static methods for algorithms |
| `return [a, b]` | `return new int[] {a, b}` | Explicit array syntax |
| `arr.map()` / `filter()` | `foreach` or LINQ | More explicit in C# |
| Arrow functions | Named methods | C# uses named methods or lambdas |

---

## Code Style Conversions

### PascalCase for Public Methods
```javascript
function binarySearch(arr, target) // JavaScript
```
```csharp
public static int BinarySearch(int[] arr, int target) // C#
```

### Type Annotations Throughout
```javascript
const dp = Array(amount + 1).fill(Infinity); // Type inferred
```
```csharp
var dp = new int[amount + 1]; // or int[]
```

### Explicit Memory Management
```javascript
const freq = new Map(); // Automatic in JS
```
```csharp
var freq = new Dictionary<char, int>(); // Explicit type
```

---

## Special Notes

### .NET Versions
- **Heap/PriorityQueue**: Uses `.NET 6+` native `PriorityQueue<T, TPriority>`
- **Fallback**: Custom `MinHeap` class provided for older .NET versions
- **LINQ**: Uses `Max()` for arrays (add `using System.Linq;`)

### String vs char[]
- JavaScript: `string s` works with character access
- C#: `string` is immutable, but supports `s[i]` access like in templates

### Null Handling
- JavaScript: `null`, `undefined`, falsy values
- C#: `null`, explicit null checks required

### Array vs List
- JavaScript: Arrays are flexible
- C#: Choose between:
  - `int[]` for fixed-size arrays
  - `List<int>` for dynamic collections
  - `T[][]` for 2D arrays (jagged or rectangular)

---

## Testing Recommendations

1. **Sliding Window**: Test with various window sizes and boundary conditions
2. **Two Pointers**: Test with sorted/unsorted data and edge cases
3. **Binary Search**: Verify with rotated arrays and edge indices
4. **BFS/DFS**: Test with connected/disconnected graphs and cycles
5. **Dynamic Programming**: Validate recurrence relations with small inputs
6. **Backtracking**: Test pruning conditions thoroughly
7. **Heap**: Verify heap property after insertions/deletions
8. **Union-Find**: Test path compression and union by rank
9. **Trie**: Test with prefixes and word boundaries
10. **Topological Sort**: Verify cycle detection

---

## How to Use

1. **Open the file** in your IDE or React environment
2. **Copy code snippets** from the "💻 Template" tab
3. **Paste into your C# project** (LeetCode, Visual Studio, etc.)
4. **Adjust namespaces** and class names as needed
5. **Test with provided patterns** before submitting

---

## Migration Checklist

- ✅ All 14 patterns converted
- ✅ Language indicator updated to C#
- ✅ All method signatures in C# style
- ✅ Comments preserved
- ✅ Logic unchanged, only syntax updated
- ✅ Type safety implemented
- ✅ Capital .Length for arrays
- ✅ Dictionary and List usage corrected

---

## Questions?

If you need to:
- **Add more patterns**: Follow the C# conventions shown in this document
- **Adapt for .NET Framework**: Adjust collection imports and syntax
- **Use with a specific platform**: Check platform-specific requirements (LeetCode, HackerRank, etc.)

**Happy coding in C#! 🚀**
