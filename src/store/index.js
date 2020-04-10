import Vue from "vue";
import Vuex from "vuex";

import ong from "@/store/ong";
import incident from "@/store/incident";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    window: {
      width: 0,
      height: 0
    },
    pagination: {
      buttonsLeft: 4,
      buttonsRight: 4
    },
    alert: {
      configs: {
        title: "",
        text: "",
        icon: "",
        confirmButtonText: "OK",
        confirmButtonColor: "#e02041"
      },
      show: false
    },
    status: {
      code: 200,
      error: "",
      message: "",
      validation: {
        source: "",
        keys: []
      }
    }
  },
  mutations: {
    updateStatus(state, { status, data }) {
      if (status === 200 || !data.statusCode)
        return (state.status.code = status);

      data.code = data.statusCode;
      data.statusCode = undefined;

      state.status = data;
    },

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
    },

    updatePaginationLength(state, { left, right }) {
      state.pagination.buttonsLeft = left;
      state.pagination.buttonsRight = right;
    },

    updateWindowSize(state) {
      state.window.width = window.innerWidth;
      state.window.height = window.innerHeight;
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
