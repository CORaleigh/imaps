import React, { lazy } from "react";
import "./App.css";
const Shell = lazy(() => import("./components/Shell/Shell"));

function App() {
  return (
    <div className="App">
      <Shell></Shell>
    </div>
  );
}

export default App;
