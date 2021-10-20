# Desafío Interfaz de adaptadores


## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Descripción general](#2-descripción-general)
* [3. Perfil de usuario](#3-perfil-de-usuario)
* [4. Historia de usuario](#4-historia-de-usuario)
* [5. Prototipo y diseño](#5-prototipo-y-diseño)
* [6. Interfaz](#6-interfaz)
* [7. Modo de usuario](#7-modo-de-usuario)
* [8. Tecnologías](#8-tecnologías)
* [9. Enlace web](#9-enlace-web)

***

## 1. Preámbulo

## Antecedentes

Equifax es una agencia multinacional que genera reportabilidad financiera de las personas y organizaciones. Es una compañía global de datos, analytics y tecnología que transforma conocimientos en información para impulsar que nuestros clientes tomen mejores decisiones financieras.

Nuestros clientes se acercan a nosotros pidiendo un análisis financiero de sus respectivos clientes (ej. Un banco puede solicitar información de las personas que tienen servicios allí). Hoy existe una gran cantidad de requerimientos de las empresas sobre sus clientes y necesitamos encontrar la manera de generar una interfaz web que permita reunir los datos de los requerimientos de nuestros clientes, los complemente con la información disponible por Equifax, y entregue una visualización de esta información.

## 2. Descripción general

## Detalles técnicos

Una orquestación de procesos Batch tiene distintas etapas o pasos. Cada uno de estos
pasos, ejecuta un objeto conocido como “adaptador”. Al mismo tiempo, este adaptador es
una clase Java que define la lógica de transformación de datos que se desee.

Los adaptadores podrían requerir una cantidad diferente de parámetros. Estos parámetros
ayudan a la configuración de transformación que se requiere y están definidos en formato YAML. Los parámetros pueden ser: Key-value, List, Map.

El proceso declarado anteriormente entrega como resultado un archivo YAML, el cual
contiene parámetros y configuración definida por el usuario.

## Consideraciones

Se les entregará una lista de adaptadores (archivos de metadata YAML) disponibles para
usar. Estos originalmente provienen del Backend (ver Figura 1.). A ustedes se les entregará en un formato de texto.

## Reto

Les pedimos que construyan una plataforma en la cual el usuario pueda:

(i) Crear una nueva “orquestación” que permita agregar uno o más adaptadores.

(ii) Al elegir un adaptador se mostrará el archivo YAML en la UI, mostrando sus pares
llave-valor.

(iii) Luego, debemos permitir a la/el usuari@ agregar/modificar sus valores de
configuración y opción de añadir un siguiente adaptador.

(iv) Al final, además de mostrar en la UI la orquestación, deberá existir la opción de
descargar un archivo YAML con una lista de adaptadores seleccionados y configurados.

Tomar en cuenta:

● Esta solución debe ser desarrollada en React

● Se les enviará la siguiente información:

*  Archivos con los adaptadores con sus respectivos pares llave-valor
*  Archivos de ejemplo de las salida
*  Nombre de adaptadores

Puedes encontrar los archivos en [esta carpeta](https://drive.google.com/drive/folders/1ykUmJ414dKudzT5QmCrweA2y_muwUU4m) que hemos preparado para ustedes!

## Diagrama representando el flujo completo del cliente

![diagrama-equifax](./src/assets/diagrama-equifax.jpeg)

*Esta es una imagen de referencia del proceso completo entre Back y Front, ustedes ya contarán con la información
que viene del BackEnd y solo se deben enfocar en el Front.

Ejemplos:

Ejemplo de cada elemento adaptador & configuración:

[
Nombre: “com.company.namespace.adapterName”,
Configuración: “<configuración_del_adaptador>”
]

## Ejemplo de la metadata YAML para un adaptador

![metadata](./src/assets/metadata.jpeg)

## Preguntas & Respuestas

● ¿Cuál es el usuario final al que está destinada esta plataforma?
○ Usuario tipo desarrollador de software o soporte TI

● ¿La UI debe permitir la búsqueda/actualización de una orquestación existente?
○ No

● ¿Debe implementarse algún mecanismo para que los usuarios solo tengan acceso a orquestaciones creadas por ellos mismos?
○ No

● ¿Debe almacenarse alguna información en una base de datos?
○ No

● ¿Cómo se define orden y secuencia entre adaptadores?
○ Por dependencias declaradas en cada adaptador

● ¿Un adaptador podría no tener parámetros a configurar?
○ No

● El archivo YAML resultante de la creación, ¿se descarga?, ¿se envía al Backend?
○ Como parte del reto, se debe visualizar en la UI y entregar la opción de
exportarlo como archivo YAML y descargarlo al disco local

## 3. Perfil de usuario
Usuario tipo desarrollador de software o soporte TI.

## 4. Historia de usuario

#### [Historia de usuario 1] Miembro de soporte TI.

Yo como miembro de soporte TI quiero seleccionar adaptadores de una dorma sencilla para obtenerlo de forma rápida y poder visualizar solo los que necesito.

#### [Historia de usuario 2] Desarrollador de software.

Yo como desarrollador  de software quiero modificar los adaptadores para descargar el archivo como lo necesito.

## 5. Prototipo y diseño

Basar diseño en estilo miinimalista, limpio y profesional utilizando paleta de colores que identifica y caracteriza a Equifax.

## 6. Interfaz

## 7. Modo de usuario

## 8. Tecnologías

* React.js.
* Javascript ES6.
* Bootstrap 5.

## 9. Enlace web