/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
import ServiceIntro from "../../components/3ServiceTypes/ServiceIntro";

const HomePage = () => {
  const services = [
    { errand: "Connect", backgroundColor: "#E5CF97" },
    { errand: "Errands", backgroundColor: "#A0C3F4" },
    { errand: "Events", backgroundColor: "#DB97E5" },
    { errand: "Food", backgroundColor: "#E597AF" },
  ];

  return (
    <div className={classes.homepage}>
      <div className={classes.cta}>
        <img
          className={classes.responsiveImage}
          src="\images\globe.jpg"
          alt="world map"
        />
        <Link to="/signup">
          <div className={classes.signUp}>Signup</div>
        </Link>
      </div>
      <div className={classes.aboutus}>
        <h1>About NaijaFunnel</h1>
        <div>
          <p>
            NaijaFunnel is for Nigerians in the diaspora (NiD). Our purpose is
            to elevate, entertain, educate, and empower our community, bridging
            the experience gap between your current residence and Nigeria.
          </p>
          <p>
            Experience a taste of home with authentic Naija cuisines and and
            events promotion. From running errands to facilitating movement of
            goods, we make your diaspora lifestyle easier. Enhance your skills,
            advance your career, and connect through our networking channels.
          </p>
        </div>
      </div>
      <div className={classes.services}>
        <p>Our Offerings</p>
        <div className={classes.features}>
          {services.map((service, index) => {
            return (
              <ServiceIntro
                key={index}
                errand={service.errand}
                backgroundColor={service.backgroundColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
