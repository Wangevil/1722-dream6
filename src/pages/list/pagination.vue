<template>
  <div>
    <div class="pagination">
      <div class="top-box">
        <ul>
        	<li class="last-page">上一页</li>
        	<li class="pages">
        	  <span class="page">1</span>
        	  /
        	  <span class="page-count">2</span>
        	</li>
        	<li class="next-page">下一页</li>
        </ul>
        <div class="footer">
          去哪儿门票
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-pagination'
  }
</script>

<style lang='stylus' scoped>
  @import "../../assets/stylus/varibles.styl";
  .pagination
    height: 2.8rem
    background: #f5f5f5
    ul
      display: flex
      /*height: 1rem*/
      Justify-content: center
      padding-top: .2rem
      margin-bottom: .1rem
      li
        float: left
        padding: .2rem
      .last-page
        width: .9rem
        height: .1rem
        line-height: .1rem
        background: #bdbdbd
        border-radius: .08rem
        color: #fff
      .next-page
        width: .9rem
        height: .1rem
        line-height: .1rem
        background: #fff
        border-radius: .08rem
        border: .01rem solid $bgColor
        color: $bgColor
      .pages
        width: .6rem
        height: .1rem
        line-height: .1rem
    .footer
      text-align: center
      color: $bgColor
</style>