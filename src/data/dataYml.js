import yaml from 'js-yaml';

let data = [];
const YAMLtoJSON  = (yml) =>{
  fetch(yml)
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
    const obj = yaml.load(yamlAsString);
    const str = JSON.stringify(obj,null, 2);
    const str2 =JSON.parse(str);
    data.push(str2[0]);
  }).catch(err => console.log('yaml err:', err))
}

YAMLtoJSON('../../home/user/config/calculateModels.yml');
YAMLtoJSON('../../home/user/config/dataEnricher.yml');
YAMLtoJSON('../../home/user/config/evaluateConditions.yml');
YAMLtoJSON('../../home/user/config/filterClients.yml');
YAMLtoJSON('../../home/user/config/inputHandler.yml');
YAMLtoJSON('../../home/user/config/keyFinder.yml');
YAMLtoJSON('../../home/user/config/outputHandler.yml');

export { data };
