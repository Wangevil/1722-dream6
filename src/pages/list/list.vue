<template>
  <div>
    <list-header></list-header>
    <list-classify></list-classify>
    <list-view :list='viewInfo'></list-view>
    <list-pagination></list-pagination>
  </div>
</template>

<script>
  import ListHeader from './header'
  import ListClassify from './classify'
  import ListView from './view'
  import ListPagination from './pagination'
  import axios from 'axios'
  export default {
    name: 'List',
    components: {
      ListHeader,
      ListClassify,
      ListView,
      ListPagination
    },
    data () {
      return {
        viewInfo: []
      }
    },
    methods: {
      getListData () {
        axios.get('/api/list.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.viewInfo = data.viewList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getListData()
    }
  }
</script>

<style>

</style>