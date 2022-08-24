import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useTeam = defineStore("team", {
    state: () => ({
        all: [],
        single: undefined
    }),
    actions: {
        async getAll(search = undefined, page = 1) {
            const response = await axios.get("/api/team");

            this.all = response.data;

            return response.data;
        },
    }
})
