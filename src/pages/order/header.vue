<template>
	<div class="header">
		<div class="left iconfont">&#xe64e;</div>
		<p class="order-title">订单填写</p>
		<div class="right-login">
			登录
		</div>
	</div>
</template>

<script>
export default {
  name: 'order-header'
}
</script>

<style lang="stylus" scoped>
	.header
		display: flex
		height: .88rem
		line-height: .88rem
		background: #00bcd4
		color: #fff
		.left
			width: .58rem
			text-align: center
			font-size: .4rem
			font-weight: bold
		.order-title
			flex: 1
			height: .88rem
			line-height: .88rem
			text-align: center
		.right-login
			width: 1rem
			height: .88rem
			line-height: .88rem
			text-align: center
</style>