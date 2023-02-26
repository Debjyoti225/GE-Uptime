import React from "react";
import { useState, useEffect } from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import RightSide from '../RigtSide/RightSide';
// import "../RigtSide/RightSide.css";
import {BasicTable} from "../Table/Table"

import Card from "../Card/Card";
import Table from "../Table/Table";

const Cards = (props) => {
  

  const cardData = [];
  // const [state, setData] = useState([]);
  const [value, setValue] = useState(false);
  const [list, setList] = useState([]);


useEffect(()=>{   
  
  const fetchData = async () => {
    try {
      for(let i=0;i<props.slos.length;i++)
        {
          let data = await fetch('http://localhost:3005/data?id='+ props.slos[i]);
          let sloData = await data.json()
          cardData.push(sloData[0]);
          cardData[i] = Object.assign(cardsData[i], cardData[i]);
        }

        setValue(true);
    } catch (error) {
      console.log("error", error);
    }
  }
  fetchData();
  }, [])


  const myFunction = (taskId) => {
      props.idHandler(taskId)
  }

  return (
    <div className="Cards">
      {cardsData.map((card,id) => {
        return (
          <div className="parentContainer"  key={id} onClick={()=>{myFunction(card.id)}} style={{width:"100%"}}>
            <Card
              title={card.title}
              name={card.name}
              color={card.color}
              timeframe={card.timeframe}
              png={card.png}
              targetTh={card.target_threshold}
            />
           
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
