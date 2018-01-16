<template>
  <div>
    <div class='view' v-for='item of list' :key='item.id'>
      <div class='image'>
        <img :src='item.imgUrl' alt="" />
      </div>
      <div class='details'>
        <div class='address'>
          <p>{{item.title}}</p>
        </div>
        <div class='introduce'>
          <ul>
          	<li class='one'>北京出发</li>
          	<li class='two'>无自费</li>
          	<li class='two'>无购物</li>
          </ul>
          <p class='price'>
            <span>￥</span>
            <span>{{item.price}}</span>
            <span>起</span> 
          </p>
          <p class='sold'>已售{{item.sold}}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'list-view',
    props: {
      list: Array
    }
  }
</script>

<style lang='stylus' scoped>
  @import "../../assets/stylus/varibles.styl";
  .view
    display: flex
    height: 2.2rem
    margin-top: .05rem
    .image
      display: flex
      width: 2rem
      Justify-content: center
      align-items: center
      img
        width: 1.7rem
        height: 1.7rem
    .details
      flex: 1
      padding: .25rem .2rem 0 0
      border-bottom: .01rem solid #e2e2e2
      .address
        font-size: 0.3rem
        height: .8rem
        font-weight: 800
        line-height: .4rem
      .introduce
        flex: 1
        ul
          display: flex
          width: 2.9rem
          height: .3rem
          line-height: .3rem
          font-size: .2rem
          margin-top: .1rem
          margin-left: .1rem
          li
            flex: 1
            float: left
            text-align: center
          .one
            color: #67c3d2
          .two
            color: #5d5d5d
            text-align: center
        .price
          float: right
          font-size: .15rem
          :nth-child(1)
            font-size: .15rem
            color: #f48205
          :nth-child(2)
            font-size: .3rem
            color: #f48205
          :nth-child(3)
            font-size: .15rem
            color: #c1c7c7
        .sold
          margin-top: .2rem
          color: #d5d5d5
</style>