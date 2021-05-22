import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Showcase from '../sections/Showcase';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli:400,700,800,900&display=swap"
        />
      </Helmet>
      <Navbar />
      <Showcase />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
