import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "../styles/DropdownSelector.css";
import { nanoid } from "nanoid";

const DropdownSelector = ({ dataYamlJson, listPlugin, setListPlugin }) => {
  const options = dataYamlJson.map((optionsPlugins) => {
    const pluginsName = optionsPlugins.stepName;
    const pluginsId = optionsPlugins.id;
    const option = { name: pluginsName, value: pluginsId };
    return option;
  });

  const selectPlugin = (e) => {
    let dataPlugins = [];
    dataYamlJson.forEach((plugin) => {
      if (e === plugin.id) {
        const object = { ...plugin, uid: nanoid(5), checkSaved: false };
        dataPlugins.push(object);
        setListPlugin([...listPlugin, ...dataPlugins]);
      }
    });
  };

  return (
    <SelectSearch
      options={options}
      search
      filterOptions={fuzzySearch}
      placeholder="Select a plugin"
      onChange={(e) => selectPlugin(e)}
    />
  );
};

export default DropdownSelector;
