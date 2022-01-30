import React from "react";
//css
import "./ToggleButton.css"
import { useSelector,useDispatch } from 'react-redux';
import { changeDarkMode } from "../redux/crypto/cryptoAction";
const ToggleButton = () => {
  // const darkMode = useSelector(state => state.cryptoState);
  const dispatch = useDispatch()
  const toggleHandler = ()=>{
    dispatch(changeDarkMode())
  }
  return (
    <label className="switch" >
      <input type="checkbox" onClick={toggleHandler}/>
      <span className="slider round"></span>
    </label>
    
  );
};

export default ToggleButton;
