import React from "react";
import ModalConfigPluggin from "./ModalConfigPluggin";
import "../styles/EditPluginList.css";

const EditPluginList = ({
  listPlugin,
  setListPlugin,
  filterPluggin,
  setPlugin,
  setOrchestration,
  setPreview,
}) => {
  const newOrchestration = () => {
    setListPlugin([]);
    setPlugin(0);
    setOrchestration([]);
    setPreview(true);
  };

  const createYaml = () => {
    setPreview(false);
  };

  return (
    <div className="listColEdit mt-3 mb-3">
      <h4>Plugin List</h4>
      <button className="btnNewOrch" onClick={() => newOrchestration()}>
        + new file
      </button>
      <div className="list-group-item m-2 text-white bgItems">
        {listPlugin.length === 0 ? (
          <h3 className="text-center fst-italic text-white-50 m-4 p-3">
            Add a new plugin.
          </h3>
        ) : (
          <ModalConfigPluggin
            className="listColEdit"
            listPlugin={listPlugin}
            setListPlugin={setListPlugin}
            filterPluggin={filterPluggin}
          />
        )}
      </div>
      <button className="buttonCreate" onClick={() => createYaml()}>
        CREATE
      </button>
    </div>
  );
};

export default EditPluginList;
