DROP DATABASE IF EXISTS dimsums_dev;
CREATE DATABASE dimsums_dev; 
\c dimsums_dev;

CREATE TABLE dimsums
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price FLOAT NOT NULL,
    ingredient TEXT,
    description TEXT,
    quantity VARCHAR,
    savory BOOLEAN,
    size TEXT
);

