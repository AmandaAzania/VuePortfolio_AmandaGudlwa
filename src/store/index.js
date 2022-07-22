import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    skills: [
      { lang: "HTML5", percent: 90, color: "#800000" },
      { lang: "CSS", percent: 76, color: "black" },
      { lang: "JAVASCRIPT", percent: 84, color: "#800000" },
      { lang: "VUE", percent: 93, color: "black" },
    
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
