import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [
      { lang: "HTML5", percent: 90, color: "#ec407a" },
      { lang: "CSS3", percent: 76, color: "#f4511e" },
      { lang: "JAVASCRIPT", percent: 84, color: "#512da8" },
      { lang: "MATERIALIZE", percent: 94, color: "#f57c00" },
      { lang: "VUE", percent: 93, color: "#0288d1" },
      { lang: "MONGODB", percent: 87, color: "#388e3c" },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
