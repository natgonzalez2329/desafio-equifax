import React, {useState} from "react";
import ConfigPluginModified from "./components/ConfigPluginModified";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [listPlugin, setListPlugin] = useState([]);

  return (
    <div className="App content-fluid">
      <div className="row-sm">
        <Header />
      </div>
      <div className="row">
        <div className="col-3">
          <DropdownSelector listPlugin={listPlugin} setListPlugin={setListPlugin} />
        </div>
        <div className="col-3">
          <EditPluginList listPlugin={listPlugin} setListPlugin={setListPlugin} />
        </div>
        <div className="col-6">
          <ConfigPluginModified listPlugin={listPlugin} />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
