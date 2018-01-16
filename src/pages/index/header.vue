<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <span class="iconfont search-icon">&#xe632;</span>
    请输入城市/景点/游玩主题
    </div>
    <div class="city" @click="handleCityClick">  {{$store.getters.doubleCity}}</div>
  </div>
</template>


<script>
export default {
  name: 'index-header',
  methods: {
    handleCityClick () {
      this.$router.push('/city?name=sun')
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import "../../assets/stylus/varibles.styl";
  .header
    display:flex
    height:.88rem
    line-height:.88rem
    background: $bgColor
    color: #fff
    .back
      width:.58rem
      text-align:center
      font-size:.4rem
      font-weight:bold
      
    .search
      flex:1
      height:.6rem
      line-height:.6rem
      margin:.14rem .2rem
      padding-left:.4rem
      background:#fff
      border-radius:.1rem
      color:#ccc
      .search-icon
        position:relative
        top:.01rem
        right:.02rem
    .city
      padding-right:.6rem
      position:relative
      &:before
        position:absolute
        top:.34rem
        right:.2rem
        content:"\0020"
        width:0
        height:0
        border-left:.14rem solid transparent
        border-right:.14rem solid transparent
        border-top:.14rem solid #fff
</style>