create database pokemontrainer;
use pokemontrainer;

CREATE TABLE trainer(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30),
    email VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE team (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (50),
trainer_id INT,
FOREIGN KEY (trainer_id) REFERENCES trainer(id), 
PRIMARY KEY (id)
);

CREATE TABLE pokemonteam(
team_id INT,
FOREIGN KEY (team_id) REFERENCES team(id), 
pokemon_id INT,
move_id INT
);






