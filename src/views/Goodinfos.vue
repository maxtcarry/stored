<template lang="html">
  <div class="goodInfos">
    <swiper class="swiper-wrapper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""> </swiper-slide>
      <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-slide "><img src="../assets/navicons/img.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../assets/navicons/img.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../assets/navicons/img.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../assets/navicons/img.png" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="goodName">
        <img src="@/assets/home/jd.png" alt="">
        <span>正品可爱草莓猪</span>
    </div>
    <div class="goodDesc">
      <p>小编推荐：万和超级品牌日！【领券下单519元秒杀，价保30天】 下单内赠花洒套装【2100w快速加热；双重防护更安心】【万和 官方旗舰店，品质严格精选】</p>
    </div>
    <div class="goodPrice">
      <span class='price'>￥9.9</span>
      <span class='num'>剩余343件</span>
      <span class='coupon'><em>券</em>￥20</span>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  name: 'Goodinfos',
  components: {
    swiper,
    swiperSlide
  },
  data: () => {
    return {
      swiperOption: {
        autoplay: true,
        initialSlide: 1,
        delay: 5000,
        slidesPerView: 1,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.goodInfos {
    font-size: 0.16rem;
    text-align: left;
    .swiper-wrapper {
        width: 100vw;
        height: 5.7rem;
    }
    .swiper-slide {
        width: 100%;
        img {
            width: 100vw;
        }
    }
    .goodName {
        padding: 0 0.32rem;
        font-size: 0.28rem;
        color: #333;

        line-height: 0.42rem;
        img {
            display: inline-block;
            vertical-align: middle;
            padding: 0.02rem 0.08rem;
        }
        span {
            display: inline-block;
            vertical-align: middle;
        }
    }
    .goodDesc {
        padding: 0.15rem 0.32rem;
        font-size: 0.24rem;
        color: #FF9B95;
    }
    .goodPrice {
        padding: 0.15rem 0.32rem;
        font-size: 0.24rem;
        .price {
            color: #FF0000;
        }
        .num {
            color: #999999;
            font-size: 0.26rem;
        }
        .coupon {
            color: #FF2B1F;
            font-size: 0.26rem;
        }
    }
}
</style>
