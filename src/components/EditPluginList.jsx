import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';
import "../styles/EditPluginList.css"


const EditPluginList = ({ listPlugin }) => {
  

  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => {
    setModalNotSaved(true)
  };

  return (
    <div>
      <div className="list-group-item m-2 overflow-auto text-white bgItems">
        { listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin</h1>
        ): (
        listPlugin.map((plugin) => ( <button className="buttonList" key={plugin.uid}>{plugin.stepName}</button>))
        )}
        </div>
      <button className= "buttonCreate" onClick={() => createYaml()}>Create</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
    </div>
  )
}

export default EditPluginList
