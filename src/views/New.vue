
<template lang="html">
  <div id="card">
    <van-tabs  type="line" border="true" v-model="vantabActive" sticky color="#FF2B1F" swipeable  @click="changeTabs" >
      <van-tab class="fsz" :title="item.name" v-for="(item,index) in vantab" v-bind:key="index">
          <span class="tag default" v-for="(item,index ) in tag" v-bind:key="index" :class="item.color" @click="changeTag(item,index)">{{item.info}}</span>
        <Cardlist :cid1="cid1"/>
      </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import Cardlist from '@/components/Cardlist.vue'
import {
  getlist,
  category,
  keywordPro
} from "@/api/request.js"
export default {
  name: 'goods',
  components: {
    Cardlist,
  },
  data: () => {
    return {
      vantab: ["全部", "女装", "男装", "内衣配饰", "母婴玩具", "休闲" ],
      vantabActive: 0,
      cid1:652,
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
      ]
    }
  },
  methods: {
    changeTabs: function(res) {

      this.cid1 = this.vantab[res].id
      console.log("参数",  this.cid1)
    },
    changeTag: function(item, index) {
      this.tag.map((item, inds) => {
        item.color = ""
        if (inds === index) {
          item.color = 'red'
        }
      })
    }
  },
  beforeMount:function(){
    let categoryParams = {
      parentId: 0,
      grade: 0
    }
    category(categoryParams).then((res) => {
    this.vantab = res
    this.cid1 = res[0].id
    })
  },
  mounted:function(){

  }
}
</script>

<style  >
#card {

  text-align: left;
}
.fsz{
  font-size: 0;
}
.van-tabs--line .van-tabs__wrap {
  height: 1.08rem;
  box-shadow:0px 0px 0.2rem 0px rgba(226,226,226,0.5);
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
</style>
