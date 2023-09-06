DROP DATABASE IF EXISTS poll_db;
CREATE DATABASE poll_db;


-- CREATE TABLE user (
--   id integer auto_increment PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL UNIQUE,
--   password VARCHAR(255) NOT NULL CHECK (LENGTH(password) >= 8)
-- );

-- CREATE TABLE poll (
--   id integer auto_increment PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description VARCHAR(255),
--   user_id INTEGER REFERENCES users(id)
-- );

-- CREATE TABLE question (
--   id integer auto_increment PRIMARY KEY,
--   text VARCHAR(255) NOT NULL,
--   response1 VARCHAR(255),
--   response2 VARCHAR(255),
--   response3 VARCHAR(255),
--   response4 VARCHAR(255),
--   response5 VARCHAR(255),
--   poll_id INTEGER REFERENCES polls(id)
-- );

-- CREATE TABLE response (
--   id integer auto_increment PRIMARY KEY,
--   index_number INTEGER NOT NULL,
--   question_id INTEGER NOT NULL,
--   FOREIGN KEY (question_id) REFERENCES questions(id)
-- );