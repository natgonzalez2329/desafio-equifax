import React, { useState } from 'react';
import ModalConfigPluggin from './ModalConfigPluggin';
import ModalNewFile from '../elements/ModalNewFile'
import '../styles/EditPluginList.css';

const EditPluginList = ({
  listPlugin,
  setListPlugin,
  filterPluggin,
  setPlugin,
  setOrchestration,
  setPreview,
}) => {

  const [modalModalNewFile, setModalNewFile] = useState(false);

  const openModalNewFile = () => {
    setModalNewFile(true);
  };


  const createYaml = () => {
    setPreview(false);
  };

  return (
    <div className="listColEdit mt-3 mb-3">
      <h4>Plugin List</h4>
      <button className="btnNewOrch" onClick={() => openModalNewFile()}>
        + new file
      </button>
      {modalModalNewFile && <ModalNewFile closeModal={setModalNewFile} setListPlugin={setListPlugin} setPlugin={setPlugin} setOrchestration={setOrchestration} setPreview={setPreview} />}
      <div className="list-group-item m-2 text-white bgItems">
        {listPlugin.length === 0 ? (
          <h3 className="text-center fst-italic text-white-50 m-4 p-3">
            Add a new plugin.
          </h3>
        ) : (
          <ModalConfigPluggin
            className="listColEdit tablink"
            listPlugin={listPlugin}
            setListPlugin={setListPlugin}
            filterPluggin={filterPluggin}
          />
        )}
      </div>
      <button className="buttonCreate" onClick={() => createYaml()}>
        CREATE
      </button>
    </div>
  );
};

export default EditPluginList;
