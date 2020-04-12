import Vue from "vue";
import Vuex from "vuex";

import ong from "@/store/ong";
import incident from "@/store/incident";
import standard from "@/store/standard";

Vue.use(Vuex);

export default new Vuex.Store({
  ...standard,
  modules: {
    ong,
    incident
  }
});
