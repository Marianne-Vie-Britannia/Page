### 节流与防抖

看一个密码生成器，我们希望生成哈希，但是我们又不希望用户每输一个字符就计算一遍，必须进行防抖。

防抖的思想很简单，设置一个计时器，每次调用函数重置计时器。

```javascript
import React,{useState} from 'react';
import CryptoJS from 'crypto-js'

export default function Hasher(){
    let seed = 'seed'
    let [target,setTarget] = useState()

    let createHash = function(str) {
        let hash = CryptoJS.SHA256(`${seed}${str}`);
        let dig = hash.toString(CryptoJS.enc.Hex)
        return dig
    }

    let [timer,setTimer] = useState(-1)
    let [value,setValue] = useState(-1)
    let handleChange = function (input) {
        setValue(input.target.value) 
        console.log(`timer ${timer}  value ${value}`)   
        setTarget(<p>computing...</p>)
        clearTimeout(timer)
        setTimer(setTimeout((value)=>{
            setTarget(createHash(value).slice(0,10))
            console.log(value)
            }, 10000, value)
        )
    }
    return (
        <div>
            <div>github.com    zhihu.com   qq.com</div>
            <input type='text' onChange={handleChange}></input>
            <div>{target}</div>
        </div>
    )
}
```

但是上述代码不能正确完成我们的需求，原因是Hooks函数并不是阻塞的，`setValue`函数调用后Value并不能立即更新。

现在改用防抖函数

```javascript
import React,{useState} from 'react';
import CryptoJS from 'crypto-js'

function debounce(fn, wait) {    
    let timeout = null;    
    return function(input) {  
        input.persist()  
        if(timeout !== null)   clearTimeout(timeout);        
        timeout = setTimeout(fn, wait, input);    
    }
} 

export default function Hasher(){
    let seed = 'seed'
    let [target,setTarget] = useState()

    let createHash = function(str) {
        let hash = CryptoJS.SHA256(`${seed}${str}`);
        let dig = hash.toString(CryptoJS.enc.Hex)
        return dig
    }

    let handleChange = function (input) {
        setTarget(createHash(input.target.value).slice(0,10))
        console.log(input.target.value)
    }
    return (
        <div>
            <div>github.com    zhihu.com   qq.com</div>
            <input type='text' onChange={debounce(handleChange,5000)}></input>
            <div>{target}</div>
        </div>
    )
}
```

这里需要注意React基于性能考虑，在事件触发后会将事件设置为`null`，需要在回调中调用input.persist()才能继续使用事件。

使用防抖函数，利用的是闭包，debounce函数的内存直到异步函数执行完了才会回收。在使用闭包时需要关注内存泄露的问题。

