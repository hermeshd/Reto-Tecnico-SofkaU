# SofkaU Technical Challenge - Software Development
## _Sofka Space Station_

Simple inventory management program created with Node.js and MySQL. It is based on [this](https://moaramore.com/2016/05/14/clasificacion-de-las-naves-espaciales/) article and it allows the user to either search for a specific spacecraft based on its properties or add new data of their own to further populate the database.

_**Program interface is written in Spanish****_

## Table of contents

* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [Using the program](#using-the-program)
* [Things to keep in mind](#things-to-keep-in-mind)
* [License](#license)

## Features

- Interaction with a SQL database that allows the user to read or add new data
- The program will run as long as the user wants it to run. No need to launch the program multiple times in order to keep adding data
- Data results are presented in a nice and organized table to help user readability
- Nice and simple console interface to allow user input

## Technologies

This program was created using:

- [Node.js](https://nodejs.org/en/) - Evented I/O for the backend
- [MySQL](https://www.mysql.com/) - Relational database management system

## Setup

Since this program was made in Ubuntu 20.04, this setup process will indicate the instructions to run this program using Ubuntu.

Installing Node.js:

```sh
$ sudo apt update
$ sudo apt install nodejs
```
Installing npm, the Node.js package manager:

```sh
$ sudo apt install npm
$ npm install
```

Installing MySQL:

```sh
$ sudo apt update
$ sudo apt install mysql-server
$ sudo systemctl start mysql.service
```

After installing MySQL, it is needed to configure it. You can do it following [these instructions.](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

Since the program uses a table from a local database, it is necessary to let the program know things such as the `host`, `user`, `password` and `database` name.

The user can edit these values opening the _**db.js**_ file inside the program's folder. Inside this file, you will find something like this:

```sh
import mysql from 'mysql2';
const pool = mysql.createConnection({
    host: "localhost",      //Edit host
    user: "hermes",         //Edit user
    password: "1234",       //Edit password
    database: "SofkaU"      //Edit database
});
```

Just edit accordingly and everything should work just fine (Make sure that the username, password and database name match the ones you created).

## Using the program

Now that we have everything set up, it is time to launch the program.

To launch the program we need to open a terminal inside the folder that contains the program and type:

```sh
$ node main.js
```

The program works by navigating through some menus and filling out the desired data. Much like those automated phone calls that asks you _Please press 1 to do something._

The first thing that pops up is a welcome message in which we press `ENTER` and the first menu will appear:

<sub><sup>_(Sometimes when too much times passes between the Welcome message and the user pressing ENTER, it crashes due to a timeout error, this is pending fixing but the way to overcome this error is to just start the program and **quickly** press **ENTER**)_

```sh
Que accion desea realizar?: 
1. Agregar datos 
2. Buscar datos 
3. Ver datos actuales 
4. Salir del programa
```

This is an example of one of the menus found in the program, I will let you find out the rest! ;)

# Things to keep in mind

This is quite a simple program but one of which I'm proud of. I am _not_ a professional software engineer, but I'm hoping one day I will be, since this is really a passion of mine and I enjoy doing little projects like this on my free time.

Maybe one day I will come back to this project and make it 100x times better, adding a GUI, maybe tweaking some things about the database, added functionality... Who knows... _Wink wink ;)_


# License

You are free to use this program as you like.
This project is licensed under the terms of the [MIT](https://github.com/IgorAntun/node-chat/blob/master/LICENSE) license.


















