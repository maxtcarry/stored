<template lang="html">
  <div class="offerlist">
    <div class="list-item" v-for="(item,index) in goodList" >
      <div class="item-img">
        <img :src="item.imageInfo.imageList[0].url" alt="">
      </div>
      <div class="item-info">
        <div class="title">
          <img class="jd" src="@/assets/home/jd.png" alt="">{{item.skuName}}
        </div>
        <div class="commet">
          <div class="info">
            <p class="price">￥{{item.priceInfo.price}} <span>领券减{{item.couponInfo.couponList[0].discount}} </span> </p>
            <p class="num">  已售{{item.inOrderCount30Days}}件</p>
          </div>
          <div class="btn">
                <button type="button" name="button">立即抢券</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template> 

<script>
import {
  getlist
} from '@/api/request.js'
export default {
  name: 'Offerlist',
  data: () => {
    return {
      goodList: []
    }
  },
  props: {
    eliteId: {
      type: Number
    }
  },
  mounted: function () {
    getlist(this.eliteId).then((res) => {
      let goodList = res
      this.goodList = goodList.filter((item) => {
        return item.couponInfo.couponList.length > 0
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.offerlist {
    width: 100vw;
    height: auto;
    overflow: hidden;
    font-size: 0.26rem;
    .jd {
        display: inline-block;
        width: 0.35rem;
        height: 0.3rem;
        vertical-align: middle;
        margin: 0 0.1rem;
    }
    .list-item {
        width: calc(100vw - 0.48rem);
        height: 2.5rem;
        margin: 0.30rem 0.24rem;
        .item-img {
            width: 2.34rem;
            height: 2.5rem;
            float: left;
            vertical-align: middle;
            img {
                width: 96%;
                height: 96%;
                margin: 0.2%;
            }
        }
        .item-info {
            width: 4.48rem;
            height: 2.5rem;
            float: right;
            position: relative;
            .title {
                width: 4.48rem;
                height: 0.8rem;
                line-height: 0.4rem;
                color: #333;
                font-size: 0.26rem;
                overflow: hidden;
                text-align: left;
            }
            .commet {
                position: absolute;
                bottom: 0;
                left: 0;
                display: inline-block;
                width: 4.48rem;
                height: 0.8rem;
                text-align: left;
                .info {
                    vertical-align: middle;
                    display: inline-block;
                    width: 50%;
                    height: 0.8rem;
                    .price {
                        color: #FF0000;
                        font-size: 0.3rem;
                        span {
                            font-size: 0.22rem;
                            background: #FF9B95;
                            border-radius: 0.8rem;
                            padding: 0.04rem 0.08rem;
                        }
                    }
                    .num {
                        padding: 0.1rem 0;
                        color: #999;
                        font-size: 0.24rem;
                    }
                }
                .btn {
                    vertical-align: middle;
                    line-height: 0.8rem;
                    display: inline-block;
                    width: 50%;
                    height: 0.8rem;
                    text-align: center;
                    button {
                        text-align: center;
                        background: linear-gradient(140deg,rgba(255,97,62,1) 0%,rgba(255,43,31,1) 100%);
                        border-radius: 0.18rem;
                        width: 1.6rem;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        outline: none;
                        border: none;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
}
</style>
