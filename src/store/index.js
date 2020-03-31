import Vue from "vue";
import Vuex from "vuex";

import ong from "@/store/ong";
import incident from "@/store/incident";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    alert: {
      configs: {
        title: "",
        text: "",
        icon: "",
        confirmButtonText: "OK",
        confirmButtonColor: "#e02041"
      },
      show: false
    }
  },
  mutations: {
    updateLoading(state, { loading }) {
      state.loading = loading;
    },

    updateAlert(state, { title, text, icon }) {
      state.alert.configs.text = text;
      state.alert.configs.icon = icon;
      state.alert.configs.title = title;
    },

    updateAlertStatus(state, { show }) {
      state.alert.show = show;
    }
  },
  actions: {
    showAlert({ commit }, { title, text, icon }) {
      commit("updateAlert", { title, text, icon });
      commit("updateAlertStatus", { show: true });
    }
  },
  modules: {
    ong,
    incident
  }
});
