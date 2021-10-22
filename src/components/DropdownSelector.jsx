import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "../styles/DropdownSelector.css";

const DropdownSelector = () => {
  const options = [
    { name: "Plugin 1", value: "plugin1" },
    { name: "Plugin 2", value: "plugin2" },
    { name: "Plugin 3", value: "plugin3" },
    { name: "Plugin 4", value: "plugin4" },
    // {
    //   items: [{ name: "Spanish", value: "es" }],
    // },
  ];
  return (
    <SelectSearch
      options={options}
      search
      filterOptions={fuzzySearch}
      placeholder="Select a plugin"
      onChange={(e)=>console.log(e)}
    />
  );
};
export default DropdownSelector;
