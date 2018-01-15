<template>
  <div>
  	<message-header :headerP='headerPho'
  	                v-on:click.native='handleClickShow'>
  	</message-header>
  	<message-swiper :pho='list' 
  	                v-show='show'
  	                v-on:click.native='handleClickShow'>
  	</message-swiper>
  	<message-nav></message-nav>
  	<message-recommend v-on:reserve="handleResClick"></message-recommend>
  	<message-reserve v-show="show"></message-reserve>
  	<message-list :listInfo="listInfo"></message-list>
  	<message-comment :comList="comList"></message-comment>
  	<message-footer></message-footer>
  </div>
</template>

<script>
  import MessageHeader from './header'
  import MessageSwiper from './swiper'
  import MessageNav from './nav'
  import MessageRecommend from './recommend'
  import MessageReserve from './reserve'
  import MessageList from './list'
  import MessageComment from './comment'
  import MessageFooter from './footer'
  import axios from 'axios'
  export default {
    name: 'message',
    data () {
      return {
        list: [],
        show: false,
        headerPho: '',
        listInfo: [],
        comList: []
      }
    },
    components: {
      MessageHeader,
      MessageSwiper,
      MessageNav,
      MessageRecommend,
      MessageReserve,
      MessageList,
      MessageComment,
      MessageFooter
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
        this.listInfo = res.data.data.listInfo
        this.comList = res.data.data.comlist
      },
      handlegetListerror () {
        console.log('error')
      },
      handleClickShow () {
        this.show = !this.show
      },
      handleResClick () {
        this.show = !this.show
      }
    },
    created () {
      this.getListInfo()
    }
  }
</script>

<style></style>