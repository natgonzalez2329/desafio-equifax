import React, {useState} from "react";
import ConfigPluginModified from "./components/ConfigPluginModified";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [listPlugin, setListPlugin] = useState([]);

  return (
    <div className="App container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="p-2">
      <div className="row">
        <div className="col-2 d-flex justify-content-center">
          <DropdownSelector listPlugin={listPlugin} setListPlugin={setListPlugin} />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <EditPluginList listPlugin={listPlugin} setListPlugin={setListPlugin} />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <ConfigPluginModified listPlugin={listPlugin} />
        </div>
      </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
