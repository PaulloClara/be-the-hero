import Api from "@/services/be-the-hero";
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
      token: "",
    },
    login: {
      email: "",
      password: "",
    },
    register: {
      name: "",
      email: "",
      whatsapp: "",
      city: "",
      uf: "",
      password: "",
    },
  },
  getters: {
    getField,
  },
  mutations: {
    updateSession(state, { token }) {
      state.profile.token = token;
      localStorage.setItem("token", token);

      state.logged = token !== "";
    },

    updateProfile(state, props) {
      state.profile = props;
    },

    updateRegisterForm(state, { name, email, password, whatsapp, city, uf }) {
      state.register.name = name;
      state.register.email = email;
      state.register.password = password;
      state.register.whatsapp = whatsapp;
      state.register.city = city;
      state.register.uf = uf;
    },

    updateField,
  },
  actions: {
    async getProfile({ commit }, { token }) {
      try {
        const response = await Api.get("/sessions", {
          headers: { Authorization: `Bearer ${token}` },
        });

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        commit("updateProfile", response.data);
      } catch ({ response }) {
        this.commit("updateStatus", response);
      }
    },

    async login({ commit }, { email, password }) {
      try {
        const response = await Api.post("/sessions", { email, password });

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        commit("updateProfile", response.data.ong);
        commit("updateSession", response.data);
      } catch ({ response }) {
        this.commit("updateStatus", response);
      }
    },

    async register({ commit }, payload) {
      try {
        const response = await Api.post("/ongs", payload);

        this.commit("updateStatus", response);
        if (this.state.status.code !== 200) return;

        commit("updateProfile", response.data.ong);
        commit("updateSession", response.data);
      } catch ({ response }) {
        this.commit("updateStatus", response);
      }
    },
  },
  namespaced: true,
};
