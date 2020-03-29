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
      token: localStorage.token
    },
    login: {
      form: {
        email: "",
        password: ""
      }
    },
    register: {
      form: {
        name: "",
        email: "",
        whatsapp: "",
        city: "",
        uf: "",
        password: ""
      }
    },
    status: 0
  },
  getters: {
    getField
  },
  mutations: {
    updateSession(state, { token }) {
      state.profile.token = token;
      localStorage.setItem("token", token);

      state.logged = true;
    },

    updateStatus(state, props) {
      state.status = props.status;
    },

    updateProfile(state, props) {
      state.profile = props;
    },

    updateField
  },
  actions: {
    async getProfile({ commit }, { id }) {
      try {
        const response = await Api.get(`/ongs/${id}`);

        commit("updateProfile", { ...response.data });
        commit("updateStatus", response);
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async login({ state, commit }, { email, password }) {
      try {
        const response = await Api.post("/sessions", { email, password });

        commit("updateStatus", response);
        if (state.status !== 200) return;

        commit("updateProfile", { ...response.data.ong });
        commit("updateSession", { ...response.data });
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    },

    async register({ state, commit, dispatch }, payload) {
      try {
        const response = await Api.post("/ongs", payload);

        commit("updateStatus", response);
        if (state.status !== 200) return;

        dispatch("getProfile", { ...response.data });
        commit("updateSession", { ...response.data });
      } catch ({ response }) {
        commit("updateStatus", response);
      }
    }
  },
  namespaced: true
};
