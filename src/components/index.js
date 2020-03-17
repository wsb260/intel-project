import filterTable from './filterTable.vue'
import ChartTrend from './chart/chartTrend.vue'
let intelComponent = {
    filterTable,
    ChartTrend // 趋势图
}

const install = Vue => {
    Object.keys(intelComponent).forEach(key => {
        Vue.component(key,intelComponent[key])
    })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default Object.assign(intelComponent,{install})