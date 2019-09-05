<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <el-button @click="buttonClick" disabled>默认按钮</el-button>
      <el-button type="">主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-radio v-model="radioel" label="1">备选项</el-radio>
      <el-radio v-model="radioel" label="2">备选项</el-radio>
    </div>
    <div>
      <sjk-bb-button disabled type="main" @click="buttonClick">哈哈哈1</sjk-bb-button>
      <sjk-bb-button type="default">哈哈哈2</sjk-bb-button>
      <sjk-bb-button type="default">哈哈哈3</sjk-bb-button>
    </div>
    <div>
      <sjk-bb-radio v-model="radio" label="1" @change="changeTest">按钮1</sjk-bb-radio>
      <sjk-bb-radio v-model="radio" label="2">按钮2</sjk-bb-radio>
      <sjk-bb-radio v-model="radio" label="3">按钮3</sjk-bb-radio>
      <div>radio选中的值 {{radio}}</div>
    </div>
    <div>
      <sjk-bb-checkbox>checkbox</sjk-bb-checkbox>
    </div>
  
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      input: '',
      radioel: '',
      radio: '1'
    }
  },
  created() {
 
  },
  methods: {
    buttonClick() {
      console.log('click')
    },
    changeTest(val) {
      console.log(12333, val)
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
