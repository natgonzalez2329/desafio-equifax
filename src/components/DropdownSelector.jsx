import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "./DropdownSelector.css";

const DropdownSelector = () => {
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    { name: "Chino", value: "ch" },
    { name: "Portuges", value: "pr" },
    {
      items: [{ name: "Spanish", value: "es" }],
    },
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
