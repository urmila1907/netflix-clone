import React from "react";
import "./home.scss";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzE2ZGRlODA2MmVmN2MzNjE5ZTdhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDc3NTMwMSwiZXhwIjoxNjkxMjA3MzAxfQ.zu3dAsw9ilivXclPq_3cV-iZJGJ8efnUoEwxy7O1ong",
        });
        const statsList = res.data.sort(function(a,b){
           return a._id - b._id;
        })
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New Users": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getUserStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New Users"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
