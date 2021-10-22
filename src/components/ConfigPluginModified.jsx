import React from 'react'

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

const ConfigPluginModified = () => {

  const arrayPluginsModified = [1,2,4];

  return (
    <div>
      <span>ConfigPluginModified</span>
      <ul>
        { arrayPluginsModified.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Select and modify plugins</h1>
        ): (
          <div>
          <h1>Pluggins</h1>
          <NumberList numbers={arrayPluginsModified}/>
          </div>
        )}
        </ul>
    </div>
  )
}

export default ConfigPluginModified
