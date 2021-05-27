import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import history from './history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: [],
    loading: true,
    errored: false
  },
  mutations: {
    setInfo(state, info) {
      state.info = info.map(user => ({ id: user.id, name: user.name, phone: user.phone, profit:  user.profit? user.profit: 100000 }))
        .sort((u1, u2) => { return (Number(u1.profit) > Number(u2.profit)) ? -1 : 1 });
      state.loading = false;
      localStorage.setItem('users', JSON.stringify(state.info));
    },
    clearInfo(state) {
      state.info = {}
      localStorage.setItem('users', JSON.stringify([]));
    },
    changeProfitById(state, payload) {
      const index = state.info.findIndex(user => user.id === payload.userId);
      state.info[index].profit = payload.profit;
      state.info.sort((u1, u2) => { return (Number(u1.profit) > Number(u2.profit)) ? -1 : 1 });
      localStorage.setItem('users', JSON.stringify(state.info));
    }
  },
  actions: {
    async getUsers({ commit }) {
      if(JSON.parse(localStorage.getItem('users'))){
        commit('setInfo', JSON.parse(localStorage.getItem('users')) )
      } else{
        await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const info = response.data;
          commit('setInfo', info)
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
      }
      
    }
  },
  modules: {
    history
  },
  getters: {
    info: s => s.info
  }
})
