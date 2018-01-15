<template>
  <div>
    <order-header></order-header>
    <order-information></order-information>
    <order-playbuy></order-playbuy>
    <order-info></order-info>
    <order-submit></order-submit>
  </div>
</template>

<script>
import OrderHeader from './header'
import OrderInformation from './information'
import OrderPlaybuy from './playbuy'
import OrderInfo from './info'
import OrderSubmit from './submit'
export default {
  name: 'order',
  components: {
    OrderHeader,
    OrderInformation,
    OrderPlaybuy,
    OrderInfo,
    OrderSubmit
  }
}
</script>