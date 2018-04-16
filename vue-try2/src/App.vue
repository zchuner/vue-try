<template>
<div>
<keep-alive>
    <router-view />
  </keep-alive>
  <div class="tab">
    <div>
      <router-link to='/list'><a href="/list">Index</a></router-link>
    </div>
    <div>
      <router-link to="/hellow" ><a href="/hellow">Hello</a></router-link>
    </div> 
    <div >
      <router-link to='/foo' ><a href="/foo">aaa</a></router-link>
    </div>  
  </div>

</div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab{
width:100%;
  position:fixed;
  bottom:0;
  left:0;
}
.tab div{
  float:left;
  width:30%;
  text-align:center;
}

</style>
