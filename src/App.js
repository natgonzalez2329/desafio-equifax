import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import ConfigPluginModified from "./components/ConfigPluginModified";



function App() {
  const [listPlugin, setListPlugin] = useState([]);
  const [pluginSelect,setPlugin] = useState(0);

  const filterPluggin = (e) => {
    if(listPlugin!== null){
      const newPluggin = listPlugin.filter((item) => item.uid === e);
      setPlugin(newPluggin[0])
      return <ConfigPluginModified pluginSelect={pluginSelect} setPlugin={setPlugin} />
    }
  };

  return (
    <div className="App container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="p-2">
      <div className="row">
        <div className="col-2 d-flex justify-content-center">
          <DropdownSelector 
          listPlugin={listPlugin} 
          setListPlugin={setListPlugin} />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <EditPluginList 
          listPlugin={listPlugin} 
          setListPlugin={setListPlugin} 
          filterPluggin={filterPluggin} />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <ConfigPluginModified pluginSelect={pluginSelect} 
          setPlugin={setPlugin} listPlugin={listPlugin} 
          setListPlugin={setListPlugin} />
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
