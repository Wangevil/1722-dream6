<template>
  <div>
    <div class="container">
      <div class="ctop">
          <span class="iconfont" @click="handleCityClick">&#xe64e;</span>
          <a href="#" class="a1">国内</a>
          <a href="#">海外</a>
      </div>
      <div class="cbottom">
        输入城市名或拼音
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'city-header',
  methods: {
    handleCityClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
 @import "../../assets/stylus/varibles.styl";
 .container
   height:1.9rem
   background:$bgColor
   text-align:center
   .ctop
     height:.82rem
     line-height:.82rem
     text-align:center
     padding-top:.2rem
     a
       display:inline-block
       width:1.99rem
       height:.64rem
       line-height:.64rem
       font-size:.34rem
       color:white
       border:1px solid white
     .a1
       background:white
       color:$bgColor
     .iconfont
       float:left
       color:white
       font-size:.44rem
       margin-left:.14rem
    .cbottom
      width:7rem
      height:.56rem
      line-height:.56rem
      margin-left:.26rem
      margin-top:.1rem
      text-align:center
      border:1px solid white
      border-radius:2px
      background:white;
      color:#a9a9a9     
</style>