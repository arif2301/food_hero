
DROP DATABASE IF EXISTS foodherodb;
CREATE DATABASE foodherodb

INSERT INTO UserData (type, name, email, password, streetAddress1, city, province, postalCode) 
VALUES
('Donor', 'FreshCo', 'john@freshco.ca', 'halfquarter', '410 Bathurst St', 'Toronto', 'ON', 'M5T 2S6' ),
('Recipient', 'Fort York Food Bank', 'joe@gmail.com', 'dimes', '380 Colleges St','Toronto', 'ON', 'M5T 1ST'),
('Donor', 'Metro', 'sara@metro.ca', 'quarter', '735 College St', 'Toronto', 'ON', 'M6G 1C5'),
('Recipient', 'Stop Community Food Center', 'mimi@bogus.com', 'joy', '1884 Davenport Rd', 'Toronto', 'ON', 'M6N 4Y4');

