<script>
let AppLayout = {
  template:
    `
      <div class="container">
        <header>
          <slot name="header">这个是默认内容（后备内容）</slot>
        </header>
        <main>
          <slot>默认内容</slot>
        </main>
        <footer>
          <slot name="footer">footer</slot>
        </footer>
      </div>
      `
}

let Child = {
    template: `
        <div class="child">
            <slot text="Hello" :msg="msg"></slot>
        </div>
    `,
    data() {
        return {
            msg: 'Vue'
        }
    }
}

export default {
  template:`
    <div>
      <div style="color: blue">这里是插槽1</div>
      <app-layout>
        <h1 slot="header">{{title}}</h1>
        <p>{{msg}}</p>
        <p slot="footer">{{desc}}</p>
      </app-layout>
      <div style="color: blue">这里是插槽2</div>
      <app-layout></app-layout>
      <div style="color: blue">这里是作用域插槽</div>
      <div>
        <child>
          <template slot-scope="props">
            <p>Hello from parent</p>
            <p>下面的信息来自父元素 并非插槽本身</p>
            <p>{{ props.text}} {{props.msg}}</p>
          </template>
        </child>
      </div>
    </div>
    `,
  data() {
    return {
      title: 'slot 我是标题',
      msg: '我是内容',
      desc: 'slot 其它信息'
    }
  },
  components: {
    AppLayout,
    Child
  }
}
</script>
