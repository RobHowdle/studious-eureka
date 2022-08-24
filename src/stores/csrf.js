import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;

export const useCSRF = defineStore("csrf", {
    state: () => ({
    }),
    actions: {
        async initCSRF() {
            return await axios.get("/sanctum/csrf-cookie");
        }
    }
})
