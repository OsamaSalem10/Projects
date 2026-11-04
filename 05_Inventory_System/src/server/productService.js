
import api from "./axios";

class ProductService {
    // GET ALL
    async getAll() {
        const { data } = await api.get("/products");
        return data.result;
    }

    // GET ONE
    async getById(id) {
        const { data } = await api.get(`/products/${id}`);
        return data.result;
    }

    // CREATE
    async create(product) {
        const { data } = await api.post("/products", product);
        return data;
    }

    // UPDATE
    async update(id, product) {
        const { data } = await api.put(
            `/products/${id}`,
            product
        );

        return data;
    }

    // DELETE
    async delete(id) {
        const { data } = await api.delete(`/products/${id}`);
        return data;
    }
}

export default  ProductService;
