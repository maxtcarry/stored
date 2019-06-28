<template lang="html">
  <div class="search">
    <div class="homeSearch">
      <input type="text" name="" value="" placeholder="请输入您要搜索的商品名称">
    </div>
    <div class="searchItem">
      <div class="itemtitle">
        热门搜索 <span class="change">换一批</span>
      </div>
      <div class="itemlist">
        <span>空调扇</span><span>空调空调扇</span><span>空调扇</span><span>空空调调扇</span><span>调扇</span><span>空扇</span><span>空调扇空调</span>
      </div>
    </div>
      <lottie :options="defaultOptions"  :width="width" :height="height" v-on:animCreated="handleAnimation" />
      <button type="button" name="button" @click="thumbUp()">点击</button>
  </div>

</template>

<script>
import Lottie from '@/components/lottie.vue';
import animationData from '@/assets/data'
export default {
  name: 'Search',
  props: ['learning'],
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      thumb_animation: false,
      defaultOptions: {
        animationData: animationData,
        autoplay: false,
        loop: false
      },
      animationSpeed: 0.1,
    width:400,
    height:400
    }
  },
  methods: {
    thumbUp() {
      this.anim.play()
    },
    handleAnimation(anim) {
      this.anim = anim;
    }
  },
  destroyed() {
    this.animation.destroy()
  },

}
</script>

<style lang="scss" scoped>
.search {
    text-align: left;
    .homeSearch {
        width: 100vw;
        line-height: 1.24rem;
        height: 1.24rem;
        vertical-align: middle;
        font-size: 0.24rem;
        position: relative;
    }

    .homeSearch input {
        text-indent: 2em;
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
    .searchItem {
        padding: 0 0.24rem;
        .itemtitle {
            font-size: 0.26rem;
            .change {
                float: right;
                color: #FF2B1F;
            }
        }
        .itemlist {
            font-size: 0;
            span {
                margin: 0.08rem 0.2rem;
                padding: 0.08rem 0.16rem;
                display: inline-block;
                text-align: center;
                font-size: 0.26rem;
                background: #F7F7F7;
                border-radius: 0.04rem;
            }
        }
    }
}
</style>
