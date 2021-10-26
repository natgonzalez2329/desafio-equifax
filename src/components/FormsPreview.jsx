import React from "react";
import ConfigPluginModified from "./ConfigPluginModified";
import Orchestration from "./Orchestration";

const FormsPreview = ({
  pluginSelect,
  setPlugin,
  listPlugin,
  setListPlugin,
  orchestration,
  setOrchestration,
  preview,
}) => {
  return (
    <div>
      {preview ? (
        <ConfigPluginModified
          pluginSelect={pluginSelect}
          setPlugin={setPlugin}
          listPlugin={listPlugin}
          setListPlugin={setListPlugin}
          orchestration={orchestration}
          setOrchestration={setOrchestration}
        />
      ) : (
        <Orchestration orchestration={orchestration} />
      )}
    </div>
  );
};

export default FormsPreview;
