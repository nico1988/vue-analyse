
<script>
  import Header from '../components/Header'
  export default {
      name: "render",
      components: {Header},
      data() {
          return  {
              msg: "this is render function"
          }
      },
      render(createElement, context){
          console.log("render.vue :: ","this is render.vue's render function")
          return createElement('div',{
              attrs: {
                  id: 'render',
                  class: "red nico aaa"
              }
          },this.msg)
      }
  }
</script>
