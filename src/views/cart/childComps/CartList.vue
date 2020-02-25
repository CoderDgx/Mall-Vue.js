<template>
  <div class="content">
    <scroll class="cart-list" ref="scroll">
      <div>
      <cart-list-item v-for="item in list" :key="item.iid" :item-info="item"></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import { mapGetters } from 'vuex'

	export default {
		name: "CartList",
    components: {
		  Scroll, CartListItem
    },
    computed: {
      ...mapGetters({
        list: 'cartList',
      }),
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden
  }
  .cart-list {
    height: 100%;
  }
</style>
