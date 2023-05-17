# Youtube-chibi

## GUIA DE USO DE LA PÁGINA.

![Logo Youtube](./img/youtube.png)

## Buscar video:

**Paso 1:** Para realizar una busqueda debes dirigirte a la parte superior de la página y escribir el nombre de tu video en la caja de texto **(input)**.
**Paso 2:** Una vez escrito eso, debes presionar el botón de buscar que se encuentra justo al lado derecho del input.
**Paso 3:** Después de una corta espera podrás visualizar el video deseado, comentarios, detalles del canal, descripción del video y además ver también los video relacionados y recomendados en la parte inferior de la página web.

![Home page Youtube Chibi](./img/Screenshot%20from%202023-05-17%2014-18-54.png)

##Caracteristicas de la página:
**1:**La principal caracteristica es el **RESPONSIVE** de la página,la cual la hace adaptable a cualquier pantalla.
**2:**Luego tenemos una paleta de colores lo más similar posible a la página oficial de YOUTUBE.
**3:**Los comentarios están limitados a solo visualizarse 3 de todos ellos.

## Explicación del código:

## Módulo MAIN.JS

**Función main:**
Esta función main realiza la obtención de los datos ingresados por el usuario en el input, además de encargarse de enviarlos a la función GET.
**Función getVideos:**
Esta es la encargada de las peticiones tipo _FETCH_ a la API de Youtube, además de proveernos los datos necesarios para otras busquedas en la misma API.

## Módulo RENDER.JS

**Función renderVideo**
Aquella encargada de recibir los datos obtenidos en la función _getVideos_ y renderizar esos datos en la página, asi como también mostrar el video obtenido.

_Sección del video principal_
Para el video principal solo mostramos aquel en la primera posición de la busqueda e imprimimos sus datos y el video.

_Sección recomendados_
Para la sección de recomendados recorremos usando un _FOREACH_ todo el array de videos obtenidos y los renderizamos en la parte inferior de la página.

_Sección comentarios_
Para esta sección se utilizó el ID del video principal obtenido en el **getVideos** para realizar otro _FETCH_ encargado de buscar los comentarios del video, para luego ser renderizados unicamente los primeros 3 datos hallados.

## ¡ESO ES TODO!
