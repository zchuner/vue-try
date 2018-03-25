<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>ths is a todo list</h2>
    <input v-model="newItem" v-on:keyup.enter="addNew" />
    <ul >
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinished(item)">
        {{item.label}}
      </li>
    </ul>
    <h4>child tell me:{{childWord}}</h4>
    <comp fathermsg='wo zhen sha' 
    v-on:child-tell-me-something="boyTo"></comp>
  </div>
</template>

<script>
import Localstorage from './localstorage'
import comp from './comp'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hellow Vue.js App  chunchun~~',
      items:Localstorage.fetch(),
      newItem:'',
      childWord:''

    }
  },
  components:{comp},
  watch:{
    items:{
      handler:function(items){
        Localstorage.save(items)
      },
      deep: true
    }
  },
  methods:{
    toggleFinished:function(item){
      item.isFinished = !item.isFinished
    },
    addNew:function(){
      this.items.push(
        {label:this.newItem,isFinished:false}
      )
      this.newItem=''
    },
    boyTo:function(msg){
      this.childWord=msg
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
  margin: 10px;
  display:inline-block;
}
a {
  color: #42b983;
}
.finished{
  color:blue;
  text-decoration:underline;
}
</style>
