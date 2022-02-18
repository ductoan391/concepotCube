import React from 'react';
import "./firstPage.scss";
import bg1 from "../../../../Assets/Images/bg-object-1.png";
import bg2 from "../../../../Assets/Images/bg-object-2.png";
import bg3 from "../../../../Assets/Images/bg-object-3.png";
import bg4 from "../../../../Assets/Images/bg-object-4.png";
import bg5 from "../../../../Assets/Images/bg-object-5.png";


function FirstPage() {
  return (
    <div className='firstPage'>
      <img src={bg1} alt="" className='bg1' />
      <img src={bg2} alt="" className='bg2' />
      <img src={bg3} alt="" className='bg3' />
      <img src={bg4} alt="" className='bg4' />
      <img src={bg5} alt="" className='bg5' />

      <div className="firstPage-container">
        <div className="firstPage-title">
          <p className='firstPage-title_text'>everything</p>
          <p className='firstPage-title_text'>is in the</p>
          <p className='firstPage-title_text'>conceptcube</p>
        </div>
        <div className="firstPage-desc">
          <p className='firstPage-desc_text'>ConceptCube Company Introduction</p>
        </div>
      </div>
    </div>
  )
}

export default FirstPage