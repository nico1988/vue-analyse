<script>
  let A = {
    template: '<div class="a">' +
      '<p>A Comp</p>' +
      '</div>',
    name: 'A',
    mounted() {
        console.log("component A mounted")
    },
    activated() {
        console.log("component A activated")
    },
    deactivated() {
        console.log("component A deactivated")
    },
  }

  let B = {
    template: '<div class="b">' +
      '<p>B Comp</p>' +
      '</div>',
    name: 'B',
    mounted() {
      console.log("component B mounted")
    },
    activated() {
      console.log("component B activated")
    },
    deactivated() {
      console.log("component B deactivated")
    },
  }
  export default {
    name: 'keepalive',
    template: `
      <div>
        <keep-alive>
            <component :is="currentComp"></component>
        </keep-alive>
        <button @click="change">switch</button>
      </div>`
    ,
    data() {
      return{
        currentComp: 'A'
      }
    },
    methods: {
      change() {
        this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
      }
    },
    components: {
      A,
      B
    }
  }


</script>
