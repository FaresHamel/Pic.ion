import React from 'react';
import './HomePage.css';

import Gallery from '../Gallery/Gallery'


const HomePage = () => (
  <div className="HomePage">
      <div className="imageBackground"></div>
      <div className="w-100">
        <Gallery/>
      </div>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
