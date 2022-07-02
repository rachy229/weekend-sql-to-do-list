CREATE TABLE tasks (
id SERIAL,
name varchar(50),
status varchar(10)
);

INSERT INTO "tasks"
("name", "status")
VALUES
('serenade my cats', 'false'),
('comtemplate existence', 'false'),
('eat cheese', 'false');