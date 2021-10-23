import React from 'react';


const ConfigPluginModified = ({pluginSelect}) => {
  return (
    <div>
      <span>ConfigPluginModified</span>
      <form>
        {console.log(pluginSelect)}
        {pluginSelect===0 ? (
          <h1 className="text-center fst-italic text-black-50">
            Select and modify plugins
          </h1>
        ) : (
          <div key={pluginSelect.uid}>
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
                disabled="true"
              />
              <label>Config</label>
              {Object.keys(pluginSelect.config).map((item,index) => {
                  return(<div key={index}>
                  <label>{item}</label>
                  <input
                   type="text"
                   placeholder={pluginSelect.config[item]}
                  />
                  </div>)
              })
               /* if (item && typeof item === 'string') {
                  console.log(item);
                }else if ( typeof item === 'object'){
                  console.log(item);
                }*/
              }
            </div>
        )
            }
      </form>
    </div>
  );
};

export default ConfigPluginModified;
