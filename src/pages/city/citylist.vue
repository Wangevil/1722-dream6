<template>
  <div>
   <div class="location-containner">
     <p class="area-title">您的位置</p>
      <div class="location">
        <div class="location-city">{{$store.state.city}}</div>
      </div>
   </div>
   <div class="hotCity-containner">
      <p class="area-title">热门城市</p>
      <div class="hotCity location">
        <div class="hotCity-city location-city" v-for="item of hostct" :key="item.id" @click="handleClick">
           {{item.city}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'city-list',
  props: {
    hostct: Array
  },
  methods: {
    handleClick (e) {
      this.$store.commit('changeCity', e.target.innerHTML)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .area-title
    background: #f5f5f5
    color: #616161
    font-size: .26rem
    line-height: .54rem
    padding-left: .3rem
  .location
    background: #fff
    overflow: hidden
    padding: .04rem .5rem .26rem .6rem
    border-bottom: .02rem solid #c9cccd
    .location-city
      box-sizing: border-box
      border: .02rem solid #c9cccd
      border-radius: .06rem
      color: #212121
      line-height: .56rem
      margin-top: .2rem
      text-align: center
      width: 29%
      margin-right:.2rem
      display:inline-block
    .hotCity
      display: flex
      
    
      
        
</style>