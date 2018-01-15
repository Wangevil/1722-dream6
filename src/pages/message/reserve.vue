<template>
    <div class="reserve-box">
        <ul>
          <li class="ali">
        	<span>    【上午场】故宫成人票+故宫全景手绘地图</span>
            <span class="iconfont">&#xe606;</span>
          </li>
          <li class="bli">
        	<span class="price">￥50</span>
        	<span>/张 </span> 
        	<span>票面价：￥50</span>
          </li>
          <li class="cli">价格日历</li>
          <li class="dli">
        	<ul class="oul">
        	  <li class="oli">
        	  	<span>今天</span>
        	  	<p>1月13日</p>
        	  </li>
        	  <li class="oli tomorrow">
        	  	<span>明天</span>
                <p>1月14日</p>
        	  </li>
        	  <li class="oli">
        	  	<span>后天</span>
                <p>1月15日</p>
        	  </li>
        	  <li class="oli">
        	  	<span>其他日期</span>
        	  </li>
        	</ul>
        	<li class="reserve-notice">需要在游玩前一天的23:59前预订</li>
        	<li class="reserve-now">
        	     立即预订
        	</li>
        	
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'message-reserve'
    }
</script>

<style lang="stylus" scoped>
    .reserve-box
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      background: #fff
      .ali
        display: flex
        justify-content: space-between
        padding: 0.2rem 0.14rem
        font-size: 0.38rem
      .bli
        color: #a3a3a3
        .price
          padding-left: 0.14rem
          font-size: 0.36rem
          color: #ff9400
      .cli
        margin: 0.52rem 0 0 0.2rem 
        height: 0.54rem
      .dli
        padding: 0 0.14rem
        width: 3.5rem
        height: 1.48rem
        .oul
          display: flex
          justify-content: space-between
          width: 3.5rem
          .oli
            width: 2.31rem
            height: 1.29rem
            border: 1px solid #ebebeb
            border-radius: 0.15rem
          .tomorrow
            background: #00bcd5
            color: #fff
      .reserve-notice
         margin-left: 0.14rem
         font-size: 0.22rem
         color: #ff7600
      .reserve-now
        margin-top: 0.2rem
        width: 100%
        height: 1rem
        text-align: center
        line-height: 1rem
        background: #ff9700
        font-size: 0.36rem
        color: #fff
</style>