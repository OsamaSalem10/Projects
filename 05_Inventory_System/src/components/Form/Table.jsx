import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteService from "../../server/delete";
import { useState } from "react";

export const Table = ({ main, update, setShowModal, setEditId , setMain}) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
const category = main?.categories?.find(
  (cat) => String(cat._id) === String(id)
);
 const products = id
    ? main?.products?.filter(
        (product) =>
            String(product.category_id?._id || product.category_id) === String(id)
      ) || []
    : main?.products || [];
  // ================= DELETE =================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("هل أنت متأكد من حذف هذا المنتج؟");

    if (!confirmDelete) return;

    try {
      const deleteServiceProduct = new DeleteService();

      await deleteServiceProduct._deleteProduct(id, update, navigate);
    } catch (error) {
      console.log(error.response?.data?.message || "فشل حذف المنتج");
    }
  };


  // ================= EDIT =================
  const handleEdit = (product) => {
    setEditId(product);
    setShowModal(true);
  };

  return (
    <div className="md:col-8 col-12">
      <div className="card p-5 p-md-5">
        <h3 className="card-title text-center p-3"><h3>{category?.name || "جميع المنتجات"}</h3></h3>
        {/* SEARCH */}
        <div className="p-3">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>

            <input
              type="search"
              className="form-control"
              placeholder="ابحث عن منتج أو تصنيف..."
              onChange={(e) => setSearch(e.target.value)}
                        onKeyUp={() => {
                          if (search === "") {
                            update();
                          } else {
                            
                            setMain((prev) => ({
                              ...prev,
                              products: prev.products.filter((product) =>
                                product.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase()),
                              ),
                            }));
                          }
                        }}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="table-responsive border rounded p-3">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Unit</th>
                <th>Name</th>
                <th>Received</th>
                <th>Sale</th>
                <th>Residual</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.unit}</td>

                    <td>{product.name}</td>


                    <td>{product.Received}</td>

                    <td>{product.Sale}</td>

                    <td>
                      <span
                        className={`badge ${
                          Number(product.Residual) < 0
                            ? "bg-danger"
                            : Number(product.Residual) === 0
                              ? "bg-warning text-dark"
                              : "bg-success"
                        }`}
                      >
                        {product.Residual}
                      </span>
                    </td>

                    {/* EDIT */}
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(product)}
                        title="تعديل"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                    </td>

                    {/* DELETE */}
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(product._id)}
                        title="حذف"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center p-4">
                    لا توجد منتجات
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* RESULTS COUNT */}
        <div className="text-muted mt-3">
          عدد المنتجات: {main?.products?.length || 0}
        </div>
      </div>
    </div>
  );
};
