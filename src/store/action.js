import { getAppName } from '../../src/api/service/app'

const action = {
    updateAppName({ commit }) {
        getAppName().then(res => {
            console.log(res)
        })
    }
}

export default action