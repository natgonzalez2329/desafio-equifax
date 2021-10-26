import React, { useState } from "react";
import ModalSave from "../elements/ModalSave";
import ModalDelete from "../elements/ModalDelete";
import "../styles/ConfigPluginModified.css";

const extractObj = (k, v) => {
  // console.log(v);
  if (typeof v === "string" || typeof v === "number") {
    return (
      <div>
        <label>{k}</label>
        <input type="text" placeholder={v[k]} />
      </div>
    );
  } else if (typeof v === "object") {
    return (
      <div>
        {k}
        {Object.keys(v).map((item, index) => {
          return (
            <div key={index}>
              <label>{item}</label>
              <input type="text" placeholder={v[item]} />
            </div>
          );
        })}
      </div>
    );
  }
};

const typeValue = (t, a) => {
  if (typeof t === "string" || typeof t === "number") {
    return (
      <div>
        <label>{a}</label>
        <input type="text" placeholder={t[a]} />
      </div>
    );
  } else if (Object.prototype.toString.call(t) === "[object Array]") {
    return (
      <div>
        <div>{a}</div>
        <div>
          {t.map((item, id) => {
            return (
              <div key={id}>
                {Object.keys(item).map((value, index) => {
                  return (
                    <div key={index}>{extractObj(value, item[value])}</div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {a}
        {Object.keys(t).map((i, id) => {
          return <div key={id}>{extractObj(i, t[i])}</div>;
        })}
      </div>
    );
  }
};

const ConfigPluginModified = ({
  pluginSelect,
  setPlugin,
  listPlugin,
  setListPlugin,
}) => {
  const [modalSave, setModalSave] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

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

  const changesSaved = (e) => {
    e.preventDefault();
    const pluginIdSaved = e.target.dataset.tag;
    pluginChecked(pluginIdSaved);
    /* const valuesPlugins = e.target; */
    // console.log(typeof(valuesPlugins))
    /* valuesPluggins.map(item => console.log(item)) */
    setModalSave(true);
  };

  return (
    <div>
      <form onSubmit={(e) => changesSaved(e)} data-tag={pluginSelect.uid}>
        <h4>Configuration</h4>
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
            <div className="form-row">
              <div className="form-group col mt-4">
                <label for="inputId">id</label>
                <input
                  class="form-control"
                  id="inputId"
                  type="text"
                  placeholder={pluginSelect.id}
                  name={"id"}
                />
                <label>dependencies</label>
                <input
                  type="text"
                  placeholder={pluginSelect.dependencies}
                  name={"dependencies"}
                />
                <select className="selectDependencies">
                  <option selected>dependencies</option>
                  <option value="1">input</option>
                  {listPlugin.map((plugin) => (
                    <option key={plugin.uid} value={plugin.uid}>
                      {plugin.id}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 mt-2">
                <label>stepName</label>
              </div>
              <div className="col-12 mt-1">
                <input
                  type="text"
                  placeholder={pluginSelect.stepName}
                  name={"stepName"}
                />
              </div>
              <div className="col-12 mt-2">
                <label>mainClass</label>
              </div>
              <div className="col-12 mt-1">
                <input
                  className="inputMainClass"
                  type="text"
                  name={"mainClass"}
                  value={pluginSelect.mainClass}
                  disabled
                />
              </div>
              <div className="grid">
                <div className="col-6 mt-3">
                  <label>Config</label>
                </div>
                <div className="col-6 mt-2">
                  {Object.keys(pluginSelect.config).map((item, index) => {
                    return (
                      <div>
                        <div className="col-6 mt-4 mb-4" key={index}>
                          {typeValue(pluginSelect.config[item], item)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <button type="submit">SAVE</button>
              {modalSave && <ModalSave closeModal={setModalSave} />}
              <button type="button">CANCEL</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ConfigPluginModified;
