import Api from "@/services/be-the-hero";
import paginationLogic from "@/utils/pagination";

export default {
  state: {
    status: 0,
    session: [],
    page: {
      incidents: [
        {
          id: 1,
          title: "Iniciando...",
          description: "A API esta iniciando com dados falsos...",
          value: 1,
          ong: {
            id: "683632de",
            name: "BeTheHero",
            city: "Teresina",
            email: "bethehero@ong.com",
            uf: "PI",
            whatsapp: "86999999999",
          },
          created_at: "2020-04-05 02:16:17",
        },
      ],
      total: 0,
      pages: 0,
      limit: 12,
      current: 1,
      pagination: [],
    },
    register: {
      title: "",
      value: "",
      description: "",
    },
  },
  getters: {
    getField,
  },
  mutations: {
    updatePage(state, { incidents, current, limit, total }) {
      state.page.limit = limit;
      state.page.total = total;
      state.page.pages = (total / limit).toFixed();
      state.page.current = current;
      state.page.incidents = incidents;
    },

    updatePagination(state) {
      state.page.pagination = paginationLogic({
        totalPages: state.page.pages,
        currentPage: state.page.current,
        totalButtonsLeft: this.state.pagination.buttonsLeft,
        totalButtonsRight: this.state.pagination.buttonsRight,
      });
    },

    updateIncidents(state, { incidents }) {
      state.session = incidents;
    },

    updateForm(state, { title, value, description }) {
      state.register.title = title;
      state.register.value = value;
      state.register.description = description;
    },

    updateField,
  },
  actions: {
    async getPage({ commit }, { page, limit = 12 }) {
      try {
        const response = await Api.get(
          `/incidents?page=${page}&limit=${limit}`
        );

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        commit("updatePage", response.data);
        commit("updatePagination");
      } catch ({ response }) {
        this.commit("updateStatus", response);
      }
    },

    async getSessionIncidents({ commit }, { token }) {
      try {
        const response = await Api.get("/sessions/incidents", {
          headers: { Authorization: `Bearer ${token}` },
        });

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        commit("updateIncidents", { incidents: response.data });
      } catch ({ response }) {
        this.commit("updateStatus", response);
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
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        dispatch("getPage", { page: state.page.current });

        const incidents = [response.data, ...state.session];
        commit("updateIncidents", { incidents });
      } catch ({ response }) {
        this.commit("updateStatus", response);
      }
    },

    async delete({ state, commit, dispatch }, { id, token }) {
      try {
        const response = await Api.delete(`/incidents/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        await dispatch("getPage", { page: state.page.current });

        const index = state.session.findIndex((incident) => incident.id === id);
        const incidents = state.session.splice(index, 1);

        commit("updateIncidents", { incidents });
      } catch ({ response }) {
        this.commit("updateStatus", response);
      }
    },
  },
  namespaced: true,
};
