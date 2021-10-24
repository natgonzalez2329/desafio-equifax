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

Equifax es una agencia multinacional que genera reportabilidad financiera de las personas y organizaciones. Es una compañía global de datos, analytics y tecnología que transforma conocimientos en información, para impulsar a clientes en la toma de mejores decisiones financieras, los cuales acuden a Equifax solicitando análisis financiero de sus respectivos clientes (ej. Un banco puede solicitar información de las personas que tienen servicios allí).

Hoy existe una gran cantidad de requerimientos de las empresas sobre sus clientes, por lo que es necesario la existencia de una plataforma web que permita reunir los datos de los requerimientos que necesiten y que los complemente con la información disponible por Equifax, y entregue una visualización de esta información.

## 2. Descripción general

Plataforma web en donde el usuario puede crear una nueva “orquestación” que permita seleccionar de una lista predeterminada, agregar uno o más adaptadores(archivos de metadata YAML), para así satisfacer la necesidad de apilar los requerimientos pertinentes al agregar/modificar sus valores de configuración, de acuerdo a las necesidades solicitadas por el cliente. Obteniendo finalmente la previsualización de la orquestación final y la opción de obtener el archivo en formato YAML al descargarlo.

## Consideraciones

Una orquestación de procesos Batch tiene distintas etapas o pasos. Cada uno de estos pasos, ejecuta un objeto conocido como “adaptador”. Al mismo tiempo, este adaptador es una clase Java que define la lógica de transformación de datos que se desee.

Los adaptadores podrían requerir una cantidad diferente de parámetros. Estos parámetros ayudan a la configuración de transformación que se requiere y están definidos en formato YAML. Los parámetros pueden ser: Key-value, List, Map.

El proceso declarado anteriormente entrega como resultado un archivo YAML, el cual contiene parámetros y configuración definida por el usuario.

## Diagrama representando el flujo completo del cliente

![diagrama-equifax](./src/assets/diagrama-equifax.jpeg)

## Ejemplo de la metadata YAML para un adaptador

![metadata](./src/assets/metadata.jpeg)

## 3. Perfil de usuario

La plataforma está destinada a desarrolladores de software o soporte TI de la empresa Equifax. Para optimizar el trabajo en reunir 
los datos de los requerimientos que necesiten y que los complemente con la información disponible por Equifax, y entregue una visualización 
de esta información, se toma en cuenta en el análisis del perfil varias características en la interacción del mismo con la plataforma, en donde se resalta, que la implementación del proceso de selección, modificación, eliminar, añadir o guardar la configuración de los adaptadores debe darse de forma simple e inmediata en una misma interfaz, el diseño debe estar basado en el estilo y paleta de colores de la plataforma oficial, ya que está será una extensión de la página. También se debe tomar en cuenta que el usuario pasa una cantidad considerable de tiempo frente al ordenador por lo que la interfaz debe ser amena y de fácil entendimiento a la vista, y que posee conocimiento sobre la información y formatos de archivos que se manejan, por lo que se emplearan manejos de términos acorde al ámbito.

## 4. Historia de usuario

#### [Historia de usuario 1] Miembro de soporte TI.

Yo como miembro de soporte TI quiero seleccionar adaptadores de una dorma sencilla, para visualizar y modificar los que necesito de forma rápida.

### Criterios de aceptación

* El usuario podrá acceder a las opciones de plugins a través de un dropdown o search.
* Al Clickear o seleccionar el plugin se añadirá a una lista por orden de selección.
* El usuario al clickear el plugin seleccionado en la lista, se desplegará una sección de los datos con sus respectivos campos para añadir o modificar la información.
* El usuario podrá guardar las modificaciones hechas en la configuración de cada plugin.
* El usuario tendrá la opción de cancelar cualquier modificación de datos del plugin..
* Al guardar los cambios, el usuario podrá visualizar un _check_, el cual indica que el plugin ha sido guardado.
* Se notificará al usuario que sus modificaciones han sido guardadas exitosamente con un mensaje emergente.
* Los plugins que han sido modificados pero no guardados se distinguirá por un _dot__ para su identificación.
* El usuario podrá eliminar de la lista cualquier plugin, si así lo desea, en donde al clickear el botón de eliminar, emergerá un mensaje de confirmación de dicha acción, a la cual podrá reafirmar o cancelar.

### Definición de terminado

* Transformar _data de adapters_ (YAML) a JSON.
* Diseño de 3 secciones.
* En la primera sección se ubica un dropdown/search, con el despliegue de las opciones de plugins, también al escribir deben aparecer las que coinciden la busqueda.
* En la segunda sección se ubica la lista de plugins dinámicamente ordenados de acuerdo a su selección.
* Los plugins seleccionados se identidicarán si están guardados o no, por un _check_ y un _dot_, respectivamente.
* La tercera sección se ubicará la información requerida de cada plugin con los campos para su modificación.
* Todos los campos son modificables excepto el _mainClass_.
* Las dependencias deben ser determinadas a través de un select, cuyas opciones sean los plugin que fueron seleccioandos en la lista, con una opción por default denominada _input_.
* Los campos deben ser validados de acuerdo al tipo de dato que se espera.
* Botón para eliminar que desplegará un modal con mensaje de confirmación para eliminar el plugin con botones de eliminar o cancelar.
* Botón de guardar modificaciones que al cumplir convalidaciones de campo, se despliegue modal con mensaje de guardado exitosamente.

#### [Historia de usuario 2] Desarrollador de software.

Yo como desarrollador de software quiero crear un archivo con los pluggings y poder visualizarlos para descargar el archivo como lo necesito.

### Criterios de aceptación

* El usuario podrá crear un archivo ("_orquestación_"), con los plugins seleccionados/modificados.
* Se confirmará que se hayan guardados todas la modificaciones para crear el archivo.
* Si algunas modificaciones no han sido guardadas, se desplegará un mensaje indicandole al usuario que hay plugins sin guardar.
* Al crearse el archivo, lo podrá previsualizar.
* Opcion a descargar archivo en formato YAML.

### Definición de terminado

* Obtener datos de campos por cada plugin.
* Ordenar por dependencias, partiendo de input.
* Transformar a formato YAML.
* Previsualización de orquestación.
* Botón para descargar archivo en formato YAML.

## 5. Prototipo y diseño

El diseño se baso en estilo minimalista, limpio y profesional utilizando paleta de colores que identifica y caracteriza a Equifax. En donde se puede observar un _header_ con el logo de la empresa Equifax

![colors](./src/assets/colors.jpeg)

## 6. Interfaz

## 7. Modo de usuario
(ii) Al elegir un adaptador se mostrará el archivo YAML en la UI, mostrando sus pares
llave-valor.

(iii) Luego, debemos permitir a la/el usuari@ agregar/modificar sus valores de
configuración y opción de añadir un siguiente adaptador.

(iv) Al final, además de mostrar en la UI la orquestación, deberá existir la opción de
descargar un archivo YAML con una lista de adaptadores seleccionados y configurados.

## 8. Tecnologías

* React.js.
* Javascript ES6.
* Bootstrap 5.

## 9. Enlace web