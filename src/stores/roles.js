import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useRole = defineStore("roles", {
    state: () => ({
        all: [],
        single: undefined
    }),
    actions: {
        async getAll() {
            const response = await axios.get("/api/roles");

            this.all = response.data;

            return response.data;
        },
        async getSingle(roleID) {
            const response = await axios.get("/api/roles/" + roleID);

            this.single = response.data;

            return response.data;
        },
        async create(name) {
            try {
                const response = await axios.post("/api/roles", {
                    name
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async save(roleID, name) {
            try {
                const response = await axios.put("/api/roles/" + roleID, {
                    name
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async setPermissions(roleID, permissions) {
            try {
                const response = await axios.put("/api/roles/" + roleID + '/permissions', {
                    permissions
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        }
    }
})
