
DROP DATABASE IF EXISTS foodherodb;
CREATE DATABASE foodherodb;

USE foodherodb;
CREATE TABLE registration_donor(
  id INT NOT NULL AUTO_INCREMENT,
  name1 VARCHAR(100) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(10) default 0,
  location VARCHAR(30) default 0,
  PRIMARY KEY (id)
  );
