import './App.css'
import { useState,useEffect } from 'react';
import MainDash from './components/MainDash/MainDash';
import HomeDash from './components/homeDash/homeDash';
import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadFull } from "tsparticles";
// import ParticlesBackground from './ParticlesBackground';
import particlesConfig from "./components/config/particles-config";
import Home from './components/home/home';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Route, Routes } from 'react-router-dom/dist';
import BrandExample from './components/Navbar/navbar';

function App() {

  // const slos = [];
  const [cardno,setCard] = useState();
  const [slos, setSlos] = useState(['220dd359917953a793c667b72ea702be', 'e0b497b7efe15b3b83c84d283b9ea462','69a6d8092a225ca299226cafc2a6ff8c','c9bb3d279f9d52149953785bcab47dfc']);

  const cardHandler = e =>{
    switch(e){
      case 1:
        setSlos(['220dd359917953a793c667b72ea702be', 'e0b497b7efe15b3b83c84d283b9ea462','69a6d8092a225ca299226cafc2a6ff8c','c9bb3d279f9d52149953785bcab47dfc'])
      break;

      case 2:
        setSlos(['ca3344410cfb53479c923522e2f176f9','d1af52e9b6165643a7b0399adde24682','e3e3d01f29aa5d56859135d99d36182d','b6c49436076f5190825342b5615fe5eb'])
      break;

      case 3:
        setSlos(['3e377c3e3a7f5f30b97d2819e152cd2d','e647de0b2bc7520aa749af70eba0eab1','b6664e29a64a5748a122cccc4e2c53ce','6b6b8b88ff1d58d5be0de7f44fc559cc'])  
      break;
  }
    setCard(e);
  }
  
  // useEffect(() => {   
  //   console.log("Card Number: ",cardno)
  //   console.log("Slo Ids: ",slos)
  // },[slos])

  
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

  const particlesLoaded = useCallback(async container => {
  }, [])

  return (
    <>
    
    <div className="App">
   <Particles id="tsparticles" init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                  particles: {
                    number: {
                      value: 100,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: "#ffffff"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.696,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: false,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 0.5,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 1280,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble"
                      },
                      onclick: {
                        enable: false,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 250,
                        size: 0,
                        duration: 2,
                        opacity: 0,
                        speed: 0.1
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true
                }}/>
        <div className="AppGlass">
      
          <Routes>
            <Route path='/' element={<HomeDash cardno={cardno} cardHandler={cardHandler}/>}/>
            <Route path='/maindash' element={<MainDash slos={slos}/>}/>
        {/* <Sidebar/> */}
        {/* <HomeDash/>
        <MainDash/> */}
        {/* <Home/> */}
          </Routes>
        </div>
    </div>
    </>
  );

  
}

export default App;
 