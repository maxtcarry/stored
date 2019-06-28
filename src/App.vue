<template>
<div id="app">
  <router-view />
  <div id="nav">
    <van-tabbar v-model="active" fixed class="active_tab">
      <van-tabbar-item v-for="( item , index ) in tabbars" :key="index" @click="tab(index,item.to)">
        <span>
          {{item.title}}
        </span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal">
      </van-tabbar-item>

    </van-tabbar>
  </div>
</div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      props: {
        title: '2222',
        active: 0
      },
      currIndex: 0,
      active: 0,
      tabbars: [{
        name: 'home',
        to: 'home',
        title: '首页',
        normal: require('./assets/navicons/index_gray.png'),
        active: require('./assets/navicons/index.png')
      },
      {
        name: 'goods',
        to: 'goods?id=1',
        title: '精选好货',
        normal: require('./assets/navicons/good_gray.png'),
        active: require('./assets/navicons/goods.png')
      },
      {
        name: 'new',
        to: 'new',
        title: '实时上新',
        normal: require('./assets/navicons/new_gray.png'),
        active: require('./assets/navicons/new.png')
      },
      {
        name: 'coupon',
        to: 'coupon',
        title: '优惠券',
        normal: require('./assets/navicons/coupon_gray.png'),
        active: require('./assets/navicons/coupon.png')
      }]
    }
  },

  methods: {
    tab (index, val) {
      this.$router.push(val)
    }
  },
  mounted: function () {

  },
  watch: {
    '$route' (to) {
      let name = to.name
      for (let item in this.tabbars) {
        if (this.tabbars[item].name === name) {
          this.active = +item
        }
      }
    }
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body,
html,
p {
    padding: 0;
    margin: 0;
}
#nav .van-tabbar {
    height: 0.99rem;
    font-size: 0.2rem;
}
#nav .van-tabbar .van-tabbar-item__text {
    font-size: 0.2rem;
}
.active_tab .van-tabbar-item__icon img {
    width: 0.48rem;
    height: 0.48rem;
}
.active_tab .van-tabbar-item--active {
    color: rgba(255, 96, 93, 1);

}
</style>
