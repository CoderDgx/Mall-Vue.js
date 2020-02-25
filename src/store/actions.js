const actions = {
  addCart(context, info) {
    console.log(info);
    // 1.查看是否添加过
    let oldInfo = context.state.cartList.find(item => item.iid === info.iid)

    // 2.+1或者新添加
    if (oldInfo) {
      //oldInfo.count += 1
      context.commit('addCounter', oldInfo)
    } else {
      info.count = 1
      info.checked = false
      context.commit('addToCart', info)
    }
  }
}

export default actions

