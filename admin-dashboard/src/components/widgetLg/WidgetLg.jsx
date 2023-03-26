import "./widgetLg.css";
import {userRequest} from '../../requestMethods'
import { useEffect, useState } from "react";
import {format} from 'timeago.js'

export default function WidgetLg() {

  const [orders,setOrders] = useState([]);
  const [user,setUser] = useState([]);
  useEffect(()=>{
    const getOrders = async()=>{
      // let orders = await fetch(`http://localhost:4000/api/orders`,{
      //   headers:{
      //     Authorization:`bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token}`
      //    }
      // });
      // orders = await orders.json();
      const orders = await userRequest.get("orders");
      setOrders(orders.data);

     
      
         let user = await fetch(`http://localhost:4000/api/users/find/63e78341e77c61e289cb948c`,{
        headers:{
          Authorization:`bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token}`
         }
      });
      user = await user.json();
      setUser(user);
     
    }
    

      getOrders();
  },[])

  // console.log(orders);

  
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {
          orders.map((order)=>
         
        <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <img
              src={user.img || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{user.username}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
         )
        }
       
       
       
      </table>
    </div>
  );
}
