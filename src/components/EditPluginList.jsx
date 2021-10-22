import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';


const EditPluginList = ({ listPlugin }) => {
  

  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => {
    setModalNotSaved(true)
  };

  return (
    <div>
      <span>EditPluginList</span>
      <ul>
        { listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin.</h1>
        ): (
        listPlugin.map((plugin) => ( <button key={plugin.uid}>{plugin.id}</button>))
        )}
        </ul>
      <button onClick={() => createYaml()}>CREATE</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
    </div>
  )
}

export default EditPluginList
