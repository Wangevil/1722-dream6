<template>
    <div>
      <div class="odiv">看了该景点的人还看了</div>
      <ul>
      	<li class="oli" v-for='item of comList'>
      	  <img :src='item.img' class="oimg"/>
      	  <div class="odiv-left">
      	    <ul class="oul">
      	    	<li class="olia">{{item.tit1}}</li>
      	    	<li class="olib">{{item.tit2}}</li>
      	    	<li class="olic">{{item.tit3}}</li>
      	    	<li class="olid">{{item.tit4}}</li>
      	    </ul>
      	    <div class="odiv-right">
      	      <span class="price">{{item.tit5}}</span>{{item.tit6}}
      	    </div>
      	  </div>
      	</li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'message-comment',
    props: {
      comList: Array
    }
  }
</script>

<style lang="stylus" scoped>
    .odiv
      margin-top: 0.2rem
      margin-left: 0.42rem
      width: 100%
      height: 0.88rem
      line-height: 0.88rem
      border-bottom: 1px solid #dadada
      font-size: 0.27rem
    .oli
      display: flex
      margin: 0.2rem 0 0.18rem 0.2rem
      .oimg
        margin-right: 0.2rem
        width: 1.62rem
        height: 1.62rem
      .odiv-left
        display: flex
        border-bottom: 1px solid #e2e2e2
        .olia
          margin-bottom: 0.48rem
        .olib
          color: #ecbc50
        .olic
          position: relative
          top: -0.3rem
          left: 1.4rem
          font-size: 0.21rem
          color: #999999
        .olid
          font-size: 0.21rem
          color: #999999
      .odiv-right
        position: absolute
        right: 0.22rem
        font-size: 0.22rem
        color: #999
        .price
          font-size: 0.26rem
          color: #efa027 
</style>