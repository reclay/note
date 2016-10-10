# 正则表达式

## RegExp对象

属性：global、i、m、source、lastIndex

compile改变正则表达式

test只返回true or false

### exec

在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。

如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0

## 支持RegExp的String方法

### search

search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。

### match

### replace

如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。

### split

## 参考网站
http://blog.csdn.net/zaifendou/article/details/5746988