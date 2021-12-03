import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import "./app.css";

import { useSelector, useDispatch } from "react-redux";

import { incNumber, decNumber } from "./Actions/Action";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="center">
        <h1>{myState}</h1>

        <div className="btn">
          <Button onClick={() => dispatch(incNumber(5))}><AddIcon/></Button>
          <Button onClick={() => dispatch(decNumber())}><RemoveIcon/></Button>
        </div>
      </div>
    </div>
  );
};

export default App;
