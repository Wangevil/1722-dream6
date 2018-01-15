<template>
	<div class='swiper-box'>
	  <swiper :options="swiperOption">
	    <swiper-slide v-for='item of pho' :key='item.id'>
	    	<img :src='item.url' class='swiper-pho'/>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
  export default {
    name: 'message-swiper',
    props: {
      pho: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
   .swiper-box
     position: absolute
     top: 0
     left: 0
     z-index: 10000
     width: 100%
     height: 100%
     background: #000
     .swiper-pho
       display: inline-block
       z-index: 10
       width: 100%
</style>