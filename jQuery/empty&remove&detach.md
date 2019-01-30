# empty&remove&detach

## remove()

删除被选元素（及其子元素）**删除元素自身**

```js
$("div").remove();
```

- remove() 方法也可接受一个参数，允许您对被删元素进行过滤

```js
$("p").remove(".italic");
```

## empty()

删除被选元素的子元素 **清空元素内容**

清空div的所有内容（推荐使用，会清除子元素上绑定的内容，源码）

## $('div').html('')

使用html方法来清空元素，绑定的事件不会被清除，不推荐使用，`会造成内存泄漏`

## detach()

移除被选元素，包括所有文本和子节点

**这个方法会保留 `jQuery` 对象中的匹配的元素，因而可以在将来再使用这些匹配的元素**

**`detach()` 会保留所有绑定的事件、附加的数据，这一点与 `remove()` 不同**

```js
$("p").detach();
```