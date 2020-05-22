CREATE DATABASE	api;

CREATE TABLE students(
	studentId SERIAL PRIMARY KEY,
	firstname VARCHAR(50),
	lastname VARCHAR(30)
);

CREATE TABLE grades(
	id SERIAL PRIMARY KEY,
	studentId integer,
	course VARCHAR(30),
	grade VARCHAR(2)
);

INSERT INTO students (firstname, lastname) VALUES ('Jane','Doe'),('Harry','Potter'),
('James','Bond'),('Eric','Clapton');

INSERT INTO grades (studentId, course, grade) VALUES 
('1','CS1010','A'),
('1','CHEM2010','B-'),
('1','HIST1010','C'),
('2','BIO1015','B-'),
('2','MUSIC','C+'),
('2','GEO1050','A'),
('3','MATH1080','D'),
('3','CS2010','B'),
('3','GEO1030','D'),
('4','CS4010','A-'),
('4','MATH1010','B+');
