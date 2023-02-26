import React, { useState, useEffect } from "react";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilFileCheck 
} from "@iconscout/react-unicons";

import { UisCheckCircle } from '@iconscout/react-unicons-solid'
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  // const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {/* {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : ( */}
      
    <CompactCard param={props}/>
    </AnimateSharedLayout>
  );
};




// Compact Card
function CompactCard({param}) {

  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow}}>

      <div className="radialBar">
        {/* <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        /> */}
        <Png className="iconUI" style={{color:param.color.color}} size="20"/>
        {/* <span></span> */}
        <span>{param.title}<br/>{param.name}</span>
      </div>
      <div className="detail">
        {/* <Png /> */}
        <p>Timeframe: <br/><b>{param.timeframe}</b></p>
        <p>Target Uptime:<br/>{param.targetTh}%</p>
      </div>
    </motion.div>
  );
}

export default Card;
