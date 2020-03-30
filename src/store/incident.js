import Api from "@/services/api";
import { getField, updateField } from "vuex-map-fields";

export default {
  state: {
    status: 0,
    session: [],
    page: {
      list: [],
      currentPage: 1,
      totalIncidents: 1
    },
    register: {
      title: "",
      value: "",
      description: ""
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
  getters: {
    getField
  },
  mutations: {
    updateStatus(state, { status, data }) {
      if (status === 200 || !data.statusCode)
        return (state.status.code = status);

      data.code = data.statusCode;
      data.statusCode = undefined;

      state.status = data;
    },

    updatePage(state, { list, currentPage, totalIncidents }) {
      state.page.list = list;
      state.page.currentPage = currentPage;
      state.page.totalIncidents = totalIncidents;
    },

    updateIncidents(state, { incidents }) {
      state.session = incidents;
    },

    updateField
  },
  actions: {
    async getPage({ state, commit }, { page }) {
      try {
        const response = await Api.get(`/incidents?page=${page}`);

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        commit("updatePage", {
          list: response.data,
          currentPage: page,
          totalIncidents: response.headers["X-Total-Counter"]
        });
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async getSessionIncidents({ state, commit }, { token }) {
      try {
        const response = await Api.get("/sessions/incidents", {
          headers: { Authorization: `Bearer ${token}` }
        });

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        commit("updateIncidents", { incidents: response.data });
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async register(
      { state, commit, dispatch },
      { token, title, value, description }
    ) {
      try {
        const response = await Api.post(
          "/incidents",
          { title, value, description },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        dispatch("getPage", { page: state.page.currentPage });

        const incidents = [response.data, ...state.session];
        commit("updateIncidents", { incidents });
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async delete({ state, commit, dispatch }, { id, token }) {
      try {
        const response = await Api.delete(`/incidents/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        await dispatch("getPage", { page: state.page.currentPage });

        const index = state.session.findIndex(incident => incident.id === id);
        const incidents = state.session.splice(index, 1);

        commit("updateIncidents", { incidents });
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    }
  },
  namespaced: true
};
