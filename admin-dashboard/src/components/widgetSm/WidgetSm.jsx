import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {userRequest} from '../../requestMethods'
import axios from "axios";

export default function WidgetSm() {

  const [users, setUsers] = useState([]);
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token)
  useEffect(() => {
    const getUsers = async () => {
      try {
        // let res = await fetch('http://localhost:4000/api/users/?new=true',{
        //   headers:{
        //     Authorization:`bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token}`
        //    }
        // });
        // res=await res.json();
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
       
        // setUsers(res.data); 
       } catch {}
    };
    getUsers();   
  }, []);
// console.log(users); 
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {users.map((user)=>
       
        <li key={user._id} className="widgetSmListItem">
          <img
            src={user.img || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="}   
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        )}
      </ul>
    </div>
  );
}
