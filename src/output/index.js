/*const yaml = require('js-yaml');
const fs   = require('fs');
const YAML = require('yaml');*/


/*import yaml from "js-yaml"
import fs from "fs"
import YAML from "yaml"
// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('../calculateModels.yml', 'utf8'));
  //const doc = fs.readFileSync('file.txt','utf8');
  console.log(typeof(doc));
} catch (e) {
  console.log(e);
}

var stream = fs.createWriteStream("nuevo2.yml");
stream.once('open', function(fd) {
  stream.write("Primera línea\n");
  stream.write("Segunda línea\n");
  stream.end();
});



const jsonObject = {
    version: "1.0.0",
    dependencies: {
        yaml: "^1.10.0"
    },
    package: {
        exclude: [ ".idea/**", ".gitignore" ]
    }
}

const doc = new YAML.Document();
doc.contents = jsonObject;

console.log(doc.toString());

const stre = fs.createWriteStream("nuevo4.yml");
stre.once('open', function(fd) {
    stre.write(doc.toString());
  });*/

/*function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'archivo.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
                'bubbles': true,
                'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerDatos() {
    return {
        nombre: document.getElementById('textNombre').value,
        telefono: document.getElementById('textTelefono').value,
        fecha: (new Date()).toLocaleDateString()
    };
};

//Función de ayuda: "escapa" las entidades XML necesarias
//para los valores (y atributos) del archivo XML
function escaparXML(cadena) {
    if (typeof cadena !== 'string') {
        return '';
    };
    cadena = cadena.replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;');
    return cadena;
};

//Genera un objeto Blob con los datos en un archivo TXT
function generarTexto(datos) {
    var texto = [];
    texto.push('Datos Personales:\n');
    texto.push('Nombre: ');
    texto.push(datos.nombre);
    texto.push('\n');
    texto.push('Teléfono: ');
    texto.push(datos.telefono);
    texto.push('\n');
    texto.push('Fecha: ');
    texto.push(datos.fecha);
    texto.push('\n');
    //El contructor de Blob requiere un Array en el primer parámetro
    //así que no es necesario usar toString. el segundo parámetro
    //es el tipo MIME del archivo
    return new Blob(texto, {
        type: 'text/plain'
    });
};


//Genera un objeto Blob con los datos en un archivo XML
function generarXml(datos) {
    var texto = [];
    texto.push('<?xml version="1.0" encoding="UTF-8" ?>\n');
    texto.push('<datos>\n');
    texto.push('\t<nombre>');
    texto.push(escaparXML(datos.nombre));
    texto.push('</nombre>\n');
    texto.push('\t<telefono>');
    texto.push(escaparXML(datos.telefono));
    texto.push('</telefono>\n');
    texto.push('\t<fecha>');
    texto.push(escaparXML(datos.fecha));
    texto.push('</fecha>\n');
    texto.push('</datos>');
    //No olvidemos especificar el tipo MIME correcto :)
    return new Blob(texto, {
        type: 'application/xml'
    });
};

document.getElementById('boton-xml').addEventListener('click', function () {
    var datos = obtenerDatos();
    descargarArchivo(generarXml(datos), 'archivo.xml');
}, false);

document.getElementById('boton-txt').addEventListener('click', function () {
    var datos = obtenerDatos();
    descargarArchivo(generarTexto(datos), 'archivo.txt');
}, false);


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
  // Generate download of hello.txt file with some content
  var text = document.getElementById("text-val").value;
  var filename = "hello.txt";
  
  download(filename, text);
}, false);
*/

/*fetch('./config/calculateModels.yml')
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
    console.log('yaml res:', yamlAsString)
    const str = JSON.stringify (yamlAsString);
    console.log(str);
  })
  
  .catch(err => console.log('yaml err:', err))*/

  function YAMLtoJSON (yamlStr) { 
	//var obj = YAML.parse (yamlStr);
    const rat = YAML.load(yamlStr)
    console.log(rat);
    //console.log(obj) 
	var jsonStr = JSON.stringify (rat); 
    console.log(jsonStr)
	return jsonStr; 
} 
  
YAMLtoJSON('./config/calculateModels.yml');