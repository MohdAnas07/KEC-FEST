import React from "react";
import "./style/header.scss";
import logo from '../kvlogo.png'
import Particles from "react-tsparticles";
import { option } from "./utility/paritcle";
import Head from "./svg/head";
import {Hexa} from "./svg/hexa"

export default function Header() {

  const particlesInit = (main) => {
    console.log(main);

  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="header position-relative">
      <section className='container-fluid position-absolute' style={{ width : "100%", height : "120vh"}}>
      {
        ["mint", "silver", "yellow", "blue"].map(cls => {
          return(
            <Hexa 
            hexaBoxStyle={{
              position: "absolute",
              opacity: '0.4',
              zIndex: '1'
            }} 
            color = {cls}
            />
          )
        })
      }
      </section>
      <div className="head-clg-name">
        <h2>BTKIT</h2>
        <span>Dwarahat</span>
      </div>
  
      <section className="particle-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{ ...option }}
        />
      </section>
      <div className="header-container position-relative">
        <Head />
       
      </div>
      
   


      {/* <h2 className="college-name">Bipin Tripathi Kumaon Institute of Technology</h2>
      <div className="header-container">
        <div className="left-container">
          <img src={logo} alt="Fest-logo" />
        </div>
        <div className="right-container">
          <div className="clip"></div>
          <div>
            <h1 className="fest-h1">KAIVALYA</h1>
            <h1 className="fest-h2">FEST</h1>
            <h1 className="fest-h3">2K22</h1>
          </div>
          <p>Fest Start from 18 April to 19 April 2K22</p>
        </div>

      </div> */}
      {/* 
      <p>Fest Start from 18 April to 19 April 2K22</p> */}


    </div>
  );
}
