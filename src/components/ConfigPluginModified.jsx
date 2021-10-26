import React, { useState } from "react";
import ModalSave from "../elements/ModalSave";
import ModalDelete from "../elements/ModalDelete";
import "../styles/ConfigPluginModified.css";

const ConfigPluginModified = ({
  pluginSelect,
  setPlugin,
  listPlugin,
  setListPlugin,
  orchestration,
  setOrchestration,
}) => {
  const [modalSave, setModalSave] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const typeValue = (key, value, index, title) => {
    if (typeof value === "string" || typeof value === "number") {
      return (
        <div>
          <label>{key}</label>
          <input
            type="text"
            placeholder={value}
            data-id="config"
            data-name={title}
            data-tag={index}
            name={key}
            onChange={handleInputChange}
          />
        </div>
      );
    } else if (Array.isArray(value)) {
      return (
        <div>
          <div>
            <label>{key}</label>
            {value.map((item, id) => {
              return <div key={id}>{typeValue(id, item, id, key)}</div>;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <label>{key}</label>
          {Object.keys(value).map((i, id) => {
            return <div key={id}>{typeValue(i, value[i], key, id)}</div>;
          })}
        </div>
      );
    }
  };

  let pluginSelectModified = pluginSelect;
  let dataObj = null;
  const handleInputChange = (event) => {
    let name = event.target.name;
    let indexArray = event.target.dataset.tag;
    let valueParam = event.target.value;

    let config = {};
    if (pluginSelectModified[name]) {
      pluginSelectModified[name] = valueParam;
    } else {
      const keysPluginSelect = Object.keys(pluginSelectModified);
      keysPluginSelect.forEach((key) => {
        if (key === "config") {
          const keysConfigObj = Object.keys(pluginSelectModified[key]);
          keysConfigObj.forEach((keyConfig) => {
            const paramConfig = pluginSelectModified["config"][keyConfig];
            if (keyConfig === name) {
              pluginSelectModified["config"][keyConfig] = valueParam;
            } else {
              if (Array.isArray(paramConfig)) {
                paramConfig.forEach((obj, index) => {
                  if (index === Number(indexArray) && obj[name]) {
                    pluginSelectModified["config"][keyConfig][index][name] =
                      valueParam;
                  } else if (obj[name] === undefined) {
                    const nameVariables = Object.keys(obj);
                    nameVariables.forEach((variable) => {
                      Object.keys(obj[variable]).forEach((key) => {
                        if (key === name) {
                          paramConfig[index][variable][key] = valueParam;
                        }
                      });
                    });
                  }
                });
              } else if (!Array.isArray(paramConfig)) {
                Object.keys(paramConfig).forEach((d) => {
                  if (d === name) {
                    paramConfig[d] = valueParam;
                  }
                  config = {
                    ...pluginSelectModified["config"],
                    ...{ [keyConfig]: paramConfig },
                  };
                });
                dataObj = { ...pluginSelectModified, config };
              }
            }
          });
        }
      });
    }
  };

  const openModalDelete = (e) => {
    e.preventDefault();
    setModalDelete(true);
  };

  const pluginChecked = (uid) => {
    const plugins = listPlugin.map((plugin) => {
      if (plugin.uid === uid) {
        plugin.checkSaved = true;
      }
      return plugin;
    });
    setListPlugin([...plugins]);
  };

  const saveId = (uid) => {
    pluginChecked(uid);
  };

  const changesSaved = (e) => {
    e.preventDefault();
    setOrchestration([...orchestration, pluginSelect]);
    setModalSave(true);
  };

  return (
    <div>
      <div className="col mt-3 mb-3">
        <h4>Configuration</h4>
      </div>
      <form onSubmit={(e) => changesSaved(e)}>
        {pluginSelect === 0 ? (
          <h3 className="text-center fst-italic text-white-50 m-5 p-5">
            Select and modify plugins
          </h3>
        ) : (
          <div key={pluginSelect.uid}>
            <div className="col-md-4 offset-md-8 mb-3">
              <button onClick={(e) => openModalDelete(e)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              {modalDelete && (
                <ModalDelete
                  closeModal={setModalDelete}
                  pluginSelectId={pluginSelect.uid}
                  listPlugin={listPlugin}
                  setPlugin={setPlugin}
                  setListPlugin={setListPlugin}
                />
              )}
            </div>
            <div className="form-row">
              <div className="form-group col-4" id="formGroupId">
                <label for="inputId">id</label>
                <input
                  className="form-control"
                  id="inputId"
                  type="text"
                  data-name="id"
                  placeholder={pluginSelect.id}
                  data-tag="id"
                  name="id"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="form-group col-4">
                <label for="selectDependencies">Select dependencies</label>
                <select
                  id="selectDependencies"
                  className="form-control"
                  data-name="dependencies"
                  data-tag="dependencies"
                  name="dependencies"
                  onChange={handleInputChange}
                >
                  <option selected>dependencies</option>
                  <option value="input">input</option>
                  {listPlugin.map((plugin) => (
                    <option key={plugin.uid} value={plugin.id}>
                      {plugin.id}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-4 mt-2">
                <label for="inputStepName">stepName</label>
                <input
                  id="inputStepName"
                  className="form-control"
                  type="text"
                  data-name="text"
                  placeholder={pluginSelect.stepName}
                  data-tag="stepName"
                  name="stepName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-4 mt-2">
                <label for="inputMainClass">mainClass</label>
                <input
                  id="inputMainClass"
                  className="form-control"
                  type="text"
                  data-name="mainClass"
                  data-tag="mainClass"
                  name="mainClass"
                  placeholder={pluginSelect.mainClass}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            </div>
            <div className="col-6 mt-3 mb-2">
              <label>Config</label>
            </div>
            <div className="form-group col-4 mt-2">
              {Object.keys(pluginSelect.config).map((key, index) => {
                return (
                  <div className="form-group col-4 mt-3" id="inputConfig">
                    <div key={index} id="inputConfig">
                      {typeValue(key, pluginSelect.config[key])}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="buttonSave"
                type="submit"
                onClick={() => saveId(pluginSelect.uid)}
              >
                SAVE
              </button>
              {modalSave && <ModalSave closeModal={setModalSave} />}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ConfigPluginModified;
