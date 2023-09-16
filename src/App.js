import "./App.css";
import { useState, useEffect } from "react";
import { createStore } from "redux";
import { Provider, connect, useSelector, useDispatch } from "react-redux";

const countReducer = function (state = 0, action) {
  switch ((action, type)) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="react-redux-store">
          <p>How to setup redux store</p>
        </div>
      </div>
    </div>
  );
}

export default App;
