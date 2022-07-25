# Reto-Tecnico-SofkaU
RETO TECNICO TRAINING DESARROLLO DE SOFTWARE

Mi nombre es Hermes Guerrero y me gustaria ser parte del programa de entrenamiento de SofkaU para convertirme en un desarrollador Full-Stack. Estas son las instrucciones para usar este programa sin mayores complicaciones.

Descripcion del programa:

El programa consta principalmente de unos datos de clasificacion de naves espaciales de acuerdo al articulo (https://moaramore.com/2016/05/14/clasificacion-de-las-naves-espaciales/). Este articulo clasifica a las naves espaciales en 3 principales categorias:

    - Transportadores: La parte del cohete que impulsa a la nave fuera de la atmosfera terrestre.
    - Tripulada: Naves adecuadas para el transporte de humanos.
    - No-tripuladas: Naves principalmente diseñadas para estudiar el planeta Tierra asi como otros planetas.

El programa permite al usuario consultar en una pequeña base de datos acerca de algunos ejemplos de estas naves espaciales y sus caracteristicas.
Si asi lo desea, el usuario puede complementar esta base de datos con su propia informacion; teniendo en cuenta las caracteristicas que contiene la base de datos.

Toda la informacion es suministrada y presentada mediante la consola de Node.JS.

Para iniciar el programa se debe ejecutar el siguiente comando:

$ node main.js

IMPORTANTE:

Este programa almacena los datos en una base de datos SQL. Por lo que es necesario instalar las dependecias correspondientes.

$ npm install mysql

A continuacion, el usuario debe crear una base de datos en la cual se guardaran los datos del programa.

Luego de esto, es necesario abrir y editar el archivo "db.js".

En este archivo se deben editar los siguientes campos con la informacion correspondiente:
    host: "localhost",                //Editar host
    user: "hermes",                   //Editar usuario
    password: "1234",                 //Editar contraseña
    database: "SofkaU"                //Editar nombre base de datos (La que crea el usuario)




