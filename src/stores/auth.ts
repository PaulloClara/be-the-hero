import { defineStore } from "pinia";
import { useUserStore } from "./user";

export type UserFormT = {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
  city: string;
  uf: string;
};

export type LoginFormT = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const userStore = useUserStore();

  return {
    registerUser(payload: { form: UserFormT }) {
      const user = { ...payload.form, id: "1", created_at: new Date().toISOString() };
      localStorage.setItem("USER", JSON.stringify(user));
      userStore.user = user;
    },
    logoutSession() {
      localStorage.removeItem("USER");
      userStore.user = null;
    },
  };
});
