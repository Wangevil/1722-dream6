<template>
      <div class="footer-box">   
        <ul class="oula">
          <li class="oli">
            <span>机票</span>
          </li>
          <li>
            <span>酒店</span>
          </li>
          <li>
           <span>公寓</span> 
          </li>
          <li>
            <span>更多</span>
          </li> 
        </ul>
        <ul class="oulb">
          <li class="oli">登录</li>
       	  <li>我的订单</li>
       	  <li>最近浏览</li>
       	  <li>关于我们</li>
        </ul> 
      </div>
</template>

<script>
  export default {
    name: 'message-footer'
  }
</script>

<style lang="stylus" scoped>
   .footer-box
     width: 100%
     height: 3.4rem
     text-align: center
     background: #f3f3f3
     .oula
       display: flex
       margin-top: 0.62rem
       width: 5.56rem
       height: 0.44rem
       color: #b1b1b1
       .oli
          margin-top: 0.96rem
     .oulb
       display: flex
       width: 100%
       height: 0.58rem
       border-bottom: 1px solid #cacaca
       color: #81c8c2 
</style>