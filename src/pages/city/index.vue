<template>
  <div>
   <city-header></city-header>
   <city-list :hostct="hostcityInfo"></city-list>
 </div>

</template>

<script>
  import CityHeader from './header'
  import CityList from './citylist'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      CityHeader,
      CityList
    },
    data () {
      return {
        hostcityInfo: []
      }
    },
    methods: {
      getIndexDate () {
        axios.get('/api/city.json?city=' + this.$store.state.city)
         .then(this.handleGetDataSucc.bind(this))
         .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        console.log(res)
        const data = res.data.data
        this.hostcityInfo = data.hostcity
      },
      handleGetDataErr () {
        console.log('error')
      }

    },
    created () {
      this.getIndexDate()
    }
    

}
</script>

<style></style>
