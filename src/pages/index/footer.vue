<template> 
  <div class="foot">
    <div class="price"><span class="iconfont">&#xe60b;</span>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
    <div class="ftop">
      <div class="fone">
        <div class="click"><span class="iconfont">&#xe70e;</span><a href="#" class="a">机票</a></div>
        <div class="click"><span class="iconfont">&#xe687;</span><a href="#" class="a">酒店</a></div>
        <div class="click click3"><span class="iconfont">&#xe8e9;</span><a href="#" class="a a3">公寓</a></div>
        <div class="click"><span class="iconfont">&#xe63f;</span><a href="#" class="a">更多</a></div>
      </div>
      <div class="ftwo">
        <a href="#">登陆</a>
        <a href="#">我的订单</a>
        <a href="#">最近浏览</a>
        <a href="#">关于我们</a>
      </div>
    </div>
    <div class="fbottom">
      <h2><a href="#" class="left">触屏版</a><a href="#">电脑版</a></h2>
      <p>Qunar 京ICP备05021087意见反馈</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index-footer'
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
 .foot
   height:3.26rem
   background:#f3f3f3
   .price
     height:.57rem
     padding-top:.2rem
     font-size:.26rem
     text-align:center
     background:white
     .iconfont
       margin-right:.16rem   
   .ftop
     height:1.45rem
     border-bottom:1px solid #c4c4c4
     .fone
       height:.78rem
       line-height:.78rem
       display:flex
       div
         width:25%
         text-align:center
         .iconfont
           font-size:.46rem
           margin-right:.1rem
         a
           display:inline-block
           color:#a2a2a2
           text-decoration:underline
        .click3
           border-right:1px solid gray
     .ftwo
       height:.66rem
       line-height:.66rem
       a
         padding-left:.25rem
         padding-right:.25rem  
  .fbottom 
       text-align:center
       p
         margin-top:-.1rem
       h2
         height:.73rem
         line-height:.73rem
         a
           width:1.57rem
           padding-left:.1rem
           padding-right:.1rem
         .left
           color:#a2a2a2            
</style>