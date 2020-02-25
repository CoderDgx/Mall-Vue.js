<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{count}})</div>
    </nav-bar>
    <cart-list/>
    <bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      BottomBar
    },
    computed: {
      ...mapGetters({
        'count': 'cartCount',
      })
    }
  }
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

</style>
