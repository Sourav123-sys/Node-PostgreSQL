CREATE TABLE wizards(
    name character varying(255) ,
    power character varying(255) ,
);
CREATE TABLE elves(
    name character varying(255) ,
    speed real ,
);
CREATE TABLE hobbits(
    name character varying(255) ,
    personality character varying(255) ,
);


INSERT INTO wizards(name,power)
VALUES
("Gandalf","fireworks");
("Sauron","rings");
("Saruman","betrayal");

INSERT INTO elves(name,speed)
VALUES
("Legolas",10);
("Arwen",9);
("Elrond",5);


INSERT INTO hobbits(name,personality)
VALUES
("Frodo","careful");
("Sam","brave");
("Bilbo","greedy");