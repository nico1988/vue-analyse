
<script>
  import Header from '../components/Header'
  export default {
      name: "render",
      components: {Header},
      render(createElement, context){
          console.log("render.vue :: ","this is render.vue's render function")
          return createElement(
              'div',
              "这里是render函数"
          )
      }
  }
</script>
