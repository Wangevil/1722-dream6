<template>
  <div>
  	<message-header :headerP='headerPho'
  	                v-on:click.native='handleClickShow'>
  	</message-header>
  	<message-swiper :pho='list' 
  	                v-show='show'
  	                v-on:click.native='handleswiperClick'>
  	</message-swiper>
  </div>
</template>

<script>
  import MessageHeader from './header'
  import MessageSwiper from './swiper'
  import axios from 'axios'
  export default {
    name: 'message',
    data () {
      return {
        list: [],
        show: false,
        headerPho: ''
      }
    },
    components: {
      MessageHeader,
      MessageSwiper
    },
    methods: {
      getListInfo () {
        axios.get('/api/getList.json')
          .then(this.handlegetListSucc.bind(this))
          .catch(this.handlegetListerror.bind(this))
      },
      handlegetListSucc (res) {
        this.list = res.data.data.swiperlist
        this.headerPho = res.data.data.header
      },
      handlegetListerror () {
        console.log('error')
      },
      handleClickShow () {
        this.show = !this.show
      },
      handleswiperClick () {
        this.show = !this.show
      }
    },
    created () {
      this.getListInfo()
    }
  }
</script>

<style></style>