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

Una orquestación de procesos Batch tiene distintas etapas o pasos. Cada uno de estos
pasos, ejecuta un objeto conocido como “adaptador”. Al mismo tiempo, este adaptador es
una clase Java que define la lógica de transformación de datos que se desee.

Los adaptadores podrían requerir una cantidad diferente de parámetros. Estos parámetros
ayudan a la configuración de transformación que se requiere y están definidos en formato YAML. Los parámetros pueden ser: Key-value, List, Map.

El proceso declarado anteriormente entrega como resultado un archivo YAML, el cual
contiene parámetros y configuración definida por el usuario.

## Diagrama representando el flujo completo del cliente

![diagrama-equifax](./src/assets/diagrama-equifax.jpeg)

## Ejemplo de la metadata YAML para un adaptador

![metadata](./src/assets/metadata.jpeg)

## 3. Perfil de usuario

La plataforma está destinada a desarrolladores de software o soporte TI de la empresa Equifax,

## 4. Historia de usuario

#### [Historia de usuario 1] Miembro de soporte TI.

Yo como miembro de soporte TI quiero seleccionar adaptadores de una dorma sencilla para obtenerlo de forma rápida y poder visualizar solo los que necesito.

#### [Historia de usuario 2] Desarrollador de software.

Yo como desarrollador  de software quiero modificar los adaptadores para descargar el archivo como lo necesito.

## 5. Prototipo y diseño

Basar diseño en estilo miinimalista, limpio y profesional utilizando paleta de colores que identifica y caracteriza a Equifax.

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