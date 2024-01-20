import React from 'react';
// import '../App.css';

const MappingContainer: React.FC = () => {
  return (
    <div className="container bigger-container mt-2 mr-auto"> 
      <div className="input-section">
        <h3 className='input-section-1'>Source Org-unit Levels</h3>
        <div className="input-container">
          <input type="text" placeholder="National" />
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="input-section">
        <h3 className='input-section-1'>Period Type</h3>
        <div className="input-container">
          <input type="text" placeholder="Monthly" />
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="container-row">
        <div className="half-container">
          <h5 className="input-section-2">Source</h5>
          <hr></hr>
        </div>
        <div className="half-container">
          <h5 className="input-section-2">Destination</h5>
          <hr></hr>
        </div>
      </div>
      <div className="search-bar-container">
        <span className="material-symbols-outlined">&#xe8b6;</span> 
        <input type="text" placeholder="Search source" />
        <span className="search-label"></span>
      </div>
      <button className="btn btn-success">Map</button>
    </div>
  );
};

export default MappingContainer;
