<template>
  <div class="order-playbuy">
      <div class="playbuy-top">
        <span class="playdata">游玩日期</span>
        <ul class="optiondata">
          <li @click="handelClick(1)" :class="{bg:f1}">
            <p>今天<br /><i>1月13日</i></p>
          </li>
          <li @click="handelClick(2)" :class="{bg:f2}">
            <p>明天<br /><i>1月13日</i></p>
          </li>
          <li @click="handelClick(3)" :class="{bg:f3}"><span>其他日期</span></li>
        </ul>
      </div>
      <div class="playbuy-bottom">
        <span class="buycount">购买数量</span>
        <p class="more">最多买5张</p>
        <div class="change-number">
           <div class="minus" @click="handleMinusClick"><i class="iconfont">&#xe601;</i></div>
           <input type="text" :value="inputVal" class="count" />
           <div class="add" @click="handleAddClick"><i class="iconfont">&#xe600;</i></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'order-playbuy',
  data () {
    return {
      inputVal: 1,
      f1: true,
      f2: false,
      f3: false
    }
  },
  methods: {
    handleMinusClick () {
      if (this.inputVal === 1) {
        this.inputVal = 1
      } else {
        this.inputVal = --this.inputVal
        this.$bus.$emit('minus', -1)
      }
    },
    handleAddClick () {
      if (this.inputVal === 5) {
        this.inputVal = 5
      } else {
        this.inputVal = ++this.inputVal
        this.$bus.$emit('add', 1)
      }
    },
    handelClick (index) {
      this.f1 = (index === 1) ? 1 : 0
      this.f2 = (index === 2) ? 1 : 0
      this.f3 = (index === 3) ? 1 : 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .order-playbuy
    height: 2.56rem
    margin: .4rem 0
    background: #fff
    display: flex
    flex-direction: column
    .playbuy-top
      height: 1.32rem
      border-bottom: 1px solid #f5f5f5
      display: flex
      .playdata
        width: 1.7rem
        height: 1.32rem
        text-align: center
        line-height: 1.32rem
      .optiondata
        flex:1
        display: flex
        justify-content: space-around
        padding-top: .3rem
        .bg
         background: #00aec7
         color: #fff
        li
         width: 1.56rem
         height: .8rem
         text-align: center
         border: 1px solid #bdbdbd
         border-radius: 5px
         p
          margin-top: .1rem
          line-height: .35rem
         span
          line-height: .8rem
    .playbuy-bottom
      height: 1.24rem
      display: flex
      .buycount
        width: 1.7rem
        height: 1.24rem
        text-align: center
        line-height: 1.24rem
      .more
        flex: 1
        height: 1.24rem
        line-height: 1.24rem
        color: #d5d5d5
      .change-number
        width: 2rem
        height: .63rem
        border: 1px solid #c7ced4
        display: flex
        margin: 0.3rem 0.3rem 0 0
        .minus
          width: .56rem
          height: .56rem
          background: #f0f0f0
          margin:.03rem
          .iconfont
            font-size: 0.4rem
            line-height: .56rem
            margin-left: .1rem
            color: #cad1d7
        .count
          width: .74rem
          text-align: center
          line-height: 0.56rem
          border: none
        .add
          width: .56rem
          height: .56rem
          margin:.03rem
          background: #00afc7
          .iconfont
            font-size: 0.4rem
            margin-left: .1rem
            line-height: .56rem
            color: #fff
</style>