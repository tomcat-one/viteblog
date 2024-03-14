# vue3.3 新特性

## 支持宏中的导入类型和复杂类型

在 3.2 及以下版本中，defineProps() 的泛型类型参数只能使用类型字面量或者本地接口的引用。

此限制现已被 Vue 3.3 解决。编译器现在可以解析导入类型，并支持一组有限的复杂类型：

```javascript
<script setup lang="ts">
import { Props } from "type";
defineProps<Props>()
</script>
```

官方文档链接：https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits

## 泛型组件

使用了

```
<script setup>
```

 的组件现在可以通过 generic 属性接受泛型类型参数：

```javascript
<script setup lang="ts" generic="T extends string | number">
    defineProps<{
      id:T
    }>()
</script>
```

官方文档链接：https://cn.vuejs.org/api/sfc-script-setup.html#generics

## 更简洁的语法 defineEmits

以前，defineEmits 的类型参数能且仅能支持调用签名语法：

```javascript
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

该类型匹配 emit 的返回类型，但有点冗长且难以编写，现在 3.3+引入另一种更简洁的语法

```javascript
const emit = defineEmits<{
  change: [id: number] // 具名元组语法
  update: [value: string]
}>()
```

官方文档链接：https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits

## defineOptions

新的 defineOptions 宏允许直接在 

```
<script setup> 
```

中声明组件选项，而不需要单独的 

```
<script>
```

 块：

```javascript
defineOptions({
  inheritAttrs:false
})
```

官方文档链接：https://cn.vuejs.org/api/sfc-script-setup.html#defineoptions

## toRef 更好地支持 getter

以前我们取 props 的一个属性为一个单独的响应的数据时，我们会如下做法：

```javascript
defineProps<
  {
    num: number
  }
>()
const toRfeNum = toRef(props,'num')
```

3.3+之后创建一个只读的 ref，当访问 .value 时会调用此 getter 函数

```plain
const getterNum = toRef(()=> props.num)
```

官方文档链接：https://cn.vuejs.org/api/sfc-script-setup.html#defineoptions

## 响应式 props 解构

该功能允许解构的 props 保留响应性

```javascript
<script setup lang="ts">
  interface Props {
    msg: string
    count?: number
    foo?: string
  }

  const {
    msg,
    // 默认值正常可用
    count = 1,
    // 解构时命别名也可用
    // 这里我们就将 `props.foo` 命别名为 `bar`
    foo: bar
  } = defineProps<Props>()

  watchEffect(() => {
    // 会在 props 变化时打印
    console.log(msg, count, bar)
  })
</script>
```

官方文档链接：[https://cn.vuejs.org/guide/extras/reactivity-transform.html#reactiv](https://cn.vuejs.org/guide/extras/reactivity-transform.html#reactive-props-destructure)

# vue3.4 新特性

vue3.4 版本已更新，主要是内部性能的增强，如模板解析器速度提高了 2 倍，以及重构的反应系统使效果触发更加准确和高效， ( **但中文官方文档还未更新)**

## defineModel 功能稳定

defineModel 是一个新的

```
<script setup>
```

，旨在简化支持 v-model. 它之前作为实验性功能在 3.3 中发布，并在 3.4 中升级为稳定状态。现在它还为 v-model 修饰符的使用提供了更好的支持。

defineModel 可以实现一个双向绑定的值(3.4+)

```javascript
<!-- Child.vue -->
<script setup>
const model = defineModel()

function update() {
  model.value++
}
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
</template>
```

```javascript
<!-- Parent.vue -->
<Child v-model="count" />
```

官方文档链接：https://vuejs.org/guide/components/v-model.html

## v-bind 同名简写

```plain
<img :id="id" :src="src" :alt="alt">
```

您现在可以缩短它：

```plain
<img :id :src :alt>
```

## 参考链接：

https://vuejs.org/guide/introduction.html

https://blog.vuejs.org/posts/vue-3-3

https://blog.vuejs.org/posts/vue-3-4

https://blog.vuejs.org/
