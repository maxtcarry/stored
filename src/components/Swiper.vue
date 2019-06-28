<template>
<swiper class="swiper-wrapper" :options="swiperOption" ref="mySwiper">
  <!-- slides -->
  <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""> </swiper-slide>
  <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""></swiper-slide>
  <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""></swiper-slide>
  <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""></swiper-slide>
  <swiper-slide class="swiper-slide"><img src="../assets/navicons/img.png" alt=""></swiper-slide>
  <swiper-slide class="swiper-slide"><img src="../assets/navicons/img.png" alt=""></swiper-slide>
  <swiper-slide class="swiper-slide"><img src="../assets/navicons/img.png" alt=""></swiper-slide>
</swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        initialSlide: 1,
        delay: 5000,
        slidesPerView: 3,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
        loop: true

      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }

  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.swiper-container {
    width: 250vw;
    margin-left: -75vw;
    padding-top: 0;
    height: 3.24rem;
}
.swiper-slide {
    width: 90vw;
    height: 3.24rem;
    background-position: center;
    background-size: cover;
    transition: all 1s;
}
.swiper-slide img {
    width: 6.2rem;
    margin: 0;
    height: 2.8rem;
    transform: scale(0.88);
    box-shadow: 0 0.13rem 0.37rem 0 rgba(146,146,146,0.5);
}
// 激活的样式（选中的当前项）
.swiper-slide.swiper-slide-active {
    transform: scale(1.15);
    z-index: 2;

}
</style>
