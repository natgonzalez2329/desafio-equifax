import React from 'react';

const ConfigPluginModified = ({ listPlugin, setListPlugin, setCheckSaved }) => {

  const changesSaved =(e) => {
    e.preventDefault();
    console.log("saved");
    setCheckSaved(true);
  };

  const cancelEdit = () => {
    setCheckSaved(false)
  };

  const deletePlugin = (uid) => {
    const pluginListRemoved = listPlugin.filter((plugin) => plugin.uid !== uid);
    return setListPlugin(pluginListRemoved);
  };

  return (
    <div>
      <span>ConfigPluginModified</span>
      <form onSubmit={(e) => changesSaved(e)}>
        {listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">
            Select and modify plugins
          </h1>
        ) : (
          listPlugin.map((plugin) => (
            <div key={plugin.uid}>
              <div>
                <button onClick={() => deletePlugin(plugin.uid)}>
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
              </div>
              <label>id</label>
              <input type="text" placeholder={plugin.id} />
              <label>Dependencies</label>
              <input type="text" placeholder={plugin.dependencies} />
              <label>StepName</label>
              <input type="text" placeholder={plugin.stepName} />
              <label>MainClass</label>
              <input
                type="text"
                placeholder={plugin.mainClass}
                disabled
              />
              <label>Config</label>
              {/* {Object.values(plugin.config).forEach((item) => {
                if (item && typeof item === 'string') {
                  console.log('hola str');
                }
              })} */}
              <div>
                <button type="submit">
                  SAVE
                </button>
                <button type="button" onClick={() => cancelEdit()}>
                  CANCEL
                </button>
              </div>
            </div>
          ))
        )}
      </form>
    </div>
  );
};

export default ConfigPluginModified;
