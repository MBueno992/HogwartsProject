CREATE DATABASE Hogwarts;
USE Hogwarts;

CREATE TABLE wizards(
idalumno int auto_increment primary key,
name varchar(30) not null,
wizardName varchar (60), 
birthdate date,
house varchar(15),
image longtext
fk_idUser INT
FOREIGN KEY (fk_idUser) REFERENCES users(idUser)
); 

CREATE TABLE users(
idUser int auto_increment primary key,usersusersalumnos
email varchar(100) not null,
hashed_password varchar(1500) not null
); 

