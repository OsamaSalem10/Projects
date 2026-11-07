import api from "./axios"
import { toast } from "react-toastify";
class PostService {
    async createCategory(formData, update, navigate) {
        try {
            const data = await api.post("/categories", formData);

            toast.success("Category created successfully!");

            await update();

            navigate("/");
            return data;
        } catch (error) {
            toast.error(
                error.response?.data?.errors?.[0]?.msg ||
                error.response?.data?.message ||
                "Something went wrong."
            );

            throw error;
        }
    }
    async createProduct(formData, update, navigate) {
        try {
            const { data } = await api.post("/products", formData);
            console.log(data)
            toast.success("Product created successfully!");

            await update();

            navigate("/");

            return data;
        } catch (error) {
            toast.error(
                error.response?.data?.errors?.[0]?.msg ||
                error.response?.data?.message ||
                "Something went wrong."
            );

            throw error;
        }
    }
}
export default PostService;