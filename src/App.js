import React from "react";
import ConfigPluginModified from "./components/ConfigPluginModified";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="row content-fluid">
        <Header />
      </div>
      <div className="row content-fluid">
        <div className="col-3">
          <DropdownSelector />
        </div>
        <div className="col-3">
          <EditPluginList />
        </div>
        <div className="col-6">
          <ConfigPluginModified />
        </div>
      </div>
    </div>
  );
}

export default App;
