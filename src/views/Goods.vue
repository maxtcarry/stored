
<template lang="html">
  <div id="about">
    <van-tabs  type="line" border="true" v-model="vantabActive" sticky color="#FF2B1F" swipeable  >
      <van-tab class="fsz" :title="item" v-for="(item,index) in vantab" v-bind:key="index" @click="changeTabs(index)">
          <span class="tag default" v-for="(item,index ) in tag"  v-bind:key="index"  :class="item.color" @click="changeTag(item,index)">{{item.info}}  </span>
        <Offerlist :eliteId="vantabActive+1"/>
      </van-tab>
  </van-tabs>
  </div>
</template>
<script>
import Offerlist from '@/components/Offerlist.vue'
import {
  getlist,
  category
} from "@/api/request.js"
export default {
  name: 'goods',
  components: {
    Offerlist,
  },
  data: () => {
    return {
      vantab: ["好券商品", "大咖推荐", "好券商品", "服装运动", "精选家电", "超市", "居家生活"],
      vantabActive: 0,
      tag: [{
          color: "red",
          info: "默认"
        },
        {
          color: "",
          info: "卷后价最低"
        },
        {
          color: "",
          info: "优惠最多"
        }
      ],
    }
  },
  methods: { //   计算属性
    changeTabs: function(index) {
      // console.log(index,title)
      this.eliteId = index
    },
    changeTag: function(item, index) {
      this.tag.map((item, inds) => {
        item.color = "";
        if (inds == index) {
          item.color = "red";
        }
      })
      //进行排序
    }
  },
  mounted: function() {
    let categoryParams = {
      parentId: 0,
      grade: 0
    }
    category(categoryParams).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style >
#about {
  text-align: left;
}

.fsz {
  font-size: 0;
}

.van-tabs--line .van-tabs__wrap {
  height: 1.08rem;
}

.van-ellipsis {
  font-size: 0.28rem;
  line-height: 0.8rem;
}

.van-tabs--line {
  padding-top: 1.28rem;
  margin-bottom: 1rem;
}

.van-tab--active {
  color: #FF2B1F;
}

.van-tabs__line {
  width: 0.64rem;
  height: 0.05rem;
  box-shadow: 0 0.05rem 0.25rem 0rem #ff2b1f;
  bottom: 0.35rem;
}

.tag {
  font-size: 0.28rem;
  margin-left: 0.42rem;
  display: inline-block;
  padding: 0.04rem 0.28rem;
  border-radius: 0.28rem;
}

.default {
  background: #f1f1f1;
  color: #333;
}

.red {
  color: #ff2b1f;
}

.van-toast--text {
  font-size: 0.26rem;
  padding: 0.16rem 0.24rem;
  min-width: 0.96rem;
}
</style>
