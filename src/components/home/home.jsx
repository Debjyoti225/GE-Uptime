import React,{Component} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./home.css";
import { homecardsData } from "../../Data/Data";
import Cards from "../Cards/Cards";
import "../RigtSide/RightSide.css";
import Card from "../Card/Card";
import Table from "../Table/Table";
import { Container } from "react-bootstrap/Container";
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from "react-router-dom";
import MainDash from "../MainDash/MainDash";

const Home = (props) => {
  

  const cardData = [];
  const [value, setValue] = useState(false);


  let slos=[
    '0d5315fd2a565206ae6d8be36e6fda2d',
    'b3c502e4744b57f0a8c4d0b97d530195',
    '9179150e44db591bbb28d962a52413e6']



useEffect(()=>{   
  
  const fetchData = async () => {
    try {
      for(let i=0;i<slos.length;i++)
        {
          let data = await fetch('http://localhost:3005/data?id='+slos[i]);
          let sloData = await data.json()
          cardData.push(sloData[0]);
          cardData[i] = Object.assign(homecardsData[i], cardData[i]);
        }
        
        setValue(true);
    } catch (error) {
      console.log("error", error);
    }
  }
  fetchData();
  }, [])


  const setcardNo = (taskId) => {
      props.cardHandler(taskId);
  }

  return (

    <section id="home" className="block home-block">
        <ReactBootstrap.Container fluid style={{margin:"0rem 0rem 1rem"}}>
            <ReactBootstrap.Row>
            {homecardsData.map((card,id) => {
                return(
                    
                    <ReactBootstrap.Col xxl={4} className="d-flex justify-content-center holder" >
                    <Link to='maindash' style={{width:"98%", textDecoration:"none",  textAlign:"center"}}>
                    <div className="parentContainer" key={id} onClick={()=>{setcardNo(card.card_no)}} style={{textAlign:"left"}}>
                    <Card
                        name={card.name}
                        color={card.color}
                        timeframe={card.timeframe}
                        png={card.png}
                        targetTh={card.target_threshold}/>
                    </div>
                    </Link>
                    </ReactBootstrap.Col>                   
                )
            })
            }
               
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
    </section>
  );
};

export default Home;

