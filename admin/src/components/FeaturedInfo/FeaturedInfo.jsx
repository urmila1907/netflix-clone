import React from 'react'
import "./featuredInfo.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2,687</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className="downIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2,364</span>
          <span className="featuredMoneyRate">
            -2.3 <ArrowDownwardIcon className="downIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2,814</span>
          <span className="featuredMoneyRate">
            +1.5 <ArrowUpwardIcon className="upIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
