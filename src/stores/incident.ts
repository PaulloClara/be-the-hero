import { defineStore } from "pinia";

export type IncidentT = {
  id: string;
  name: string;
  description: string;
  value: number;
};

type IncidentStateT = {
  incidents: IncidentT[];
};

export const useIncidentStore = defineStore("incident", {
  state: (): IncidentStateT => ({
    incidents: [],
  }),
  actions: {},
});
