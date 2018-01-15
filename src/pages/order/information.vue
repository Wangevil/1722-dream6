<template>
    <div class="order-information">
       <div class="left-title">
          <p class="title">【上午场】故宫成人票 +故宫全景手绘地图</p>
          <span class="data"><i class="iconfont">&#xe64c;</i>2018-01-11</span>
          <p class="warning"><i class="iconfont">&#xe60c;</i>不可退</p>
       </div>
       <div class="right-price">
         <div class="price-top"><i>￥</i><b>50</b>起/张</div>
         <div class="price-bottom">预订须知</div>
       </div>
    </div>
</template>

<script>
  export default {
    name: 'order-information'
}
</script>

<style lang="stylus" scoped>
  .order-information
      height: 2.5rem
      display: flex
      padding: 0 .2rem
      background: #fff
      .left-title
        flex: 1
        .title
          height: 1.3rem
          line-height: .55rem
          margin: 0.3rem 0 0.2rem 0
          font-weight: bold
          font-size: 0.36rem
          font-family: "宋体"
         .data
           display: inline-block
           .iconfont
            color: #00bcd4
            margin: .05rem .1rem 0 0
         .warning
           display: inline-block
           .iconfont
            color: red
            margin: .05rem .1rem 0 .2rem
      .right-price
        width: 2rem
        .price-top
           text-align: right
           font-size: .3rem
           margin-top: .4rem
           i
            color: #ff8300
           b
            font-size: .5rem
            margin: 0 .05rem
            color: #ff8300
        .price-bottom
           text-align: right
           margin-top: .1rem
           color: #47cee0
</style>