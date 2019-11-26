<!--<template>-->
<!--  <div class="hello">-->
<!--    <h1>{{ msg }}</h1>-->
<!--    <div> 分析依赖收集例子 </div>-->
<!--    <div v-if="flag">-->
<!--      {{msg11}}-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      {{msg22}}-->
<!--    </div>-->
<!--    <button @click="change">change</button>-->
<!--    &nbsp;-->
<!--    <button @click="toggle">toggle</button>-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  name: 'HelloWorld',
  template: `
    <div class="hello">
    <h1>{{ msg }}</h1>
    <div> 分析依赖收集例子 </div>
    <div v-if="flag">
      {{msg11}}
    </div>
    <div v-else>
      {{msg22}}
    </div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
    <h3>v-model</h3>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
  `,
  props: {
    msg: String
  },
  methods:{
      change() {
        this.msg11 = Math.random();
      },
      toggle() {
          this.$nextTick(() => {
              // 这里我们可以获取变化后的 DOM
              console.log('这里是$nextTick触发的函数 flag 的值改变啦')
          })
          // this.flag = !this.flag;
      }
  },
  data() {
      return {
          flag: true,
          message: '',
          msg11:'hello world',
          msg22: 'hello world1',
          obj:{
              a:1,
              b:2
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
