<template>
    <div>
      <p class="title"><span class="tit-pho iconfont">&#xe702;</span>去哪儿推荐</p>
      <ul class="oul">
      	<li class="oli">
      	  <div class="recom-left">
      	   <p >【上午场】 故宫成人票+故宫全景手绘地图</p>  
      	   <p class="recom-f">
      	     <span>
      	       <span class="iconfont">&#xe656;</span>
      	                     可订明日
      	     </span>
      	     <span>
               <span class="iconfont">&#xe60b;</span>
                                            不可退
             </span>
      	   </p>
      	  </div>
      	  <div class="recom-right">
      	      <span class="recom-price">￥50</span>
      	      <div class="recom-buy"
      	           v-on:click.native="handlereserveClick">
      	                         预订
      	      </div>     
      	  </div> 
      	</li>

        <li class="oli">
          <div class="recom-left">
           <p >【北京深度游必选组合】天安门+故宫+恭王府/八达岭/颐和园</p>  
           <p class="recom-f">
             <span>
               <span class="iconfont">&#xe656;</span>
                             可订明日
             </span>
             <span>
               <span class="iconfont">&#xe607;</span>
                                            无购物
             </span>
             <span>
               <span class="iconfont">&#xe607;</span>
                                            无自费
             </span>
           </p>
          </div>
          <div class="recom-right">
              <span class="recom-price">￥27起</span>
              <div class="recom-buy">查看</div>     
          </div> 
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'message-recommend',
      methods: {
        handlereserveClick () {
          this.$emit('reserve')
          console.log(1)
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .title
      width: 100%
      height: 0.86rem
      line-height: 0.86rem
      border-bottom: 2px solid #d9d9d9
      .tit-pho
        margin: 0 0.2rem
        width: 0.5rem
        height: 0.5rem
        border-radius: 50%
        background: #fc6f65
        color: #fff
    .oul
      width: 100%
      height: 4.04rem
      .oli
        display: flex
        width:100%
        border-bottom: 1px solid #dadada
        .recom-left
          padding: 0.28rem 0 0.38rem 0.2rem 
          width: 5.01rem
          height: 1.54rem
          line-height: 0.54rem
          .recom-f
            font-size: 0.2rem
            color: #5c5c5c
        .recom-right
          text-align: center
          margin: 0.28rem 0 0 0.3rem 
          width: 1.8rem
          height: 1.66rem
          border-left: 1px solid #dadada
          .recom-price
            display: inline-block
            margin: 0.4rem 0 0.05rem 0
            color: #ee9e3b
          .recom-buy
            display: inline-block
            width: 1.6rem
            height: 0.6rem
            border-radius: 0.08rem
            line-height: 0.6rem
            background: #ee9e3b
            font-size: 0.26rem
            color: #fff
</style>