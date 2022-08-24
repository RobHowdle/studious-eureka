import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useAuth = defineStore("authenticate", {
    state: () => ({
        user: undefined
    }),
    actions: {
        // Log an employee in
        async login() {
        },
        async logout() {
        },
        // Get employee data
        async getUser() {
            try {
                // Attempt to get user data
                const response = await axios.get('/api/user');

                this.user = response.data;
            } catch (err) {
                // Attempt failed, ensure the user state is set back to unauthed
                this.user = undefined;
            }
            // Return the state, just to be safe
            return this.user;
        }
    }
})
