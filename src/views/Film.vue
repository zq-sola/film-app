<!-- Film -->
<template>
  <div>
    <filmTab></filmTab>
    
  </div>
  
</template>

<script>
import filmTab from '@/components/FilmTab/index.vue'
import {getFilmList} from "@/api/http/index.js"
export default {
  data () {
    return {
    };
  },
  components: {
    filmTab
  },
  mounted() {
    const res =  getFilmList();
    console.log(res)
  }
}

</script>
<style lang='scss' scoped>
</style>