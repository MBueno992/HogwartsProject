CREATE DATABASE Hogwarts;
USE Hogwarts;

CREATE TABLE alumnos(
idalumno int auto_increment primary key,
name varchar(30) not null,
lastName varchar(45) not null,
wizardName varchar (60), 
birthdate date,
house varchar(15)
); 

CREATE TABLE users(
idUser int auto_increment primary key,usersusersalumnos
userName varchar(45) not null,
email varchar(100) not null,
password varchar(1500) not null
); 

ALTER TABLE users ADD COLUMN fk_alumno int;
ALTER TABLE users ADD FOREIGN KEY (fk_alumno) REFERENCES alumnos(idalumno);

ALTER TABLE `hogwarts`.`alumnos` 
DROP COLUMN `lastName`,
ADD COLUMN `image` VARCHAR(1500) NULL AFTER `house`,
CHANGE COLUMN `house` `house` VARCHAR(15) NOT NULL ;
