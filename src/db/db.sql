CREATE TABLE users (
    id        integer AUTO_INCREMENT,
    email     VARCHAR( 60 ),
    password  VARCHAR( 60 ),
    PRIMARY KEY ( id )
);

CREATE TABLE directors (
    id        integer AUTO_INCREMENT,
    lastName   VARCHAR( 20 ) NOT NULL,
    firstName  VARCHAR( 20 ) NOT NULL,
    age        INT,
    pays       VARCHAR( 30 ),
    PRIMARY KEY ( id )
);

CREATE TABLE scenarios (
    id        integer AUTO_INCREMENT,
    title      VARCHAR( 20 ) NOT NULL,
    description  TEXT NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE movies (
    id        integer AUTO_INCREMENT,
    title      VARCHAR( 20 ) NOT NULL,
    description  TEXT,
    duration INTEGER,
    genre VARCHAR(20),
    directorId INT NOT NULL,
    scenarioId INT NOT NULL,
    PRIMARY KEY ( id ),
    CONSTRAINT fk_directorId 
        FOREIGN KEY (directorId)
        REFERENCES directors(id),
    CONSTRAINT fk_scenarioId
        FOREIGN KEY (scenarioId)
        REFERENCES scenarios(id)
);


CREATE TABLE actors (
    id        integer AUTO_INCREMENT,
    lastName   VARCHAR( 20 ) NOT NULL,
    firstName  VARCHAR( 20 ) NOT NULL,
    age        INT,
    PRIMARY KEY ( id )
);

CREATE TABLE actings (
    movieId INT NOT NULL,
    actorId INT NOT NULL,
CONSTRAINT fk_actorId 
    FOREIGN KEY (actorId)
    REFERENCES actors(id),
 CONSTRAINT fk_movieId
    FOREIGN KEY (movieId)
    REFERENCES movies(id)
);