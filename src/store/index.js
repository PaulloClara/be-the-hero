import Vue from "vue";
import Vuex from "vuex";

import ong from "@/store/ong";
import incident from "@/store/incident";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ong,
    incident
  }
});
