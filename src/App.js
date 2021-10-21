import React from "react";
import ConfigPluginModified from "./components/ConfigPluginModified";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const YAMLtoJSON  = (yml) =>{
  fetch(yml)
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
    console.log('yaml res:', yamlAsString)
    const str = JSON.stringify (yamlAsString);
    console.log(str);
  }).catch(err => console.log('yaml err:', err))
}

YAMLtoJSON('assets/config/calculateModels.yml')

function App() {
  return (
    <div className="App content-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
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
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
