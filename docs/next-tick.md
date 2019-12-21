### nextTick

### javascript的运行机制



JS 执行是单线程的，它是基于事件循环eventloop的。事件循环大致分为以下几个步骤：

（1）所有同步任务都在主线程上执行，形成一个执行栈task（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。浏览器维护了事件线程、网络请求线程、定时器线程等等，只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。



![img](https://ustbhuangyi.github.io/vue-analysis/assets/event-loop.png)

主线程的执行过程就是一个 tick，而所有的异步结果都是通过 “任务队列” 来调度。 消息队列中存放的是一个个的任务（task）。 规范中规定 task 分为两大类，分别是 macro task(setTimeout  setInterval  I/O  script) 和 micro task(promise  process.nextTick mutationObserver)，nexttic的原理就是利用了mutationObserver。同一个macrotask可能有多个microtask，同一次事件循环中 ，微任务永远在宏任务之前执行。

```
// 伪代码
for (macroTask of macroTaskQueue) {
    // 1. Handle current MACRO-TASK
    handleMacroTask();
      
    // 2. Handle all MICRO-TASK
    for (microTask of microTaskQueue) {
        handleMicroTask(microTask);
    }
}
```

### next-tick.js的实现



这里主要维护了一个timeFunc，通过判断不同的宿主环境的浏览器支持程度，依次使用Promise / MutationObserver / setImmediate / setTimeout ，主要过程就是收集要执行的函数到一个数组callbacks中，然后在下一个tick（新的事件循环中），遍历循环数组flushcallbacks

```

```



### 调用机制

vue提供了两种调用nextTick的方式，一个是全局api的[Vue.nextTick](https://cn.vuejs.org/v2/api/#Vue-nextTick),另一个是通过实例内部调用vm.$nextTick，无论哪种方法，都会走`src\core\util\next-tick.js`这里边的逻辑

其中

- 全局 global-api/index.js:46 `Vue.nextTick = nextTick`

- 组件 render方法在渲染组件的时候，src\core\instance\render.jsrenderMixin --> Vue.prototype.$nextTick -->  调用next-tick.js





###  调试

运行vue-debug和vue的dev