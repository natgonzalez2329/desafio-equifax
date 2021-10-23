import React from 'react';

const extractObj = (k, v) => {
  console.log(v);
  if (typeof v === 'string' || typeof v === 'number') {
    return (
      <div>
        <label>{k}</label>
        <input type="text" placeholder={v[k]} />
      </div>
    );
  } else if (typeof v === 'object') {
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
  if (typeof t === 'string' || typeof t === 'number') {
    return (
      <div>
        <label>{a}</label>
        <input type="text" placeholder={t[a]} />
      </div>
    );
  } else if (Object.prototype.toString.call(t) === '[object Array]') {
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

const ConfigPluginModified = ({ pluginSelect, setPlugin, listPlugin, setListPlugin }) => {

  const deletePlugin = (e, uid) => {
    e.preventDefault();
    const pluginListRemoved = listPlugin.filter((plugin) => plugin.uid !== uid);
    setPlugin(0);
    setListPlugin(pluginListRemoved); 
  };

  const changesSaved = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div>
      <span>ConfigPluginModified</span>
      <form onSubmit={(e) => changesSaved(e) }>
        {pluginSelect === 0 ? (
          <h1 className="text-center fst-italic text-black-50">
            Select and modify plugins
          </h1>
        ) : (
          <div key={pluginSelect.uid}>
            <div>
            <button onClick={(e) => deletePlugin(e, pluginSelect.uid)}>
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
            <input type="text" placeholder={pluginSelect.id} />
            <label>Dependencies</label>
            <input type="text" placeholder={pluginSelect.dependencies} />
            <label>StepName</label>
            <input type="text" placeholder={pluginSelect.stepName} />
            <label>MainClass</label>
            <input
              type="text"
              placeholder={pluginSelect.mainClass}
              disabled
            />
            <label>Config</label>
            {Object.keys(pluginSelect.config).map((item, index) => {
              return (
                <div key={index}>
                  {typeValue(pluginSelect.config[item], item)}
                </div>
              );
            })}
            <div>
                <button type="submit">
                  SAVE
                </button>
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
