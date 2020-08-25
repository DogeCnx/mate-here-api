CREATE DATABASE IF NOT EXISTS `matehereDB`;

USE `matehereDB`;

DROP TABLE IF EXISTS `Haveposts`;
DROP TABLE IF EXISTS `Needposts`;
DROP TABLE IF EXISTS `Clients`;
DROP TABLE IF EXISTS `Accounts`;
DROP TABLE IF EXISTS `Rooms`;
DROP TABLE IF EXISTS `Centrals`;


CREATE TABLE `Accounts`(

    `id` INT(15) NOT NULL UNIQUE,
    `username` VARCHAR(15) NOT NULL UNIQUE,
    `password` VARCHAR(12) NOT NULL UNIQUE

    PRIMARY KEY (`id`)

) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Clients`(

    `id` INT(15) NOT NULL UNIQUE,
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

    PRIMARY KEY (`id`),
    CONSTRAINT `accounts_idfk_1` FOREIGN KEY (`accounts_id`) REFERENCES `Accounts`.`id`

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Haveposts`(

    `id` INT(15) NOT NULL UNIQUE,
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

    PRIMARY KEY (`id`),
    CONSTRAINT `clients_idfk_1` FOREIGN KEY (`clients_id`) REFERENCES `Clients`.`id`

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Needposts` (

    `id` INT(15) NOT NULL UNIQUE,
    `need_university_name` VARCHAR(100) NOT NULL,
    `clients_id` INT(15) NOT NULL UNIQUE,
    `need_type` VARCHAR(50) NOT NULL,
    `need_full_cost` INT(10) NOT NULL,
    `need_half_cost` INT(10) NOT NULL,
    `need_amount_of_mate` INT(2) NOT NULL,
    `need_location` VARCHAR(100) NOT NULL,
    `university_mate` VARCHAR(100) NOT NULL,
    `need_faculty` VARCHAR(30) NOT NULL,
    `need_faculty_mate` VARCHAR(30),
    `need_habit` VARCHAR(250) NOT NULL,
    `need_habit_mate` VARCHAR(250) NOT NULL,
    `need_routine` VARCHAR(250) NOT NULL,
    `need_like` VARCHAR(150) NOT NULL,
    `need_dislike` VARCHAR(150) NOT NULL,
    `need_other_information` VARCHAR(250)

    PRIMARY KEY (`id`),
    CONSTRAINT `clients_idfk_1` FOREIGN KEY (`clients_id`) REFERENCES `Clients`.`id`

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Rooms` (

    `haveposts_id` INT(15) NOT NULL UNIQUE,
    `needposts_id` INT(15) NOT NULL UNIQUE,
    `air_conditioner` VARCHAR(5) NOT NULL,
    `number_of_toilet` INT(3) NOT NULL,
    `number_of_bedroom` INT(3) NOT NULL,
    `pets` VARCHAR(5) NOT NULL,
    `smoking` VARCHAR(5) NOT NULL,
    `internet_wifi` VARCHAR(5) NOT NULL,
    `furniture` VARCHAR(5) NOT NULL,
    `water_heater` VARCHAR(5) NOT NULL


    PRIMARY KEY (`haveposts_id`),
    PRIMARY KEY (`needposts_id`),
    CONSTRAINT `haveposts_idfk_1` FOREIGN KEY (`haveposts_id`) REFERENCES `Haveposts`.`id`,
    CONSTRAINT `needposts_idfk_2` FOREIGN KEY (`needposts_id`) REFERENCES `Needposts`.`id`

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Centrals` (

    `haveposts_id` INT(15) NOT NULL UNIQUE,
    `needposts_id` INT(15) NOT NULL UNIQUE,
    `parking` VARCHAR(5) NOT NULL,
    `lift` VARCHAR(5) NOT NULL,
    `keycard` VARCHAR(5) NOT NULL,
    `security` VARCHAR(5) NOT NULL,
    `pool`VARCHAR(5) NOT NULL,
    `gym` VARCHAR(5) NOT NULL,
    `laundry` VARCHAR(5) NOT NULL


    PRIMARY KEY (`haveposts_id`),
    PRIMARY KEY (`needposts_id`),
    CONSTRAINT `haveposts_idfk_1` FOREIGN KEY (`haveposts_id`) REFERENCES `Haveposts`.`id`,
    CONSTRAINT `needposts_idfk_2` FOREIGN KEY (`needposts_id`) REFERENCES `Needposts`.`id`

)ENGINE=InnoDB DEFAULT CHARSET utf8mb4;