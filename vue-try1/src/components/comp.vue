<template>
  <div>
    <h2>{{msg}}</h2>
    <p>{{msg1}}</p>
    <span>{{fathermsg}}</span>
    <button v-on:click="onClick">click</button>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
      msg: 'Hellow Vue.js ',
      msg1:'hellow zhang shazi'
    }
  },
  props:['fathermsg'],
  methods:{
    onClick:function(){
      alert(this.fathermsg);
      this.$emit('child-tell-me-something',this.msg1);
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
}
a {
  color: #42b983;
}
.finished{
  color:blue;
  text-decoration:underline;
}
</style>
