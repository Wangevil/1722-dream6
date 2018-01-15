<template>
	  <div class="header-box">
	    <img :src="headerP" class='headerpho'/>
	    <span class="icon-box iconfont">&#xe624;</span>
		  <div class='header-left'>故宫(AAAAA景区)</div>
		  <div class="header-fix">
		   <span class="iconfont"></span>
		   <span>故宫</span>
		  </div>
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
	.header-box
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
	  .icon-box
	    position: absolute
	    left: 0.1rem
	    top: 0.1rem
	    text-align: center
	    line-height:0.6rem
	    width: 0.6rem
	    height: 0.6rem
	    border-radius: 50%
	    background: rgba(0,0,0,.4)
	    color: #fff
	  .header-fix
	    position: fixed
	    top: 0
	    left: 0 
	    text-align: center
	    width: 100%
	    height: 0.88rem
	    line-height: 0.88rem
	    background: #56b8d1
	    color: #fff
</style>