import React from 'react'
//import YAML from 'yamljs'
//import yaml from 'js-yaml'
//import hola from '../config/calculateModels'

/*const YAMLtoJSON = (yamlStr)=>{ 
  const rat = yamlStr.blob().text();
  const nativeObject = yaml.load(rat)
  console.log('sss',nativeObject)
  /*console.log(rat); 
	const jsonStr = JSON.stringify (rat); 
    console.log(jsonStr)*/
	/*return nativeObject; 
}*/
/*const holi = YAML.load('./config/calculateModels.yml')
console.log(holi)*/
//const cat=YAMLtoJSON('./data/calculateModels.yml');
//console.log(cat);


// Get document, or throw exception on error
/*try {
  const doc = yaml.load(fs.readFileSync('./config/calculateModels.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}*/

/*const yamlStr = `
swagger: 3.0
openapi: 3.0.0
schemes:
  - http
  - https
host: petstore.swagger.io
basePath: /v2
info:
  description: |
    This is a sample server Petstore server.
    You can find out more about Swagger at
    [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
    For this sample, you can use the api key special-key to test the authorization filters.
    # Introduction
    This API is documented in **OpenAPI format** and is based on
    [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.
    It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)
    tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard
    OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).
    # OpenAPI Specification
    This API is documented in **OpenAPI format** and is based on
    [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.
    It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)
    tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard
    OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).
    # Cross-Origin Resource Sharing
    This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
    And that allows cross-domain communication from the browser.
    All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.
    # Authentication
    Petstore offers two forms of authentication:
      - API Key
      - OAuth2
    OAuth2 - an open protocol to allow secure authorization in a simple
    and standard method from web, mobile and desktop applications.
    <!-- ReDoc-Inject: <security-definitions> -->
  version: 1.0.0
  title: Swagger Petstore
  termsOfService: 'http://swagger.io/terms/'
  contact:
    email: apiteam@swagger.io
    url: https://github.com/Redocly/redoc
  x-logo:
    url: 'https://redocly.github.io/redoc/petstore-logo.png'
    altText: Petstore logo
  license:
    name: Apache 2.0
    url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
externalDocs:
  description: Find out how to create Github repo for your OpenAPI spec.
  url: 'https://github.com/Rebilly/generator-openapi-repo'
`*/
/*const nativeObject = yaml.load(yamlStr)
console.log('sss',nativeObject)*/

/*fetch('./data/calculateModels.yml')
  .then(blob => console.log(blob.text()))
  .then(yamlAsString => {
    //const gatis = yaml.load(yamlAsString)
    //const str = JSON.stringify (gatis);
    console.log(yamlAsString);
  })*/

const ConfigPluginModified = () => {
  return (
    <div>
      <span>ConfigPluginModified</span>
    </div>
  )
}

export default ConfigPluginModified
