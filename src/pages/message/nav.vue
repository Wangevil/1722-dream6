<template>
    <div class="nav-box">
      <ul>
        <li class="oli ali">
          <div class="odiv adiv">
            <span>
              <span class="iconfont">&#xe604;</span>
              {{address}}
            </span>
            <span class="iconfont">&#xe662;</span>    
          </div>
        </li>
        <li class="oli">
          <div class="odiv">
            <div>
              <span class="iconfont">&#xe640;</span>
              {{construct}}
            </div>
            <span class="iconfont">&#xe662;</span>  
          </div>
        </li>
        <li class="oli cli">
          <div class="odiv">
            <div class='star'>
              <span class="iconfont">&#xe629;</span>
                                          ★★★★★ <span class='scroe'>5.0分</span>
            </div>
            <span>
              <span class='pri'>175464评论</span>
              <span class="iconfont">&#xe662;</span>
            </span>
          </div>
        </li>
        <li class="oli dli" v-on:click='handleNoticeClick'>
          <div class="odiv ddiv">
            <div>
              <span class="iconfont">&#xe628;</span>
              {{notice}}
            </div>
            <span class="iconfont icon-right">&#xe662;</span>  
          </div>
        </li>
      </ul>
      <div v-show="show" class="nav-notice">
        <p class="notice-one">
          <span class="iconfont">&#xe628;</span>
      	      景区公告
        </p>
        <p class="notive-close">除法定节假日，故宫博物院实行周一闭馆。</p>
        <span class="notive-close iconfont" 
              v-on:click="handleCloseClick">
              &#xe606;
        </span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'message-nav',
    data () {
      return {
        address: '北京市东城区景山前街4号',
        construct: '查看景点简介及开放时间',
        notice: '除法定节假日，故宫博物院实行周一闭馆。',
        show: false
      }
    },
    methods: {
      handleNoticeClick () {
        this.show = !this.show
      },
      handleCloseClick () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="stylus" scoped>
   .nav-box
     width: 100%
     height: 4.13rem
     background: #f5f5f5   
     .cli
       margin: 0.2rem 0
       height: 0.8rem
       line-height: 0.8rem
     .dli
       z-index: 10
       background: #f9eddd
       .icon-right
         color: #bbaf9f 
     .oli
       background: #fff
       font-size: 0.24rem
       .odiv
         display: flex
         justify-content: space-between
         margin: 0 auto
         width: 7.2rem
         line-height: 0.87rem
         height: 0.87rem
         .star
           color: #f6b654
         .pri
           color: #959595
         .scroe
           color: #f18954
       .adiv
         border-left: 0.01rem
         border-right: 0.01rem
         height: 0.97rem
         border-bottom: 1px solid #f0f0f0
       .ddiv
         color: #f97245
     .nav-notice
       position: absolute
       top: 0
       left: 0
       z-index: 1000
       text-align: center
       width: 100%
       height: 100%
       background: rgba(255,255,255,.9)
       .notice-one
         margin: 1.94rem 0 1.3rem
         font-size: 18px
         color: #ff3862
       .notive-close
         margin-bottom: 5.66rem 
</style>