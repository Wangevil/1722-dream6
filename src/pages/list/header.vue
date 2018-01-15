<template>
  <div class="header">
    <div class="back iconfont">
      &#xe624;
    </div>
    <input type="text" class="search" placeholder='输入城市或者景点'>
    <div class="city">
    搜索
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-header'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
    .search
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      padding-left: .2rem
      border: none
      background: #fff
      border-radius: .1rem
      color: #000
      .search-icon
        position: relative
        top: .02rem
        padding-right: .04rem
    .city
      padding-right: .3rem
      position: relative
</style>