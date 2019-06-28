<template lang="html">
<div class="cardlist">
  <div class="list-item" v-for="(item,index ) in goodList">
    <div class="item-img">
      <img :src="item.imageInfo.imageList[0].url" alt="">
    </div>
    <div class="item-info">
      <div class="title">
      <img class="jd" src="@/assets/home/jd.png" alt="">{{item.skuName}}
      </div>
      <div class="commet">
        <div class="info">
          <p class="price">￥{{item.procenum }} <span>领券减{{item.couponInfo.couponList[0].discount}}</span> </p>
          <p class="ordprice">￥{{item.priceInfo.price}} </p>
          <p class="num">  剩余{{item.inOrderCount30Days}}件</p>
        </div>
        <div class="btn">
            <p><span>券</span>￥{{item.couponInfo.couponList[0].discount}} </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  getlist,
  category,
  keywordPro
} from "@/api/request.js"
export default {
  name: 'Cardlist',
  data: () => {
    return {
      goodList: []
    }
  },
  props: {
    cid1: {
      type: Number
    }
  },
  created: function() {
    console.log(this.cid1)
    let keywordProParams = {
      cid1: this.cid1,
      isCoupon: 1
    }
    keywordPro(keywordProParams).then((res) => {
      let resdata = res;
      resdata.map((item, index, arr) => {
        item.procenum = (item.priceInfo.price - item.couponInfo.couponList[0].discount + "").length > 6 ?
          (item.priceInfo.price - item.couponInfo.couponList[0].discount).toFixed(1) :
          (item.priceInfo.price - item.couponInfo.couponList[0].discount)
      })
      resdata.map((item, index) => {
        if (item.procenum < 0) {
          resdata.splice(index, 1)
        }
      })
      this.goodList = resdata
    })
  }
}
</script>

<style lang="scss" scoped>
.cardlist {
    margin-top: 0.3rem;
    font-size: 0.26rem;
}
.list-item {
    width: 3.4rem;
    height: 5.1rem;
    display: inline-block;
    text-align: center;
    &:nth-of-type(odd) {
        margin-left: 0.24rem;
        margin-right: 0.12rem;
    }
    &:nth-of-type(even) {
        margin-left: 0.12rem;
    }
    .item-img img {
        display: inline-block;
        width: 3.4rem;
        height: 3.09rem;
    }
    .item-info {
        position: relative;
        .title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            img {
                width: 0.35rem;
                height: 0.3rem;
                display: inline-block;
                vertical-align: middle;
                padding: 0 0.1rem;
            }
        }
        .commet {
            .info {
                .price {
                    color: #FF0000;
                    font-size: 0.3rem;
                    text-align: left;
                    span {
                        padding: 0.04rem 0.08rem;
                        vertical-align: middle;
                        display: inline-block;
                        font-size: 0.22rem;
                        border-radius: 0.22rem;
                        background: #FF9B95;
                        margin-left: 0.28rem;
                        color: #fff;
                    }
                }
                .ordprice {
                    text-align: left;
                    font-size: 0.24rem;
                    color: #999;
                    text-decoration: line-through;
                }
                .num {
                    text-align: left;
                    color: #999999;
                }
            }
            .btn {
                position: absolute;
                right: 0.12rem;
                bottom: 0.06rem;
                height: 0.38rem;
                width: 1.3rem;
                border-radius: 0.12rem;
                border: 0.02rem solid #FF0000;
                overflow: hidden;
                p {
                    color: red;
                    span {
                        color: #fff;
                        width: 0.42rem;
                        height: 0.38rem;
                        text-align: center;
                        line-height: 0.38rem;
                        display: inline-block;
                        background: red;
                        float: left;
                    }
                }
            }
        }
    }
}
</style>
