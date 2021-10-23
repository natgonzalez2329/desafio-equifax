import React, {useState} from "react";
import ConfigPluginModified from "./components/ConfigPluginModified";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [listPlugin, setListPlugin] = useState([]);
  const [checkSaved, setCheckSaved] = useState(false);

  return (
    <div className="App container-fluid">
      <div className="row-sm">
        <Header />
      </div>
      <div className="row">
        <div className="col-3">
          <DropdownSelector 
          listPlugin={listPlugin} 
          setListPlugin={setListPlugin} />
        </div>
        <div className="col-3">
          <EditPluginList 
          listPlugin={listPlugin} 
          checkSaved={checkSaved}
          />
        </div>
        <div className="col-6">
          <ConfigPluginModified 
          listPlugin={listPlugin} 
          setListPlugin={setListPlugin}
          setCheckSaved={setCheckSaved} />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
