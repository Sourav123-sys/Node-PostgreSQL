CREATE DATABASE bookdb;

CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);

INSERT INTO book(id,name,description)
VALUES (1,nun2,horror movie);

SELECT * FROM book

SELECT * FROM book WHERE id = 1
DELETE  FROM book WHERE id = 1
UPDATE  book SET name ="w" description =" y" WHERE id = 1