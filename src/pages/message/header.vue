<template>
	  <div class="nav-box">
	      <img :src="headerP" class='headerpho'/>
		  <div class='header-left'>故宫(AAAAA景区)</div>
	  </div>
</template>

<script>
  export default {
    name: 'message-header',
    props: {
      headerP: String
    }
  }
</script>

<style lang="stylus" scoped>
	.nav-box
	  position: relative
	  width: 100%
	  height: 4.03rem
	  .headerpho
	    width:100%
	    height: 4.03rem 
	  .header-left
	    position:absolute
	    left: 0.13rem
	    top: 3.6rem
	    z-index: 1000
	    color: #fff
</style>