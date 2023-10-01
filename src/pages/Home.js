import React from "react";
import "../styles/Home.css";
import Banner from "../assets/Luxury_Lambo.png";
import Welcome from "../components/Welcome";
import LuxuryCarsCard from "../components/LuxuryCarsCard";
import OurFleet from "../components/OurFleet";
import RequiredDocs from "../components/RequiredDocs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homeBanner">
        <img src={Banner} alt="HomePage Banner"></img>
        <div className="banner_desc">
          <div>
            <h1>Luxury</h1>
            <p>CONQUER THE ROAD IN STYLE</p>
            <p>AND ELEGANCE WITH OUR</p>
            <p>LUXURY FLEET</p>
          </div>
          <div>
            <Link to="/luxury-cars">rent here</Link>
          </div>
        </div>
        <Welcome />
        <LuxuryCarsCard />
        <OurFleet />
        <RequiredDocs />
      </div>
    </>
  );
}

export default Home;
