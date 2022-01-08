import Nefbl from 'nefbl/dist/nefbl.js'

// 装饰器
export let Module = Nefbl.Module
export let Component = Nefbl.Component
export let Directive = Nefbl.Directive

// 核心方法
export let platform = Nefbl.platform
export let mountComponent = Nefbl.mountComponent
export let evalExpress = Nefbl.evalExpress
export let getValue = Nefbl.getValue
export let setValue = Nefbl.setValue

// 暴露的一些有用的方法
export let ref = Nefbl.ref
export let reactive = Nefbl.reactive
