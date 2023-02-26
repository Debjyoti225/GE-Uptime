import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./homeDash.css";
import "../RigtSide/RightSide.css";
import Home from "../home/home";

const HomeDash = (props) => {

  // const [cardno1,setCardno1] = useState();

  return (
    <div className="homeDash">
            
      <h1 className="homeDashHeader">Datadog Dashboards</h1>
      <Home cardno={props.cardno} cardHandler={props.cardHandler}/>
      
    </div>
  );
};

export default HomeDash;
