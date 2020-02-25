const mutations = {
  addCounter(state, oldInfo) {
    oldInfo.count ++;
  },
  addToCart(state, info) {
    state.cartList.push(info)
  }
}

export default mutations

