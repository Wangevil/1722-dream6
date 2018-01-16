<template>
  <div>
   <index-header></index-header>
   <index-swiper :list="swiperInfo"></index-swiper>
   <index-icons :list="iconsInfo"></index-icons>
   <index-position></index-position>
   <index-introlist :list="introInfo"></index-introlist>
   <index-gowhere :list="gowhereInfo"></index-gowhere>
   <index-footer></index-footer>
 </div>

</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexPosition from './position'
  import IndexIntrolist from './introlist'
  import IndexGowhere from './gowhere'
  import IndexFooter from './footer'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexPosition,
      IndexIntrolist,
      IndexGowhere,
      IndexFooter
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        introInfo: [],
        gowhereInfo: []
      }
    },
    methods: {
      getIndexDate () {
        axios.get('/api/index.json?city=' + this.$store.state.city)
         .then(this.handleGetDataSucc.bind(this))
         .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        console.log(res)
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconsList
        this.introInfo = data.introList
        this.gowhereInfo = data.gowhereList
        if (!this.$store.state.city) {
          this.$store.dispatch('changeCityDelayFiveSeconds',data.city)
        }
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexDate()
    },
    watch: {
      '$store.state.city' () {
        this.getIndexDate()
      }
    }
}
</script>

<style></style>