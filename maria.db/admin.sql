-- CREATE TABLE 
CREATE DATABASE Hacker;
-- CREATE USER 
CREATE USER admin IDENTIFIED BY PASSWORD '!i5W27+Fs';
-- Tout les privilèges sur la table Hacker
GRANT ALL PRIVILEGES ON 'Hacker'.* TO 'admin';
-- Admin délégué sur PhpMyAdmin
GRANT USAGE ON *.* TO 'admin'@'%' IDENTIFIED BY PASSWORD '!i5W27+Fs';
-- reload privileges
FLUSH PRIVILEGES;