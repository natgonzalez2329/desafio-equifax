import React  from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "../styles/DropdownSelector.css";
 import { data } from "../data/dataYml";
import { nanoid } from 'nanoid';


const DropdownSelector = ({ listPlugin, setListPlugin }) => {
   
/*     
  const options = data.map((optionsPlugins) => {
    const pluginsName = optionsPlugins.stepName;
    const pluginsId = optionsPlugins.id;
    const option = {name: pluginsName.toLowerCase(), value: pluginsId};
    return option;
  })
  console.log("options", options); */
  

  const options = [
    { name: "Calculate Models", value: 'calculate-models' },
    { name: "Data Enricher", value: 'data-enricher' },
    { name: "Eval Conditions", value: 'evaluate-conditions' },
    { name: "Filter Clients", value: 'filter-client' },
    { name: "Input Handler", value: 'input-handler' },
    { name: "Key Finder", value: 'key-finder' },
    { name: "Output Handler", value: 'output-handler' }
    // {
    //   items: [{ name: "Spanish", value: "es" }],
    // },
  ];
  
  const selectPlugin = (e) => {
    let dataPlugins = []
    data.forEach(plugin => {
      if(e === plugin.id) {
        const object = {...plugin, uid: nanoid(5), checkSaved: false};
        dataPlugins.push(object);
        setListPlugin([...listPlugin, ...dataPlugins]);
      }
    })
  }; 

  return (
    <div>    
    <h6>Plugin Configuration</h6>               
    <SelectSearch 
      options={options}
      search
      filterOptions={fuzzySearch}
      placeholder="Select a plugin"
      onChange={(e) => selectPlugin(e)}
    />
    </div>
  );
};

export default DropdownSelector;
