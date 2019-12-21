<!--eslint-disable-->
<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
export default {
  name: 'App',
  data(){
    return {
        msg: "msg",
        msg1: "msg",
        msg2: "msg",
        msg3: "msg"
    }
  },
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
