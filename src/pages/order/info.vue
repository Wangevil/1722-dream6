<template>
    <div class="order-info">
      <div class="info">
        <div class="visitorname">
          <span class="info-span visitor-num">游客<p class="vis-count">1</p></span>
          <input type="text" class="inp-name" :class="{curr:flag}" placeholder="游客名字" @blur="handleNameBlur" />
          <i class="iconfont">&#xe63a;</i>
        </div>
        <div class="phonenum">
          <span class="info-span cell">手机号</span>
          <div class="area-code">+86 ></div>
          <input type="text" class="inp-phone" :class="{curr:flag}" @blur="handlePhoneBlur" placeholder="请填写手机号"/>
        </div>
        <div class="idcard">
          <span class="info-span id">身份证</span>
          <input type="text" class="inp-idcard" :class="{curr:flag}" @blur="handleIdcardBlur" placeholder="请填写正确的身份证号码" />
        </div>
      </div>
      <div class="info" v-show="show" v-for="item of list">
        <div class="visitorname">
          <span class="info-span visitor-num">游客<p class="vis-count">{{item}}</p></span>
          <input type="text" class="inp-name" placeholder="游客名字"  @blur="handleNameBlur" :class="{curr:flag}" />
          <i class="iconfont">&#xe63a;</i>
        </div>
        <div class="idcard">
          <span class="info-span id">身份证</span>
          <input type="text" class="inp-idcard" :class="{curr:flag}" @blur="handleIdcardBlur" placeholder="请填写正确的身份证号码" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'order-info',
  data () {
    return {
      list: [],
      show: false,
      flag: false
    }
  },
  methods: {
    bindEvent () {
      this.$bus.$on('add', this.handleAdd.bind(this))
      this.$bus.$on('minus', this.handleMinus.bind(this))
    },
    handleAdd () {
      this.list.push(this.list.length + 2)
      if (this.list.length > 0) {
        this.show = true
      }
    },
    handleMinus () {
      this.list.pop(this.list[this.list.length - 1])
      if (this.list.length === 0) {
        this.show = false
      }
    },
    handleNameBlur (e) {
      if (e.target.value === '') {
        this.flag = true
        e.target.value = '游客名字'
      }
    },
    handlePhoneBlur (e) {
      if (e.target.value === '') {
        this.flag = true
        e.target.value = '请填写手机号'
      }
    },
    handleIdcardBlur (e) {
      if (e.target.value === '') {
        this.flag = true
        e.target.value = '请填写正确的身份证号码'
      }
    }
  },
  mounted () {
    this.bindEvent()
  }
}
</script>
<style lang="stylus" scoped>
    .order-info
      height: 3rem
      display: flex
      flex-direction: column
      background: #fff
      input
       border: none
       flex: 1
      .curr
         color: red
      .info-span
        width: 1.3rem
        height: 1rem
        margin-right: .4rem
        text-align: center
        line-height: 1rem
      .visitorname
       height: 1rem
       border: 1px solid #f0f0f0
       display: flex
       justify-content: space-between
       .iconfont
          line-height: 1rem
          font-size: 0.4rem
          margin-right: 0.3rem
          color: #5ac1cd
       .vis-count
         display: inline-block
      .phonenum
       height: 1rem
       border: 1px solid #f0f0f0
       display: flex
       .area-code
         width: .8rem
         height: .54rem
         border:1px solid #cccccc
         color: #ccccc
         text-align: center
         line-height: .54rem
         margin: 0.2rem 0.2rem 0 0
      .idcard
       height: 1rem
       border: 1px solid #f0f0f0
       display: flex
       
</style>