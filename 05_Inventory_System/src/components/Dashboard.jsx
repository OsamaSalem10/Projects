import { useState } from "react";
import { Form } from "./Form/Form";
import { Table } from "./Form/Table";
export const Dashboard = ({ main, update , setMain}) => {
const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
 

  return (
    <div className="md:container mt-5">
      <h3 className="text-center mb-5">الجرد وحركات المخزون</h3>
      <div className="row g-4 mt-5">
        {/* Table */}
        <Table main={main} update={update} setMain={setMain} setShowModal={setShowModal} setEditId={setEditId}/>

        {/* Form */}
        <Form main={main} update={update} setShowModal={setShowModal} showModal={showModal} editId={editId} setEditId={setEditId}/>
      </div>
    </div>
  );
};
