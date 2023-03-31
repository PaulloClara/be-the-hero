import { defineStore } from "pinia";

export type UserT = {
  id: string;
  city: string;
  created_at: string;
  email: string;
  name: string;
  uf: string;
  whatsapp: string;
};

type UserStateT = {
  user: UserT | null;
};

export const useUserStore = defineStore("user", {
  state: (): UserStateT => ({
    user: JSON.parse(localStorage.getItem("USER") || "null") || null,
  }),
  actions: {},
});
