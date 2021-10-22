import React from "react";
import ConfigPluginModified from "./components/ConfigPluginModified";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import Header from "./components/Header";
import Footer from "./components/Footer";
/* import yaml from 'js-yaml'
import { saveAs } from 'file-saver';

let arrayData = [];
const YAMLtoJSON  = (yml) =>{
  fetch(yml)
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
    const obj = yaml.load(yamlAsString)
    const str = JSON.stringify(obj,null, 2);
    console.log(str)
    const str2 =JSON.parse(str)
    console.log("obj")
    console.log(str2[0]);
    arrayData.push(str2[0]);
    const fileJSON = new Blob([str], {type : "application/json"});
    saveAs(fileJSON, "uno.json");
  }).catch(err => console.log('yaml err:', err))

}
console.log("data")
console.log(arrayData)
YAMLtoJSON('../../home/user/config/calculateModels.yml');
YAMLtoJSON('../../home/user/config/dataEnricher.yml');
YAMLtoJSON('../../home/user/config/evaluateConditions.yml');
YAMLtoJSON('../../home/user/config/filterClients.yml');
YAMLtoJSON('../../home/user/config/inputHandler.yml');
YAMLtoJSON('../../home/user/config/keyFinder.yml');
YAMLtoJSON('../../home/user/config/outputHandler.yml'); */


function App() {
  return (
    <div className="App content-fluid">
      <div className="row-sm">
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
