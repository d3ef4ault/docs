# `Array` 构造函数

> 由于 `Array` 的构造函数在如何处理参数时有点模棱两可，因此总是推荐使用数组的字面语法 - `[]` - 来创建数组。

```javascript
[1, 2, 3]; // 结果: [1, 2, 3]
new Array(1, 2, 3); // 结果: [1, 2, 3]

[3]; // 结果: [3]
new Array(3); // 结果: []
new Array('3') // 结果: ['3']

// 因此下面的代码将会使人很迷惑
new Array(3, 4, 5); // 结果: [3, 4, 5]
new Array(3) // 结果: []，此数组长度为 3
```

> 由于只有一个参数传递到构造函数中（指的是 `new Array(3); `这种调用方式），并且这个参数是`数字`，构造函数会返回一个` length `属性被设置为此参数的空数组。 需要特别注意的是，此时只有` length` 属性被设置，真正的数组并没有生成。

```javascript
var arr = new Array(3);
arr[1]; // undefined
1 in arr; // false, 数组还没有生成
```

> 这种优先于设置数组长度属性的做法只在少数几种情况下有用，
> 比如需要循环字符串，可以避免` for `循环的麻烦。

```js
new Array(count + 1).join(stringToRepeat);
```

- **结论**

**应该尽量避免使用数组构造函数创建新数组。推荐使用数组的字面语法。它们更加短小和简洁，因此增加了代码的可读性。**
