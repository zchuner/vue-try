<template>
  <div>
    <h2> List</h2>
    
      <input type=text v-model="newItem" v-on:keyup.enter="addNew" />
    <h4>plase push</h4>
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      newItem:'',
      items:[]
    }
  },
  methods:{
    addNew:function(){
      this.items.push(this.newItem)
      this.newItem=''
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul{
  width:80%;
  height:100%;
  border:2px solid green;
}
</style>
