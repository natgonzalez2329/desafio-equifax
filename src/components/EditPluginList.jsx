import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';
import "../styles/EditPluginList.css"

const EditPluginList = () => {

  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => {
    setModalNotSaved(true)
  };

  const arrayPluginList = [];

  return (
    <div>
      <ul>
        { arrayPluginList.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Selected plugins</h1>
        ): (
          <h1>Plugins</h1>
        )}
        </ul>
      <button className= "buttonCreate" onClick={() => createYaml()}>Create</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
    </div>
  )
}

export default EditPluginList
