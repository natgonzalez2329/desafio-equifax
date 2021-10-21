import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';

const EditPluginList = () => {

  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => {
    setModalNotSaved(true)
  };

  const arrayPluginList = [];

  return (
    <div>
      <span>EditPluginList</span>
      <ul>
        { arrayPluginList.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin.</h1>
        ): (
          <h1>Plugins</h1>
        )}
        </ul>
      <button onClick={() => createYaml()}>CREATE</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
    </div>
  )
}

export default EditPluginList
