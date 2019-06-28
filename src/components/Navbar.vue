<template lang="html">
<div class="navbar">
  <div class="nav-item">
    <img src="../assets/navbar/girlwear.png" alt="">
    <span>女装</span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/boywear.png" alt="">
      <span>男装</span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/food.png" alt="">
      <span>食物</span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/furniture.png" alt="">
      <span>家居生活</span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/makeup.png" alt="">
      <span>美妆 </span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/mom.png" alt="">
      <span> 母婴</span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/shoe.png" alt="">
      <span> 鞋包配件</span>
  </div>
  <div class="nav-item">
    <img src="../assets/navbar/underwear.png" alt="">
    <span>内衣配饰</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100vw;
    boder: 0.01rem solid rgba(236, 236, 236, 1);
}
.navbar .nav-item {
    width: 25vw;
    display: inline-block;
    font-size: 0.28rem;
    text-align: center;
    img {
        display: inline-block;
        width: 0.96rem;
        height: 0.96rem;
    }
    span {
        display: block;
        color: rgba(153, 153, 153, 1);
    }
}
</style>
