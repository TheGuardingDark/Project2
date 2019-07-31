DROP DATABASE IF EXISTS travelBuddy_db;

CREATE DATABASE travelBuddy_db;

USE travelBuddy_db;

CREATE TABLE customer
(
    id int NOT NULL AUTO_INCREMENT,
    customerName varchar(255) NOT NULL,
    userName varchar(255) NOT NULL,
    userPassword varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE flights
(
    id int NOT NULL AUTO_INCREMENT,
    customerName varchar(255) NOT NULL,
    airline varchar(255) NOT NULL,
    flightConNum varchar(255) NOT NULL,
    dateStartFly DATE,
    dateEndFly DATE,
    flightTime TIME,
    cancelledFly TINYINT DEFAULT FALSE,
    flightNotes TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE transport
(
    id int NOT NULL AUTO_INCREMENT,
    customerName varchar(255) NOT NULL,
    dealer varchar(255) NOT NULL,
    carConNum varchar(255) NOT NULL,
    dateStartTran DATE,
    dateEndTran DATE,
    cancelledTran TINYINT DEFAULT FALSE,
    transportNotes TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE lodging
(
    id int NOT NULL AUTO_INCREMENT,
    customerName varchar(255) NOT NULL,
    lodgingName varchar(255) NOT NULL,
    lodgingConNum varchar(255) NOT NULL,
    dateStartLodg DATE,
    dateEndLodg DATE,
    cancelledLodg TINYINT DEFAULT FALSE,
    lodgingNotes TEXT,
    PRIMARY KEY (id)
);
