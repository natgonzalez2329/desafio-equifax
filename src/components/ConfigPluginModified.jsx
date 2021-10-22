import React from 'react';

const ConfigPluginModified = ({ listPlugin }) => {
  return (
    <div>
      <span>ConfigPluginModified</span>
      <form>
        {listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">
            Select and modify plugins
          </h1>
        ) : (
          listPlugin.map((plugin) => (
            <div key={plugin.uid}>
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
                disabled="true"
              />
              <label>Config</label>
              {/* {Object.values(plugin.config).forEach((item) => {
                if (item && typeof item === 'string') {
                  console.log('hola str');
                }
              })} */}
            </div>
          ))
        )}
      </form>
    </div>
  );
};

export default ConfigPluginModified;
