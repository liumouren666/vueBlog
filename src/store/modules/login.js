export default {
    namespaced: true,
    state: {
        loginStaus: false,
        loginAccount: '',
        loginPassword: ''

    },
    mutations: {
        loginCheck(state, payload) {
            state.loginStaus = payload.account == 'lbx123456' && payload.password == '123456'

        },
        outLogin(state) {
            state.loginStaus = false
        }


    }
}