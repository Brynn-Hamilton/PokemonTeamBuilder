create database pokemontrainer;
use pokemontrainer;

CREATE TABLE type (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE ability (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (50),
type_id INT,
FOREIGN KEY (type_id) REFERENCES type(id),
damage INT,[
PRIMARY KEY (id)
);

CREATE TABLE damagemodifier(
attacker INT,
FOREIGN KEY (attacker) REFERENCES type(id),
defender INT,
FOREIGN KEY (defender) REFERENCES type(id),
damagemodifier DECIMAL
);

CREATE TABLE trainer(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30),
    email VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE pokemon (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    generation INT,
    height INT,
    weight INT,
    ability_id INT,
    FOREIGN KEY (ability_id) REFERENCES ability(id),
    type1_id INT,
    FOREIGN KEY (type1_id) REFERENCES type(id),
    type2_id INT,
    FOREIGN KEY (type2_id) REFERENCES type(id),
    hp INT,
    attack INT,
    defense INT,
    special_attack INT,
    special_defense INT,
    speed INT,
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

CREATE TABLE game(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (50),
PRIMARY KEY (id)
);

CREATE TABLE pokemoningame(
pokemon_id INT,
FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
game_id INT,
FOREIGN KEY (game_id) REFERENCES game(id)
);





