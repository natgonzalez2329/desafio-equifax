import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "../styles/DropdownSelector.css";
import YAMLtoJSON from "../data/dataYml"

const DropdownSelector = () => {
  const options = [
    { name: "Calculate Models", value: '../../home/user/config/calculateModels.yml' },
    { name: "Data Enricher", value: '../../home/user/config/dataEnricher.yml' },
    { name: "Eval Conditions", value: '../../home/user/config/evaluateConditions.yml' },
    { name: "Filter Clients", value: '../../home/user/config/filterClients.yml' },
    { name: "Input Handler", value: '../../home/user/config/inputHandler.yml' },
    { name: "Key Finder", value: '../../home/user/config/keyFinder.yml' },
    { name: "Output Handler", value: '../../home/user/config/outputHandler.yml' }
    // {
    //   items: [{ name: "Spanish", value: "es" }],
    // },
  ];

  const selectPlugin = (e) => YAMLtoJSON(e)
  console.log(selectPlugin)

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
