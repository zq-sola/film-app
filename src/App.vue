<template>
  <div id="app">
    <div>123</div>
    <section>
      <router-view></router-view>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar/index.vue"
export default {
  components: {
    Tabbar
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
}

html{
  min-height: 100vh;
  font-size: calc(100vw/7.5);
  font-size: -webkit-calc(100vw/7.5);
}
#app {
  font-size: .48rem;
}
li{
  list-style: none;
}

section{
  margin-bottom: 50px;
}
a {
  text-decoration:none;color: black;
}
</style>
