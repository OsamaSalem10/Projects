
import { toast } from "react-toastify";
import api from "./axios";

class ApiServiceGet {

  /* ================= CATEGORIES ================= */

  static async getAllCategories() {
    try {
      const { data } = await api.get("/categories");

      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.message ||
          "حدث خطأ أثناء جلب التصنيفات"
        );
      }

      throw error;
    }
  }

  /* ================= PRODUCTS ================= */

  static async getProducts() {
    try {
      const { data } = await api.get("/products");

      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.message ||
          "حدث خطأ أثناء جلب المنتجات"
        );
      }

      throw error;
    }
  }
}

export default ApiServiceGet;
