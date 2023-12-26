import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
    let history = useNavigate()
  const [formData, setFormData] = useState({
    id: "",
    brand: "",
    category: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
  };

  const handleProductAdd = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        ...formData,
      });
      console.log("Product added successfully:", response.data);
      setFormData({
        id: "",
        brand: "",
        category: "",
        description: "",
        price: "",
      });
      history("/products")
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    
    <div className="container mt-5">
      <div className="col-8" style={{ margin: "auto" }}>
        <div className="custom-file mb-5">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={handleFileChange}
          />
          
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Id"
            aria-label="Id"
            aria-describedby="basic-addon1"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Brand"
            aria-label="Brand"
            aria-describedby="basic-addon1"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            aria-label="Category"
            aria-describedby="basic-addon1"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Description"
            aria-label="Description"
            aria-describedby="basic-addon1"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            aria-label="Price"
            aria-describedby="basic-addon1"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleProductAdd}
          >
            Ürün ekle
          </button>
        </div>
      </div>
    </div>
  );
}
