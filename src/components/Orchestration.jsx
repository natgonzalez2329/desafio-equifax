import React from "react";
import { dump } from "js-yaml";
import { saveAs } from "file-saver";

const Orchestration = ({ orchestration }) => {
  const download = () => {
    const jsonFile = JSON.stringify(orchestration, null, 2);
    const jsonObj = JSON.parse(jsonFile);
    const yamlPretty = dump(jsonObj);
    const fileYaml = new Blob([yamlPretty], { type: "application/yaml" });
    saveAs(fileYaml, "adapters.yaml");
  };

  return (
    <div>
      {console.log("hola orquestacion")}
      {console.log(orchestration)}
      <button onClick={() => download()}>DOWNLOAD</button>
    </div>
  );
};

export default Orchestration;
