import React from 'react';
import './Gallery.css';

const Gallery = () => (
  <div className="Gallery">
     <div className="container">
       <div className="row">
         <div className="col">
           <img src={require('../../Assets/img/1.jpg')} alt=""/>
         </div>
         <div className="col">
         <img src={require('../../Assets/img/2.jpg')} alt=""/>
         </div>
         <div className="col">
         <img src={require('../../Assets/img/3.jpg')} alt=""/>
         </div>
         <div className="col">
         <img src={require('../../Assets/img/4.jpg')} alt=""/>
         </div>
       </div>


       <div className="row">
         <div className="col">
           <img src={require('../../Assets/img/1.jpg')} alt=""/>
         </div>
         <div className="col">
         <img src={require('../../Assets/img/2.jpg')} alt=""/>
         </div>
         <div className="col">
         <img src={require('../../Assets/img/3.jpg')} alt=""/>
         </div>
         <div className="col">
         <img src={require('../../Assets/img/4.jpg')} alt=""/>
         </div>
       </div>

      </div>
  </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
