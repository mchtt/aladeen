import React from 'react';
import './App.css';
import AladeenContainer from './components/AladeenContainer'
import AladeenHeader from './components/AladeenHeader'
import AladeenFooter from './components/AladeenFooter'


function Aladeen() {
  return (
    <div className="Aladeen">
      <AladeenHeader/>
      <AladeenContainer/>
      <AladeenFooter/>
    </div>
  )
}

export default Aladeen;
