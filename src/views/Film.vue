<!-- Film -->
<template>
  <div>
    <filmTab></filmTab>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae quasi et sint ratione animi necessitatibus eaque molestias dicta! At quis esse, voluptatum deserunt similique labore consectetur atque sequi excepturi.
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