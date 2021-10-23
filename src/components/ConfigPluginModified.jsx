import React from 'react';

const extractObj = (k,v) =>{
    console.log(v)
    if(typeof(v)==='string'|| typeof(v)==='number'){
      return <div>
        <label>{k}</label>
        <input type="text" placeholder={v[k]} />
      </div>
    }else if(typeof(v) === 'object'){
      return <div >{k}
        {Object.keys(v).map((item,index)=>{
                  return (<div key={index}>
                      <label>{item}</label>
                      <input type="text" placeholder={v[item]} />
                  </div>)
              })}
      </div>
    }
}

const typeValue = (t,a)=>{
  
    if(typeof(t)==='string'|| typeof(t)==='number'){
      return <div>
             <label>{a}</label>
             <input type="text" 
              placeholder={t[a]}
              />
      </div>
    }else if (Object.prototype.toString.call(t) === '[object Array]'){
          return <div><div>{a}</div>
                 <div>
         {t.map((item,id)=>{
             return(<div key={id}>
              {Object.keys(item).map((value,index)=>{
                  return (<div key={index}>
                      {extractObj(value,item[value])}
                  </div>)
              })}
             </div>)
         })}
      </div>
          </div>        
    }else{
          return <div>{a}
          {Object.keys(t).map((i,id)=>{
            return(<div key={id}>
                  {extractObj(i,t[i])}
            </div>)
          })}
          
        </div>  
    }
}

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
                     {typeValue(pluginSelect.config[item],item)}
                  </div>)
              })
              }
            </div>
        )
            }
      </form>
    </div>
  );
};

export default ConfigPluginModified;
