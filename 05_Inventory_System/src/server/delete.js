import api from "./axios";
class DeleteService {
    async _deleteCategory(id, update, navigate) {
        try {
            const { data } = await api.delete(`/categories/${id}`)
            update(data);
            navigate("/");
        } catch (error) {
            throw error;
        }
    }
    async _deleteProduct(id, update, navigate) {
        try {
            const { data } = await api.delete(`/products/${id}`)
            update(data);
            navigate("/");
        } catch (error) {
            throw error;
        }
    }
}
export default DeleteService;


