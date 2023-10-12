CREATE DATABASE bookdb;

CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);

INSERT INTO book(id,name,description)
VALUES (1,nun2,horror movie);