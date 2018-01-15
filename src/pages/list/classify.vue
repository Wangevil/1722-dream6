<template>
  <div>
    <div class="classify"  :class="searchBarFixed == true ? 'mounting' :''">
      <ul >
        <li class="nav"  @click='handleChange(1)' :class="{active: c1}">
          <span>全部分类</span>
        </li>
        <li class="nav"  @click='handleChange(2)' :class="{active: c2}">
          <span>全部目的地</span>
        </li>
        <li class="nav none"  @click='handleChange(3)' :class="{active: c3}">
          <span>推荐排序</span>
        </li>
      </ul>
      <div class="mask-one" :class="maskShow == true ? 'show' : ''">
        <div class="mask-text">
          什么情况
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'classify-header',
    data () {
      return {
        c1: false,
        c2: false,
        c3: false,
        searchBarFixed: false,
        maskShow: true
      }
    },
    methods: {
      handleChange (sign) {
        this.c1 === 1 ? (this.c1 = 0) : (this.c1 = (sign === 1) ? 1 : 0)
        this.c2 === 1 ? (this.c2 = 0) : (this.c2 = (sign === 2) ? 1 : 0)
        this.c3 === 1 ? (this.c3 = 0) : (this.c3 = (sign === 3) ? 1 : 0)
        if (this.maskShow === true && this.c1 === 1) {
          this.maskShow = false
        } else {
          this.maskShow = true
        }
      },
      handleScroll () {
        const scrollTop = window.pageYOffset
//      console.log(scrollTop)
        const offsetTop = document.querySelector('.classify').offsetTop
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .mounting
    position: fixed
    top: 0
  .classify
    height: .88rem
    line-height: .88rem
    color: #2e2e2e
    font-weight: 800
    z-index: 999
    .show
      display: none
    ul
      float: left
      border-bottom: .01rem solid #e7e7e9
      .nav
        text-align: center
        float: left
        border-right: .01rem solid #e7e7e9
        width: 2.49rem
        background: #fff
        span
          position: relative
          &:before
            position: absolute
            top: .15rem
            right: -0.4rem
            content: "\0020"
            width: 0
            height: 0
            border-left: .1rem solid transparent
            border-right: .1rem solid transparent
            border-top: .1rem solid #656565
      .none
        border-right: none
      .active
        color: $bgColor
        span
          position: relative
          &:before
            position: absolute
            top: .15rem
            right: -0.4rem
            content: "\0020"
            width: 0
            height: 0
            border-left: .1rem solid transparent
            border-right: .1rem solid transparent
            border-top: none
            border-bottom: .1rem solid $bgColor
    .mask-one
      height: 20rem
      background: rgba(0,0,0,.3)
      .mask-text
        height: 4rem
        background: #fff
</style>