import axios from '../request'

// 获取自定义组件列表
export const getList = (url,params) => {
    return axios.post('/edit' + url,params)
}

// 创建自定义组件
export const createLayout = (title) => {
    return axios.post('/edit/create', {
        title
    })
}

// 保存组件布局
export const saveLayout = (pid,dashBoard) => {
    return axios.post('/edit/save', {
        pid,
        dashBoard:JSON.stringify(dashBoard)
    })
}

// 查询布局数据
export const findOneLayout = (id) => {
    return axios.post('/edit/findOne', {
        id
    })
}