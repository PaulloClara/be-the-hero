import Api from "@/services/api";
import { getField, updateField } from "vuex-map-fields";

export default {
  state: {
    logged: false,
    profile: {
      id: "",
      name: "",
      email: "",
      whatsapp: "",
      city: "",
      uf: "",
      created_at: "",
      token: ""
    },
    login: {
      email: "",
      password: ""
    },
    register: {
      name: "",
      email: "",
      whatsapp: "",
      city: "",
      uf: "",
      password: ""
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
      if (state === 200 || !data.statusCode)
        return (state.status.code = status);

      data.code = data.statusCode;
      data.statusCode = undefined;

      state.status = data;
    },

    updateSession(state, { token }) {
      state.profile.token = token;
      localStorage.setItem("token", token);

      state.logged = token !== "";
    },

    updateProfile(state, props) {
      state.profile = props;
    },

    updateField
  },
  actions: {
    async getProfile({ state, commit }, { token }) {
      try {
        const response = await Api.get("/sessions", {
          headers: { Authorization: `Bearer ${token}` }
        });

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        commit("updateProfile", response.data);
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async login({ state, commit }, { email, password }) {
      try {
        const response = await Api.post("/sessions", { email, password });

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        commit("updateProfile", response.data.ong);
        commit("updateSession", response.data);
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async register({ state, commit }, payload) {
      try {
        const response = await Api.post("/ongs", payload);

        commit("updateStatus", response);
        if (state.status.code !== 200) return;

        commit("updateProfile", response.data.ong);
        commit("updateSession", response.data);
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    }
  },
  namespaced: true
};
