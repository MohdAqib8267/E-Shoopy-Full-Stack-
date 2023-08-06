import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {deleteProduct, getProducts} from '../../redux/apiCalls'
import { useDispatch,useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.product.products);
  console.log(products);

  const user=useSelector(state=>state.user);
  const token=user.currentUser.token

  useEffect(()=>{
    // console.log('list');
    getProducts(dispatch);

  },[dispatch])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteProduct(id,dispatch,token);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 180 },
  
    {
      field: "price",
      headerName: "Price",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
       
        checkboxSelection
      />
    </div>
  );
}
