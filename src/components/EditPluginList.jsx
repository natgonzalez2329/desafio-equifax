import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';
import ModalConfigPluggin from './ModalConfigPluggin';
import Orchestration from './Orchestration';


const EditPluginList = ({ listPlugin, setListPlugin, filterPluggin, orchestration}) => {

  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => setModalNotSaved(true);

  return (
    <div className="listColEdit">
      <h4>Plugin List</h4>
      <div className="list-group-item m-2 text-white bgItems">
        { listPlugin.length === 0 ? (
          <h3 className="text-center fst-italic text-white-50 m-4 p-3" >+ Add a new plugin</h3>
        ): (
        <ModalConfigPluggin className="listColEdit tablink" listPlugin={listPlugin} setListPlugin={setListPlugin} filterPluggin={filterPluggin} checkSaved={checkSaved} />
        )}
        </ul>
      <button onClick={() => createYaml()}>CREATE</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
      <Orchestration orchestration={orchestration} />
    </div>
  )
}

export default EditPluginList
