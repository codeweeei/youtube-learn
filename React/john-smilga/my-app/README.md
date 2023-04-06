## 组件
### 创建组件
```js
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      组件
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))
```
### 嵌套组件
```js
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      组件
      <MyComponent />
    </div>
  )
}
const MyComponent = () => <h2>嵌套组件</h2>
ReactDOM.render(<App/>, document.getElementById('root'))
```
### jsx-css / jsx-style
### jsx-javascript
### props
- props对象的解构赋值
- props children 以这个属性名作为props的比较特殊，类似vue组件的插槽
### 事件基础