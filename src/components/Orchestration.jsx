import React from "react";
import { dump } from "js-yaml";
import { saveAs } from "file-saver";

const Orchestration = ({ orchestration }) => {
  /* const adapters = [...orchestration]; const orchestrationClean = adapters.map(o => { delete o.checkSaved delete o.uid console.log(o) return o; }) */ console.log(
    orchestration
  );
  const jsonFile = JSON.stringify(orchestration, null, 2);
  const jsonObj = JSON.parse(jsonFile);
  const yamlPretty = dump(jsonObj);
  const download = () => {
    const fileYaml = new Blob([yamlPretty], { type: "application/yaml" });
    saveAs(fileYaml, "adapters.yaml");
  };
  const PrintYaml = ({ data }) => (
    <div>
      <pre>{data}</pre>
    </div>
  );
  return (
    <div>
      {" "}
      <button onClick={() => download()}>DOWNLOAD</button>{" "}
      <PrintYaml data={yamlPretty} />{" "}
    </div>
  );
};

export default Orchestration;
