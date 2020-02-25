import {POP, NEW, SELL} from "./const";
import BackTop from "content/backTop/BackTop";
import TabControl from "content/tabControl/TabControl";

export const backTopMixin = {
  data() {
    return {
      showBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  components: {
    TabControl
  },
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
