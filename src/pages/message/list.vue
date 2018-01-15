<template>
    <div class="big-box">
      <div class="list-cut"></div>
      <ul class="oul" v-for="(item,index) of listInfo" :key="index" >
      	<li class="oli">
      	  <div class="odiv">
      	    <span class="list-tit">
      	      <span class="iconfont"></span>
      	      {{item.title}}
      	    </span>    
      	  </div>
      	</li>
      	<li class="oli">
      	  <div class="odiv">
      	    <div>
      	      <span>{{item.con1}}</span>
      	      <span class="list-card">{{item.con2}}</span>
      	    </div>
      	    <div>
      	      <span class="list-price">{{item.con3}}</span>
      	      <span class="list-ji">{{item.con4}}</span>
      	      <span class="iconfont"></span>
      	    </div>  
      	  </div>
      	</li>
      	<li class="oli">
      	  <div class="odiv">
            <div>
              <span>{{item.con5}}</span>
              <span class="list-card">{{item.con6}}</span>
            </div>
            <div>
              <span class="list-price">{{item.con7}}</span>
              <span class="list-ji">{{item.con8}}</span>
              <span class="iconfont"></span>
            </div>    
      	  </div>
        </li>
      	<li class="oli list-end">
      	            查看剩余产品
      	    <span class="iconfont"></span>
      	</li>
        <div class="list-cut"></div>
      </ul> 
      
    </div>
</template>

<script>
  export default {
    name: 'message-list',
    props: {
      listInfo: Array
    }
  }
</script>

<style lang="stylus" scoped>
   .big-box
    margin-top: 0.36rem
    .list-cut
      width: 100%
      height: 0.2rem
      background: #f5f5f5
    .oul
     width: 100%
     height: 3.52rem
     .oli
       width: 100%
       height: 0.88rem
       border-bottom: 1px solid #dadada
       line-height: 0.88rem
       .odiv
         display: flex
         justify-content: space-between
         margin: 0 auto
         width: 7.13rem
         font-size: 0.27rem
         .list-tit
           font-size: 0.3rem
         .list-card
           font-size: 0.2rem
           color: #8a8a8a
         .list-price
           color: #ffa614
         .list-ji
           font-size: 0.16rem
           color: #9d9d9d
     .list-end
       text-align: center
</style>