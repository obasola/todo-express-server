-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MyChores
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `todo` ;

-- -----------------------------------------------------
-- Schema MyChores
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MyChores` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `MyChores` ;

-- -----------------------------------------------------
-- Table `MyChores`.`Todo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyChores`.`Todo` (
  `id` INT auto_increment,
  `title` VARCHAR(75) NOT NULL,
  `description` TINYTEXT NOT NULL,
  `active` TINYINT default(0),
  `completed` TINYINT default(0),
  `deleted` TINYINT default(0),
  `date_created` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyChores`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyChores`.`Comment` (
  `id` INT auto_increment,
  `title` VARCHAR(75) NOT NULL,
  `content` VARCHAR(2000) NOT NULL,
  `datePlaced` DATETIME NULL DEFAULT NULL,
  `todo_id` INT NOT NULL,
  `active` TINYINT default(0),
  `deleted` TINYINT default(0),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_comment_MyChores1_idx` (`todo_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_MyChores1`
    FOREIGN KEY (`todo_id`)
    REFERENCES `MyChores`.`Todo` (`id`)t
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `MyChores`.`Item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyChores`.`Item` (
  `id` INT auto_increment,
  `title` VARCHAR(75) NOT NULL,
  `coupon` VARCHAR(2000) NOT NULL,
  `discount_amt_or_percent` double(5,2),
  `quantity` int(3),
  `item_amount` double(5,2),
  `todo_id` INT NOT NULL,
  `active` TINYINT default(0),
  `deleted` TINYINT default(0),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_todo_mychores_idx` (`todo_id` ASC) VISIBLE,
  CONSTRAINT `fk_todo_item`
    FOREIGN KEY (`todo_id`)
    REFERENCES `MyChores`.`Todo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `MyChores`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyChores`.`Users` (
  `id` INT auto_increment,
  `fname` VARCHAR(45) NOT NULL,
  `lname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email_address` VARCHAR(75) NULL DEFAULT NULL,
  `active` TINYINT default(0),
  `deleted` TINYINT default(0),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyChores`.`User_Todo_List`
-- -----------------------------------------------------a
CREATE TABLE IF NOT EXISTS `MyChores`.`User_Todo_List` (
  `todo_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`todo_id`, `users_id`),
  INDEX `fk_todo_has_users_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_todo_has_users_todo_idx` (`todo_id` ASC) VISIBLE,
  CONSTRAINT `fk_todo_has_users_todos`
    FOREIGN KEY (`todo_id`)
    REFERENCES `MyChores`.`Todo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_todo_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `MyChores`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
