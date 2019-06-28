<template>
<div class="home">
  <div class="homeSearch">
    <img src="@/assets/navbar/rearch.png" alt="">
    <input type="text" name="" value="" v-model="inputs" placeholder="请输入您要搜索的商品名称">
  </div>
  <Swiper msg="Welcome to Your Vue.js App" />
  <Navbar msg="Welcome to Your Vue.js App" />
  <div class="goodTitle">
    <img src="@/assets/home/title.png" alt="">
  </div>
  <Goodlist />
  <div class="goodTitle2">
    <img src="@/assets/home/title2.png" alt="">
  </div>
  <Offerlist :eliteId="getlist" />
</div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import Navbar from '@/components/Navbar.vue'
import Goodlist from '@/components/Goodlist.vue'
import Offerlist from '@/components/Offerlist.vue'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    Swiper,
    Navbar,
    Goodlist,
    Offerlist
  },
  data() {
    return {
      getlist: 1,
      inputs: ''
    }
  },
  computed: {
    ...mapState('vuex/user', [
      'count'
    ])
  },
  methods: {

  },
  mounted: function() {
      console.log(this.count)
  }

}
</script>
<style media="screen" lang="scss" scoped>
.home {
    overflow: hidden;
    width: 100vw;
    padding-bottom: 0.96rem;
}
.homeSearch {
    width: 100vw;
    line-height: 1.24rem;
    height: 1.24rem;
    vertical-align: middle;
    font-size: 0.24rem;
    position: relative;
}
.homeSearch img {
    width: 0.36rem;
    height: 0.36rem;
    display: inline-block;
    position: absolute;
    left: 0.62rem;
    top: 50%;
    margin-top: -0.18rem;
}
.homeSearch input {
    text-indent: 4em;
    display: inline-block;
    width: 7rem;
    height: 0.62rem;
    line-height: 0.62rem;
    margin: 0 0.24rem;
    font-size: 0.24rem;
    outline: none;
    border-radius: 0.31rem;
    background: rgba(247, 247, 247, 1);
    border: none;
}
.goodTitle {
    width: 100vw;

    text-align: center;
    img {
        margin-top: 0.36rem;
        display: inline-block;
        width: 7.18rem;
        height: 2.57rem;
    }
}
.goodTitle2 {
    overflow: hidden;
    width: 100vw;
    text-align: center;
    img {
        margin-top: 0.4rem;
        display: inline-block;
        width: 6rem;
        height: 1.2rem;
    }
}
</style>
