import api from "./axios"

class EditService {
      async editCategory(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/categories/${id}`, formData);
      update(data);
      navigate("/");
    } catch (error) {
      console.error("Error editing category:", error);
      throw error;
    }
  }
  async editProduct(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/products/${id}`, formData);
      update(data);
      navigate("/");
    } catch (error) {
      console.error("Error editing product:", error);
      throw error;
    }
  }
}


export default EditService;