import React from "react";
import Dropdown from "./dropdown";
import { menuData } from "./menu";
import "./App.css";
import Modal from "./modal";

function App() {
  return (
    <div style={{ margin: "50px 10px" }}>
      <Modal />
      <Dropdown data={menuData} />
    </div>
  );
}

export default App;
