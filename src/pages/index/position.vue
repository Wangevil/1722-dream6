<template>
  <div>
 <div class="position">
   <div class="left"><span class="iconfont">&#xe604;</span>定位失败</div>
   <div class="right"><span class="iconfont">&#xe62a;</span>5折泡温泉</div>
 </div>
 <div class="hotintro">热销推荐</div>
 </div>
</template>
<script>
  export default {
    name: 'index-position'
  }
</script>
<style lang="stylus" scoped>
    .position
      display:flex
      height:1rem
      line-height:1rem
      border-top:1px solid #e1e1e1
     .position div
       width:50%
       text-align:center
       font-size:.3rem
      .left
        border-right:1px solid #e1e1e1 
       .iconfont
         margin-right:.1rem 
    .hotintro
      height:0.86rem
      line-height:.86rem
      font-size.3rem
      font-weight:bold
      padding-left:.3rem
      background:#f5f5f5     
</style>