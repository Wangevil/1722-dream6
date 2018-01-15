<template> 
<div>
 <div class="introlist" v-for="item of list" :key="item.id">
  <div class="ileft"><img :src="item.introUrl"></div>
  <div class="iright">
    <h1>{{item.h1}}</h1>
    <p class="ip1">{{item.p1}}</p>
    <p class="ip2"><span class="ispan">￥<i class="i">{{item.i}}</i></span>起</p>
  </div>
 </div>
 <div class="see">查看所有产品</div>
</div>
</template>
<script>
  export default {
    name: 'index-introlist',
    props: {
      list: Array
    }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
  .introlist
    height:1.4rem
    padding:.24rem
    border-bottom:1px solid #e2e2e2
    .ileft
      float:left
      margin-right:.3rem
    .iright
      float:left
     .ileft img
      width:1.4rem
      height:1.4rem
     .iright h1
      font-size:.36rem
      font-weight:700
     .ip1
      width:5.3rem
      height:.69rem
      line-height:.69rem
      font-size:.3rem
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
      color:#9c9c9c
     .ip1:hover
       color:red
     .ip2
       color:#9c9c9c
       .ispan
         font-size:.3rem
         color:#cc7f49
         margin-right:.04rem
         .i
           font-size:.37rem  
  .see
    height:.89rem
    line-height:.89rem
    font-size:.3rem
    text-align:center
    color:$bgColor   
</style>