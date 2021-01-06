import Vue from 'vue'
import App from './App'
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
import uniCard from '@/components/uni-card/uni-card.vue'
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
import uniFav from '@/components/uni-fav/uni-fav.vue'
import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
import uniRate from '@/components/uni-rate/uni-rate.vue'
import uniTag from "@/components/uni-tag/uni-tag.vue"
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

Vue.config.productionTip = false

export default {
	components: {
		uniIcons,
		uniSegmentedControl,
		uniCalendar,
		uniCard,
		uniGoodsNav,
		uniCollapse,
		uniCollapseItem,
		uniFav,
		uniDrawer,
		uniRate,
    uniTag
	}
}

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
