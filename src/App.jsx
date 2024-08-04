import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxContainer/SocialStore.js";
import HomePage from "./Components/HomePage";
import DetailsPages from "./Components/DetailsPages";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPages />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
