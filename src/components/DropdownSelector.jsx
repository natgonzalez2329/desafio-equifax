import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "./DropdownSelector.css";

const DropdownSelector = () => {
  const options = [
    { name: "Plugin 1", value: "sv" },
    { name: "Plugin 2", value: "en" },
    { name: "Plugin 3", value: "ch" },
    { name: "Plugin 4", value: "pr" },
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
    />
  );
};
export default DropdownSelector;
