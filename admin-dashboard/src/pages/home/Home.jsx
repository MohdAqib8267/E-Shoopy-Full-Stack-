import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState,useEffect, useMemo } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {

  const [userStats,setuserStats] = useState([]);
  const MONTHS = useMemo(
    ()=>[
      "JAN",
      "FEB",
      "MAR",
      "APR",
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC'
    ],
    []
  );

  useEffect(()=>{
    const getStats = async () =>{
      try {
        let res = await fetch(`http://localhost:4000/api/users/stats`,{
          headers:{
            Authorization:`bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token}`
           }
        });
        res=await res.json();
        const list = res.sort((a,b)=>{
          return a._id - b._id
      })
        list.map((item)=>{
          setuserStats((prev)=>[
            ...prev,
            {name:MONTHS[item._id-1], "Active User" : item.total},
          ]);
        })
       
      } catch (error) {}
    }
    getStats();
  },[MONTHS])
  userStats.sort(function(a, b){return a - b});
  // console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
