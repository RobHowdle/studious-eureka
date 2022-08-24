import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useBlog = defineStore("blog", {
    state: () => ({
        all: [],
        single: undefined
    }),
    actions: {
        async getAll() {
            const response = await axios.get("/api/blogs");

            this.all = response.data.data;

            return response.data;
        },
        async getSingle(blogID) {
            const response = await axios.get("/api/blogs/" + blogID);

            this.single = response.data;

            return response.data;
        },
        async create(title, description, thumbnail) {
            try {
                var formData = new FormData();
                formData.append('thumbnail', thumbnail)
                formData.append('title', title)
                formData.append('description', description)

                const response = await axios.post("/api/blogs/",
                    formData,
                    {
                        headers: {
                            'Content-Type': "multipart/form-data"
                        }
                    }
                );

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async togglePublish(blogID) {
            try {
                const response = await axios.put("/api/blogs/" + blogID + "/publish");

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async createSegment(blogID, userID, title, content) {
            try {
                const response = await axios.post("/api/blogs/" + blogID + "/segments", {
                    userID,
                    title,
                    content
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async updateSegment(segmentID, title, content) {
            try {
                const response = await axios.put("/api/segment/" + segmentID, {
                    title,
                    content
                });

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        },
        async deleteSegment(segmentID) {
            try {
                const response = await axios.delete("/api/segment/" + segmentID);

                return {success: true, data: response.data};
            } catch(err) {
                return {successs: false, data: err.data};
            }
        }
    }
})
