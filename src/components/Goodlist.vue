<template lang="html">
  <div class="goodlist" >
    <div class="good-item-first">
      <div class="first">
        <div class="title" >
          家电数码
        </div>
        <div class="desc">
          品质生活好品味
        </div>
        <div class="imgShow">
          <img src="@/assets/home/nav1.png" alt="">
        </div>
      </div>

    </div>
    <div class="good-item-list">
      <div class="good-item ">
        <div class="title">
          每日必拍劵
        </div>
        <div class="desc">
          无门槛直减百元
        </div>
        <div class="imgShow">
          <img src="@/assets/home/nav2.png" alt="">
        </div>
      </div>
      <div class="good-item">
        <div class="title">
          9块9
        </div>
        <div class="desc">
          精选优质生活
        </div>
        <div class="imgShow">
          <img src="@/assets/home/nav4.png" alt="">
        </div>
      </div>
      <div class="good-item">
        <div class="title">
          人气榜
        </div>
        <div class="desc">
          大家喜欢才是真的好
        </div>
        <div class="imgShow">
          <img src="@/assets/home/nav5.png" alt="">
        </div>
      </div>
      <div class="good-item">
        <div class="title">汽车配件
        </div>
        <div class="desc">
          汽车用品超低价
        </div>
        <div class="imgShow">
          <img src="@/assets/home/nav3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Goodlist",
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>
  .goodlist {
    font-size: 0;
    margin: 0.2rem 0.25rem;
    vertical-align: middle;
    .good-item-first {
        vertical-align: middle;
        // float: left;
        display: inline-block;
        width: 2.9rem;
        height: 4.82rem;

        .first {
            overflow: hidden;

            width: 2.9rem;
            height: 4.68rem;
            box-shadow: 0 0 0.43rem 0 rgba(255,224,217,1);
            border-radius: 0.3rem;
            text-align: left;
            .title {
                padding-top: 0.2rem;
                padding-left: 0.2rem;
                color: rgba(225, 9, 40, 1);
                font-size: 0.28rem;
                line-height: 0.4rem;
            }
            .desc {
                padding: 0 0.2rem;
                color: rgba(153, 153, 153, 1);
                font-size: 0.24rem;
            }
            .imgShow {
                display: inline-block;
                text-align: center;
                margin: 0.6rem 0;
                width: 100%;
                height: 2.77rem;
                img {
                    height: 100%;
                }
            }

        }
    }
    .good-item-list {

        vertical-align: middle;
        height: 4.82rem;
        width: 4.1rem;
        display: inline-block;
        .title {
            line-height: 0.4rem;
        }
        .good-item {
            text-align: left;
            overflow: hidden;
            margin: 0 0.075rem 0.1rem;
            width: 1.86rem;
            height: 2.30rem;
            display: inline-block;
            box-shadow: 0 0 0.43rem 0 rgba(255,224,217,1);
            border-radius: 0.3rem;
            font-size: 0.28rem;
            overflow: hidden;
            img {

                height: 100%;
            }

            &:nth-of-type(1) {
                .title {
                    padding-top: 0.1rem;
                    padding-left: 0.2rem;
                    color: rgba(74, 102, 255, 1);
                    font-size: 0.28rem;
                }
                .desc {
                    padding-left: 0.2rem;
                    color: rgba(153, 153, 153, 1);
                    font-size: 0.23rem;
                }
                .imgShow {
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    height: 1.38rem;
                }
            }
            &:nth-of-type(2) {
                .title {
                    padding-top: 0.1rem;
                    padding-left: 0.2rem;
                    color: rgba(160, 3, 222, 1);
                    font-size: 0.28rem;
                }
                .desc {
                    padding-left: 0.2rem;
                    color: rgba(153, 153, 153, 1);
                    font-size: 0.24rem;
                }
                .imgShow {
                    display: inline-block;

                    margin: 0.4rem 0;
                    text-align: center;
                    width: 100%;
                    height: 0.71rem;
                }
            }
            &:nth-of-type(3) {
                .title {
                    padding-top: 0.1rem;
                    padding-left: 0.2rem;
                    color: rgba(225, 9, 40, 1);
                    font-size: 0.28rem;
                }
                .desc {
                    padding-left: 0.2rem;
                    color: rgba(153, 153, 153, 1);
                    font-size: 0.18rem;
                }
                .imgShow {
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    height: 1.37rem;

                }
            }
            &:nth-of-type(4) {
                .title {
                    padding-top: 0.1rem;
                    padding-left: 0.2rem;
                    color: rgba(0, 181, 241, 1);
                    font-size: 0.28rem;
                }
                .desc {
                    padding-left: 0.2rem;
                    color: rgba(153, 153, 153, 1);
                    font-size: 0.24rem;
                }
                .imgShow {
                    margin: 0.2rem 0;
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    height: 0.85rem;
                }
            }
        }
    }

}
</style>
