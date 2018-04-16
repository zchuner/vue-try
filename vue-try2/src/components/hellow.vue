<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item,index in items">
        {{item.index}}---{{item.title}}
        <p>This in {{item.title}}</p>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'hellow',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App,are you ok?',
      items:[
        {index:1,title:'wo'},
        {index:2,title:'ni'},
        {index:3,title:'ta'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>
