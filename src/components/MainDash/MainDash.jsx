import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import "../RigtSide/RightSide.css";
import Home from "../home/home";

const MainDash = (props) => {

  const [id, setId] = useState('f4f544a9f0fa5ceb9e0bd79957fb6907');

  const idHandler = e => {
    setId(e);
    console.log(id)
  }



  return (
    <div className="MainDash">
      
      
      <h2 className="mainDashHeader" style={{marginBottom:"1rem"}}>Underlying SLOs</h2>

      <Cards slos={props.slos} idHandler={idHandler}/>
      <Table id={id}/>

    </div>
  );
};

export default MainDash;
