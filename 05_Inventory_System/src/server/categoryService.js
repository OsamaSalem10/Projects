
import api from "./axios";

class CategoryService {
    // ==================== CREATE ====================
    async create(name) {
        const { data } = await api.post("/categories", {
            name,
        });

        return data;
    }

    // ==================== READ ALL ====================
    async getAll() {
        const { data } = await api.get("/categories");

        return data.result;
    }

    // ==================== READ ONE ====================
    async getById(id) {
        const { data } = await api.get(`/categories/${id}`);

        return data.result;
    }

    // ==================== UPDATE ====================
    async update(id, name) {
        const { data } = await api.put(`/categories/${id}`, {
            name,
        });

        return data;
    }

    // ==================== DELETE ====================
    async delete(id) {
        const { data } = await api.delete(`/categories/${id}`);

        return data;
    }
}

export default  CategoryService;
