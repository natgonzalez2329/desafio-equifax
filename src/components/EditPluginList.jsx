import React from 'react';
import ModalConfigPluggin from './ModalConfigPluggin';

const EditPluginList = ({ listPlugin, setListPlugin, filterPluggin, setPlugin, setOrchestration, setPreview }) => {

  const newOrchestration = () => {
    setListPlugin([]);
    setPlugin(0);
    setOrchestration([]);
    setPreview(true);
  };

  const createYaml = () => {
    setPreview(false);
  };

  return (
    <div>
      <span>EditPluginList</span>
      <button onClick={() => newOrchestration()}>New orchestration</button>
      <ul>
        { listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin.</h1>
        ): (
        <ModalConfigPluggin listPlugin={listPlugin} setListPlugin={setListPlugin} filterPluggin={filterPluggin} />
        )}
        </ul>
      <button onClick={() => createYaml()}>CREATE</button>
    </div>
  )
}

export default EditPluginList
