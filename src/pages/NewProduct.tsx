import React from "react";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProduct__addProductTitle">New Product</h1>
      <form className="newProduct__addProductForm">
        <div className="newProduct__addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newProduct__addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newProduct__addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newProduct__addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProduct__addProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
