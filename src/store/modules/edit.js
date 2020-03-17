export default {
    namespaced: true,
    state: {
        config: {}, // 组件配置项
        dashBoard:[] //  布局信息
    },
    getters: {},
    mutations: {
        SET_INFO(state,info) {
            state.config = info
        },
        SET_LAYOUT(state,obj) {
            state.dashBoard = obj
        },
        REMOVE_LAYOUT(state) {
            state.dashBoard = []
        }
    },
    actions: {
        setInfo({ commit }, info) {
            commit('SET_INFO',info)
        },
        setLayout({ commit }, obj) {
            commit('SET_LAYOUT',obj)
        },
        removeLayout({ commit }) {
            commit('REMOVE_LAYOUT')
        }
    }
} 