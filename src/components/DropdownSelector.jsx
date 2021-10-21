import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "./DropdownSelector.css";

const DropdownSelector = () => {
  const options = [
<<<<<<< HEAD
    { name: "Plugin 1", value: "sv" },
    { name: "Plugin 2", value: "en" },
    { name: "Plugin 3", value: "ch" },
    { name: "Plugin 4", value: "pr" },
=======
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    { name: "Chino", value: "ch" },
    { name: "Portuges", value: "pr" },
>>>>>>> 92a9acb4b875942d44aa22fb9b0ea48c197d1693
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
