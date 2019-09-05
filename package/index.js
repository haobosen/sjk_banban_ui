// packages / index.js
 
// 导入单个组件
import Button from './button/index'
import Radio from './radio/index'
import Checkbox from './checkbox/index'
 
// 以数组的结构保存组件，便于遍历
const components = [
    Button,
    Radio,
    Checkbox
]

// 定义 install 方法
const install = function (Vue) {
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}
// 如果通过script引入，检测到vue为全局变量时，也会调用install方法
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
 
export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}
