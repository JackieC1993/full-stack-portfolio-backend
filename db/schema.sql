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

CREATE TABLE reviews
(
  id SERIAL PRIMARY KEY,
  reviewer TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER,
  dimsums_id INTEGER REFERENCES dimsums(id) ON DELETE CASCADE
)

