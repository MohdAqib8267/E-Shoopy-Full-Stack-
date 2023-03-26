import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";

import { userRequest } from "../../requestMethods";
import axios from "axios";

export default function FeaturedInfo() {
  const [income,setIncome] = useState([]);
  const [prec,setPrec] = useState(0);
  const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
 

  useEffect(()=>{
    const getIncome = async()=>{
      try {
        const income = await axios.get('http://localhost:4000/api/orders/income',{
        
          headers:{
            Authorization:`Bearar ${TOKEN}`
          }
      })
      setIncome(income.data);
      setPrec((income.data[1].total*100)/income.data[0].total-100);     //compare with prev month sale
      } catch (error) {
        console.log(error)
      }
      
    }
    getIncome();
  },[])
  // console.log(prec);
  // console.log(income[1].total);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> ${income[1]?.total} </span>
          <span className="featuredMoneyRate">
            %{Math.floor(prec)} 

           { prec>0 ? <ArrowUpward className="featuredIcon"/> : <ArrowDownward  className="featuredIcon negative"/>}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>   
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
