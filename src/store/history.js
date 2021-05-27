export default {
    state: {
        historyInfo: []
    },
    mutations: {
        addHistoryRecord(state, record) {
            state.historyInfo.unshift(record);
            localStorage.setItem('historyInfo', JSON.stringify(state.historyInfo));
        },
        setHistoryInfo(state, info) {
            state.historyInfo = info;
        }
    },
    actions: {
        createHistoryRecord({ commit }, record) {
            try {
                commit('addHistoryRecord', record)
            } catch (e) {
                console.log(e)
            }
        },
        getHistory({commit}){
            if(JSON.parse(localStorage.getItem('historyInfo'))){
                commit('setHistoryInfo', JSON.parse(localStorage.getItem('historyInfo')) )
              } 

        }
    }
}