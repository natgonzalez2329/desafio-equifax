import yaml from 'js-yaml'
/* import { saveAs } from 'file-saver'; */

const YAMLtoJSON  = (yml) =>{
  fetch(yml)
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
    const obj = yaml.load(yamlAsString)
    const str = JSON.stringify(obj,null, 2);
    console.log(str)
    const str2 =JSON.parse(str)
    console.log("obj")
    console.log(str2[0]);
    /* const fileJSON = new Blob([str], {type : "application/json"});
    saveAs(fileJSON, "uno.json"); */
  }).catch(err => console.log('yaml err:', err))
}

/* YAMLtoJSON('../../home/user/config/calculateModels.yml');
YAMLtoJSON('../../home/user/config/dataEnricher.yml');
YAMLtoJSON('../../home/user/config/evaluateConditions.yml');
YAMLtoJSON('../../home/user/config/filterClients.yml');
YAMLtoJSON('../../home/user/config/inputHandler.yml');
YAMLtoJSON('../../home/user/config/keyFinder.yml');
YAMLtoJSON('../../home/user/config/outputHandler.yml'); */
export default YAMLtoJSON;
