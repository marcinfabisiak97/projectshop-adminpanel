import { productRows } from "../exmapleData";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id: number) => {
    setData(data.filter((item: any) => item.id !== id));
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productList__product">
            <img
              className="productList__image"
              src={params.row.img}
              alt="product"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.id}>
              <button className="productList__edit">edit</button>
            </Link>
            <DeleteOutline
              className="productList__delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
