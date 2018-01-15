<template> 
<div class="otop">
  <div class="gtop">
    周末去哪儿
  </div>
  <div class="section" v-for="item of list" :key="item.id">
    <div class="sone">
      <img :src="item.goUrl">
    </div>
    <div class="stwo">
      <h2>{{item.h2}}</h2>
      <p>{{item.p}}</p>
    </div>
    
  </div>
</div>
</template>
<script>
  export default {
    name: 'index-gowhere',
    props: {
      list: Array
    }
  
}
</script>
<style lang="stylus" scoped>
.otop
  background:#f5f5f5
  .gtop
    height:.76rem
    line-height:.76rem
    font-size:.37rem
    text-indent:.4rem
    font-weight:700
  .section
    height:4.15rem
    background:white
    margin-bottom:.12rem
   .sone
     height:2.8rem
    .sone img
      width:100%
      height:100%
   .stwo
     padding:.24rem
     border-bottom:1px solid #ccc
     h2
       font-size:.42rem
       font-weight:600
       margin-bottom:.1rem
      p
        height:.42rem
        line-height:.57rem 
          
</style>