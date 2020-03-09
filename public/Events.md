事件的捕捉与传递

× 捕获 -- event.eventPhase : 1

事件首先会被捕获，从Window开始直到event.target，event.currentTarget依次变化

```mermaid
graph TB
　　Window(Window)  --  捕      获 -->Document(Document);
 		Document --  捕      获 -->html("#60;html#62;");
 		html --  捕      获 -->body("#60;body#62;");
 		body --  捕      获 -->div("#60;div#62;");
 		div --  捕      获 -->botton("#60;botton#62;");
```
× 处于最顶端元素 -- event.eventPhase : 2

事件传播到event.target, 此时 event.target 即 event.currentTarget指向同一HTML元素



× 捕获 -- event.eventPhase : 3

事件最后会冒泡，从event.target开始直到Window，event.currentTarget依次变化

```mermaid
graph BT
　Document(Document)-- 冒 泡 -->Window(Window)
 	html("#60;html#62;") -- 冒 泡 -->Document
 		body("#60;body#62;")-- 冒 泡 -->html 
 		div("#60;div#62;") -- 冒 泡 -->body
 		botton("#60;botton#62;") -- 冒 泡 -->div
```

