CREATE DATABASE IF NOT EXISTS `matehereDB`;

USE `matehereDB`;

CREATE TABLE `Accounts`(

    `id` BIGINT,
    `username` VARCHAR(15) NOT NULL UNIQUE,
    `password` VARCHAR(12) NOT NULL UNIQUE

    PRIMARY KEY ('id')

) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Clients`(

    `id` BIGINT NOT NULL UNIQUE,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `telephone_number` INT(10) NOT NULL,
    `line_id` VARCHAR(50) NOT NULL UNIQUE,
    `facebook_name` VARCHAR(50) NOT NULL,
    `date_of_birth` DATE(10) NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `proflie_picture` VARCHAR(250) NOT NULL,
    `accounts_id` VARCHAR(50) NOT NULL UNIQUE,

    PRIMARY KEY ('id'),
    CONSTRAINT 'accounts_idfk_1' FOREIGN KEY ('accounts_id') REFERENCES 'Accounts'.'id'

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Haveposts`(

    `id` BIGINT NOT NULL UNIQUE,
    `need_university_name` VARCHAR(100) NOT NULL,
    `clients_id` INT(15) NOT NULL UNIQUE,
    `type_room` VARCHAR(50) NOT NULL,
    `full_cost` INT(10) NOT NULL,
    `half_cost` INT(10) NOT NULL,
    `amount_of_mate` INT(2) NOT NULL,
    `location` VARCHAR(100) NOT NULL,
    `faculty` VARCHAR(30) NOT NULL,
    `faculty_mate` VARCHAR(30),
    `habit` VARCHAR(250) NOT NULL,
    `habit_mate` VARCHAR(250) NOT NULL,
    `routine` VARCHAR(250) NOT NULL,
    `routine_mate` VARCHAR(250) NOT NULL,
    `like_thing` VARCHAR(150) NOT NULL,
    `dislike` VARCHAR(150) NOT NULL,
    `other_information` VARCHAR(250)

    PRIMARY KEY ('id'),
    CONSTRAINT 'clients_idfk_1' FOREIGN KEY ('clients_id') REFERENCES 'Clients'.'id'

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;