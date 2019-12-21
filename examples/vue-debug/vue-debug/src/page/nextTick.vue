<template>
  <div>
    <div ref="msg"> {{msg}} </div>
    <button @click="change">点击修改msg</button>
  </div>
</template>
<script>
  export default {
      name: 'next-tick',
      data(){
          return {
              msg: 'hello-world'
          }
      },
      methods: {
          change() {
              this.msg = "msg" + Date.now();
              console.log("sync", this.$refs.msg.innerText)
              this.$nextTick().then(()=>{
                  console.log("nexttick with promise 1 ",this.$refs.msg.innerText)
              })
              this.$nextTick(()=>{ // 这里为啥是callback先执行？
                  console.log("nexttick with callback 2 ",this.$refs.msg.innerText)
              })
              this.$nextTick(()=>{ // 这里为啥是callback先执行？
                  console.log("nexttick with callback 3 ",this.$refs.msg.innerText)
              })
              this.$nextTick(()=>{ // 这里为啥是callback先执行？
                  console.log("nexttick with callback 4 ",this.$refs.msg.innerText)
              })
              this.$nextTick(()=>{ // 这里为啥是callback先执行？
                  console.log("nexttick with callback 5 ",this.$refs.msg.innerText)
              })
              this.$nextTick(()=>{ // 这里为啥是callback先执行？
                  console.log("nexttick with callback 6 ",this.$refs.msg.innerText)
              })
              this.$nextTick(()=>{ // 这里为啥是callback先执行？
                  setTimeout(function(){
                      console.log("nexttick with callback 7 ",this.$refs.msg.innerText)
                  }.bind(this),0)
              })
          }
      }
  }
</script>
