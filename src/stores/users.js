import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useUser = defineStore("user", {
    state: () => ({
        all: [],
        single: undefined
    }),
    actions: {
        async getAll(search = undefined, page = 1) {
            const response = await axios.get("/api/users", {
                params: {
                    search,
                    page
                }
            });

            this.all = response.data.data;

            return response.data;
        },
        async getSingle(userID) {
            const response = await axios.get("/api/users/" + userID);

            this.single = response.data;

            return response.data;
        },
        async create(userID, role, title = null) {
            try {
                const response = await axios.put("/api/users/" + userID + "/role", {
                    role,
                    title
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async setTitle(userID, title) {
            try {
                const response = await axios.put("/api/users/" + userID, {
                    title
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async addSocial(userID, icon, url) {
            try {
                const response = await axios.post("/api/users/" + userID + "/social", {
                    icon,
                    url
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async removeSocial(socialID) {
            try {
                const response = await axios.delete("/api/social/" + socialID);

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        }
    }
})
