CREATE TABLE tasks (
id SERIAL,
name varchar(50)
);
DROP TABLE "tasks";
CREATE TABLE tasks (
id SERIAL,
name VARCHAR(100)
);

INSERT INTO "tasks"
("name")
VALUES
('serenade my cats'),
('comtemplate existence'),
('eat cheese');