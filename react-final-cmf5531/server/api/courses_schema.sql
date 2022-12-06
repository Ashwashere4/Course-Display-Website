DROP table if EXISTS college CASCADE;
DROP table if EXISTS department CASCADE;
DROP table if EXISTS courses CASCADE;

CREATE TABLE college (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);

CREATE TABLE department (
    id SERIAL PRIMARY KEY NOT NULL,
    college_id INT NOT NULL REFERENCES college(id),
    name VARCHAR(30)
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY NOT NULL,
    dept_id INT NOT NULL REFERENCES department(id),
    c_number VARCHAR(30),
    c_title varchar(30) not null,
    c_details VARCHAR(256) NOT NULL
);

INSERT INTO college(name)	
        VALUES ('GCCIS');
INSERT INTO college(name)	
        VALUES ('KGCOE');
INSERT INTO college(name)	
        VALUES ('PHYSICS AND ASTRONOMY');
		
INSERT INTO department(name, college_id)	
        VALUES ('Software Engineering', 1);
INSERT INTO department(name, college_id)	
        VALUES ('Computer Science', 1);
INSERT INTO department(name, college_id)	
        VALUES ('Computer Engineering', 2);
INSERT INTO department(name, college_id)	
        VALUES ('Physics', 3);

INSERT INTO courses(c_number, c_title, c_details, dept_id)	
        VALUES ('250', 'Personal SW eng', 'C and vi',  1),	
         ('331', 'Secure SW Eng', 'Fuzzer, Regex and Networks, oh my',  1),
         ('344', 'Web Engineering', 'More than web pages',  1),
         ('440', 'SW System Architecture', 'What is a service?',  1),
         ('250', 'Algorithms', 'actually a math course',  2),
         ('331', 'Operating Systems', 'our books have dinosaurs on them',  2),
         ('344', 'Hardware Programming With C', 'what debugger?',  3),
         ('440', 'Assembler', 'Using Stone Knives and Bearskins',  3),
         ('440', 'Physics 4', 'Life is Physics',  4);