import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats,setPStats] = useState([]);
    const product = useSelector((state)=>state.product.products.find((product)=> product._id === productId));
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );
      const dispatch = useDispatch();
      const user=useSelector(state=>state.user);
      const token=user.currentUser.token;
        
      const [title,setTitle]=useState('');
      const [desc,setDesc]=useState('');
      const [price,setPrice]=useState(0);
      const [stoke,setStoke]=useState(true);
      const [active,setActive]=useState('yes');
      // const [img,setImg]=useState(null);

  
      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await userRequest.get("orders/income?pid=" + productId,{
              headers:{
                Authorization:`Bearer ${token}`
              }
            });
            // console.log(res);
            const list = res.data.sort((a,b)=>{
                return a._id - b._id
            })
            list.map((item) =>
              setPStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], Sales: item.total },
              ])
            );
          } catch (err) {
            console.log(err);
          }
        };
        getStats();
      }, [productId, MONTHS]);
      // console.log(pStats);
    
      const handleForm=(e)=>{
        e.preventDefault();
        // console.log({name,desc,price,stoke,active,img});
        const product={title,desc,price,stoke,active};
        // console.log(product);
        updateProduct(productId,token,product,dispatch);
      
      }
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product?.img} alt="" className="productInfoImg" />
                  <span className="productName">{product?.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStok}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form  onSubmit={handleForm} className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={product.title} />
                  <label>Product Description</label>
                  <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={product.desc} />
                  <label>Price</label>
                  <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder={product.price} />
                  <label>In Stock</label>
                  <select name="inStock" value={stoke} onChange={(e) => setStoke(e.target.value)} id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" value={active} onChange={(e) => setActive(e.target.value)} id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label  for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
