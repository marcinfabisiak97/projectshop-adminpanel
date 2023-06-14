import React from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../exmapleData";
import Images from "../assets/exportAssets";
import { UploadFile } from "@mui/icons-material";
const Product = () => {
  return (
    <div className="product">
      <div className="product__titleContainer">
        <h2 className="product__title">Product</h2>
        <Link to="/newproduct">
          <button className="product__addButton">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product__topLeft">
          <Chart
            data={productData}
            dataKey="sales"
            title="Sales Performnce"
            grid={false}
          />
        </div>
        <div className="product__topRight">
          <div className="product__topInfo">
            <img
              src={Images.blender}
              alt="product"
              className="product__topInfoImage"
            />
            <span className="product__topInfoName">Blender</span>
          </div>
          <div className="product__bottomInfo">
            <div className="product__bottomInfoItem">
              <span className="product__bottomInfoKey">id:</span>
              <span className="product__bottomInfoValue">111</span>
            </div>
            <div className="product__bottomInfoItem">
              <span className="product__bottomInfoKey">sales:</span>
              <span className="product__bottomInfoValue">4111</span>
            </div>
            <div className="product__bottomInfoItem">
              <span className="product__bottomInfoKey">active:</span>
              <span className="product__bottomInfoValue">yes</span>
            </div>
            <div className="product__bottomInfoItem">
              <span className="product__bottomInfoKey">in stock:</span>
              <span className="product__bottomInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form className="product__form">
          <div className="product__formLeft">
            <label htmlFor="productname">Product Name</label>
            <input type="text" id="productname" />
            <label htmlFor="idstock">In Stock</label>
            <select name="instock" id="idstock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product__formRight">
            <div className="product__formRightUpload">
              <img
                src={Images.blender}
                alt="product"
                className="product__formRightUploadImage"
              />
              <label htmlFor="file">
                <UploadFile />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product__button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
