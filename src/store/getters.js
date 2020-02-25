const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state) {
    return state.cartList.length
  }
}

export default getters
