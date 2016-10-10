任何dom节点不能在文档出现两次，因为这样就无法在js选择了，appendChild也是基于这一原理实现的。

访问函数指针sum

执行函数sum()

函数的名字仅仅是一个包含指针的变量

this用法：http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html


## js引用顺序

文档DOM未加载完成前getElementById可能会有问题

所以很多js文件没放head，放在最后