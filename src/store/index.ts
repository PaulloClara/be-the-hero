import { createStore } from "vuex";

import ong from "@/store/ong";
import incident from "@/store/incident";

export default createStore({
  state: {
    loading: true,
    window: {
      width: 0,
      height: 0,
    },
    pagination: {
      buttonsLeft: 4,
      buttonsRight: 4,
    },
    alert: {
      configs: {
        title: "",
        text: "",
        icon: "",
        confirmButtonText: "OK",
        confirmButtonColor: "#e02041",
      },
      show: false,
    },
    status: {
      code: 200,
      error: "",
      message: "",
      validation: {
        source: "",
        keys: [],
      },
    },
  },
  getters: {
    xsWindow(state) {
      return state.window.width < 480;
    },

    smWindow(state) {
      return state.window.width < 800;
    },

    mdWindow(state) {
      return state.window.width < 1366;
    },

    lgWindow(state) {
      return state.window.width < 1920;
    },

    xlWindow(state) {
      return state.window.width > 1920;
    },
  },
  mutations: {
    updateStatus(state, { status, data }) {
      if (status === 200 || !data.statusCode)
        return (state.status.code = status);

      data.code = data.statusCode;
      data.statusCode = undefined;

      state.status = data;
    },

    updateLoading(state, { active }) {
      state.loading = active;
    },

    updateAlert(state, { title, text, icon }) {
      state.alert.configs.text = text;
      state.alert.configs.icon = icon;
      state.alert.configs.title = title;
    },

    updateAlertStatus(state, { show }) {
      state.alert.show = show;
    },

    updatePaginationLength(state) {
      const { xsWindow, smWindow, mdWindow, lgWindow } = this.getters;
      state.pagination.buttonsLeft = xsWindow
        ? 1
        : smWindow
        ? 2
        : mdWindow
        ? 3
        : lgWindow
        ? 4
        : 5;
      state.pagination.buttonsRight = state.pagination.buttonsLeft;

      this.commit("incident/updatePagination");
    },

    updateWindowSize(state) {
      state.window.width = window.innerWidth;
      state.window.height = window.innerHeight;

      this.commit("updatePaginationLength");
    },
  },
  actions: {
    showAlert({ commit }, { title, text, icon }) {
      commit("updateAlert", { title, text, icon });
      commit("updateAlertStatus", { show: true });
    },
  },
  modules: { ong, incident },
});
