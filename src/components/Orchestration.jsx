import React from "react";
import { dump } from "js-yaml";
import { saveAs } from "file-saver";

const Orchestration = ({ orchestration }) => {
  let orchestrationAdapters = JSON.parse(JSON.stringify(orchestration));
  let newAdapters = [];
  orchestrationAdapters.map((o) => {
    delete o.checkSaved;
    delete o.uid;
    newAdapters.push(o);
  });

  const jsonFile = JSON.stringify(newAdapters, null, 2);
  const jsonObj = JSON.parse(jsonFile);
  const yamlPretty = dump(jsonObj);

  const download = () => {
    const fileYaml = new Blob([yamlPretty], { type: "application/yaml" });
    saveAs(fileYaml, "adapters.yaml");
  };

  const PrintYaml = ({ data }) => (
    <div>
      <pre className="containerPrintYaml">
        <h4 className="mb-4">Preview</h4>
        {data}
      </pre>
    </div>
  );

  return (
    <div className="containerYamlDownload">
      <PrintYaml data={yamlPretty} />
      <button className="mt-3 mb-5 buttonDownload" onClick={() => download()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
      </button>
    </div>
  );
};

export default Orchestration;
