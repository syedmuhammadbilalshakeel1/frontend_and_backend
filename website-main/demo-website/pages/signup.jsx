import React from 'react'
import PropTypes from 'prop-types'
import Header from "../section/Header";
import ServiseToHero from "../section/serviseHero";
import Footer from "../section/Footer";
import MiddlE from "../section/about/middle";
import Card from "../section/about/card";
const about = props => {
  return (
    <>
      <Header />
      <ServiseToHero />

      <MiddlE />

      <Card />
      <Footer />
    </>
  );
}


export default about
