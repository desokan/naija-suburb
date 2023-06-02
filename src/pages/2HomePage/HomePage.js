/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
import ServiceIntro from "../../components/3ServiceTypes/ServiceIntro";

const HomePage = () => {
  const services = [
    { errand: "networking", backgroundColor: "#8292A8" },
    { errand: "errands", backgroundColor: "#E597AF" },
    { errand: "events", backgroundColor: "#8292A8" },
    { errand: "food", backgroundColor: "#8292A8" },
  ];

  return (
    <div className={classes.homepage}>
      <div className={classes.cta}>
        <img
          className={classes.responsiveImage}
          src="\images\globe.jpg"
          alt="world map"
        />
        <Link to="/signup" className={classes.linkstyle}>
          <div className={classes.signUp}>Get Started</div>
        </Link>
      </div>

      <div className={classes.aboutus}>
        <h1>About NaijaFunnel</h1>
        <div>
          <p>
            A platform for Nigerians in the diaspora (NiD). Our purpose is to
            elevate, entertain, educate, and empower our community, bridging the
            experience gap between your current residence and Nigeria.
            NaijaFunnel is your gateway to a vibrant Nigerian experience, no
            matter where you are in the world.
          </p>
          <p>
            Experience a taste of home with authentic Naija cuisines and events
            promotion. From running errands to facilitating movement of goods,
            we make your diaspora lifestyle easier. Enhance your skills, advance
            your career, and connect through our networking channels.
          </p>
        </div>
      </div>

      <div className={classes.services}>
        <h2>Our Offerings</h2>
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

      <div className={classes.aboutus}>
        <h2>Connect Universally</h2>
        <p>
          Experience a taste of home with authentic Naija cuisines and events
          promotion. From running errands to facilitating movement of goods, we
          make your diaspora lifestyle easier. Enhance your skills, advance your
          career, and connect through our networking channels.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
