import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../../server/post";
import EditService from "../../server/edit";

export const Form = ({
  main,
  update,
  setShowModal,
  showModal,
  editId,
  setEditId,
}) => {
  const [category_id, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("piece");
  const [Received, setReceived] = useState("");
  const [Sale, setSale] = useState("");

  const navigate = useNavigate();

// تعبئة الحقول عند اختيار منتج للتعديل
useEffect(() => {
    if (editId) {
        setCategoryId(
            String(editId.category_id?._id || editId.category_id || "")
        );

        setName(editId.name ?? "");
        setUnit(editId.unit ?? "piece");
        setReceived(String(editId.Received ?? 0));
        setSale(String(editId.Sale ?? 0));
    } else {
        resetForm();
    }
}, [editId]);

  // إعادة ضبط الحقول
  const resetForm = () => {
    setCategoryId("");
    setName("");
    setUnit("piece");
    setReceived("");
    setSale("");
  };

  // إغلاق النموذج
  const handleClose = () => {
    setShowModal(false);
    setEditId(null);
    resetForm();
  };

  // إضافة أو تعديل المنتج
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        category_id: String(category_id),
        name: name.trim(),
        unit,
        Received: Number(Received),
        Sale: Number(Sale),
      };

      if (editId) {
        const editService = new EditService();

        await editService.editProduct(editId._id, data, update, navigate);
      } else {
        const postService = new PostService();

        await postService.createProduct(data, update, navigate);
      }

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:col-4 col-12">
      <div className="card p-3 p-md-5 shadow">
        <div className="card-body">
          <h5 className="mb-3">
            {editId ? "تعديل المنتج" : "إضافة منتج جديد"}
          </h5>

          <form onSubmit={handleSubmit}>
            {/* Category */}
            <div className="mb-3">
              <label className="form-label">Categories</label>
              <select
                className="form-control"
                value={category_id}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select Category</option>

                {(main?.categories || []).map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Name */}
            <div className="mb-3">
              <label className="form-label">Product Name</label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Product Name"
                required
              />
            </div>

            {/* Unit */}
            <div className="mb-3">
              <label className="form-label">Unit</label>

              <select
                className="form-control"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                required
              >
                <option value="kg">Kilogram (kg)</option>
                <option value="piece">Piece</option>
              </select>
            </div>

            {/* Received */}
            <div className="mb-3">
              <label className="form-label">Received</label>

              <input
                type="number"
                min="0"
                step="0.01"
                className="form-control"
                placeholder="كمية المستلمة"
                value={Received}
                onChange={(e) => setReceived(e.target.value)}
                required
              />
            </div>

            {/* Sale */}
            <div className="mb-3">
              <label className="form-label">Sale</label>

              <input
                type="number"
                min="0"
                step="0.01"
                className="form-control"
                placeholder="كمية المباعة"
                value={Sale}
                onChange={(e) => setSale(e.target.value)}
                required
              />
            </div>

            {/* Residual */}
            <div className="mb-3">
              <label className="form-label">Residual</label>

              <input
                type="number"
                className="form-control"
                value={Number(Received || 0) - Number(Sale || 0)}
                readOnly
                disabled
              />
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-secondary w-50"
                onClick={handleClose}
              >
                إلغاء
              </button>

              <button type="submit" className="btn btn-primary w-50">
                {editId ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
