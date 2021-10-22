import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';

const EditPluginList = () => {

  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => {
    setModalNotSaved(true)
  };

  function ListItem(props) {
    // Correcto! No hay necesidad de especificar la key aquí:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correcto! La key debería ser especificada dentro del array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  const arrayPluginList = [1,2,3];

  return (
    <div>
      <span>EditPluginList</span>
      <ul>
        { arrayPluginList.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin.</h1>
        ): (
          <NumberList numbers={arrayPluginList}/>
        )}
        </ul>
      <button onClick={() => createYaml()}>CREATE</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
    </div>
  )
}

export default EditPluginList
