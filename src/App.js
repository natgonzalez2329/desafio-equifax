import React, { useState, useEffect } from "react";
import DropdownSelector from "./components/DropdownSelector";
import EditPluginList from "./components/EditPluginList";
import ConfigPluginModified from "./components/ConfigPluginModified";
import FormsPreview from "./components/FormsPreview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import yaml from "js-yaml";

function App() {
  const [listPlugin, setListPlugin] = useState([]);
  const [pluginSelect, setPlugin] = useState(0);
  const [dataYamlJson, setDataYamlJson] = useState([]);
  const [orchestration, setOrchestration] = useState([]);
  const [preview, setPreview] = useState(true);

  useEffect(() => {
    const ymlUrlFiles = [
      "../../home/user/config/calculateModels.yml",
      "../../home/user/config/dataEnricher.yml",
      "../../home/user/config/evaluateConditions.yml",
      "../../home/user/config/filterClients.yml",
      "../../home/user/config/inputHandler.yml",
      "../../home/user/config/keyFinder.yml",
      "../../home/user/config/outputHandler.yml",
    ];
    const YAMLtoJSON = async (yml) => {
      const dataFetched = await fetch(yml);
      const blobData = await dataFetched.blob();
      const stringifyData = await blobData.text();
      const obj = yaml.load(stringifyData);
      const str = JSON.stringify(obj, null, 2);
      const str2 = JSON.parse(str);
      return str2[0];
    };
    Promise.all(ymlUrlFiles.map(async (yml) => await YAMLtoJSON(yml))).then(
      (data) => setDataYamlJson(data)
    );
  }, []);

  const filterPluggin = (e) => {
    if (listPlugin) {
      const newPluggin = listPlugin.filter((item) => item.uid === e);
      setPlugin(newPluggin[0]);
      return (
        <ConfigPluginModified
          pluginSelect={pluginSelect}
          setPlugin={setPlugin}
        />
      );
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
              dataYamlJson={dataYamlJson}
              listPlugin={listPlugin}
              setListPlugin={setListPlugin}
            />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EditPluginList
              listPlugin={listPlugin}
              setListPlugin={setListPlugin}
              filterPluggin={filterPluggin}
              setPlugin={setPlugin}
              setPreview={setPreview}
              setOrchestration={setOrchestration}
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <FormsPreview
              pluginSelect={pluginSelect}
              setPlugin={setPlugin}
              listPlugin={listPlugin}
              setListPlugin={setListPlugin}
              orchestration={orchestration}
              setOrchestration={setOrchestration}
              preview={preview}
            />
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
