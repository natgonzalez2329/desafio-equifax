import React, { useState } from "react";
import ModalSave from "../elements/ModalSave";
import ModalDelete from "../elements/ModalDelete";

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
  let dataObj = pluginSelectModified;
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
                    pluginSelectModified["config"][keyConfig][index][
                      name
                    ] = valueParam;
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
      <span>ConfigPluginModified</span>
      <form onSubmit={(e) => changesSaved(e)}>
        {pluginSelect === 0 ? (
          <h1 className="text-center fst-italic text-black-50">
            Select and modify plugins
          </h1>
        ) : (
          <div key={pluginSelect.uid}>
            <div>
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
            <label>id</label>
            <input
              type="text"
              data-name="id"
              placeholder={pluginSelect.id}
              data-tag="id"
              name="id"
              onChange={(e) => handleInputChange(e)}
            />
            <label>dependencies</label>
            <select
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

            <label>stepName</label>
            <input
              type="text"
              data-name="text"
              placeholder={pluginSelect.stepName}
              data-tag="stepName"
              name="stepName"
              onChange={handleInputChange}
            />
            <label>mainClass</label>
            <input
              type="text"
              data-name="mainClass"
              data-tag="mainClass"
              name="mainClass"
              placeholder={pluginSelect.mainClass}
              onChange={handleInputChange}
            />
            <label>Config</label>
            {Object.keys(pluginSelect.config).map((key, index) => {
              return (
                <div key={index}>
                  {typeValue(key, pluginSelect.config[key])}
                </div>
              );
            })}
            <div>
              <button type="submit" onClick={() => saveId(pluginSelect.uid)}>
                SAVE
              </button>
              {modalSave && <ModalSave closeModal={setModalSave} />}
              <button type="button" /* onSubmit={() => cancelEdit()} */>
                CANCEL
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ConfigPluginModified;
