<!-- FilmTab -->
<template>
    <div class="filmTab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="正在热映" name="Now-hit"></el-tab-pane>
            <el-tab-pane label="即将上映" name="comingsoon"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  data () {
    return {
        activeName: 'Now-hit'
    };
  },
  methods: { 
    handleClick(tab, event) {
    // console.log(tab, event);
    tab.label == "正在热映" ? this.$router.push('Now-hit') : this.$router.push('comingsoon')
    }
  }
}

</script>
<style lang='scss' >
.el-tabs__nav-wrap {
    height:1rem;
}
.el-tabs__nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.el-tabs__active-bar {
    left: .96rem;
}
</style>