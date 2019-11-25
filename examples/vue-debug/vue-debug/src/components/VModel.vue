<script>
  export default {
      name: 'VModel',
      template: `
        <div>
          <input v-model="message" placeholder="edit me">
          <p>Message is: {{ message }}</p>
          v-model的本质其实就是语法糖
          <input
            placeholder="please input to change msg"
            :value="msg"
            @input="msg=$event.target.value"
          >
          <p>msg is {{msg}}</p>
        </div>
      `,
      data() {
          return {
              msg: '',
              message: ''
          }
      }
  }
</script>
