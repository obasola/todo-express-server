-- MySQL Workbench Forward Engineering
Use MyTasks;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MyTasks
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `MyTasks` ;

-- -----------------------------------------------------
-- Schema MyTasks
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MyTasks` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `MyTasks` ;

-- -----------------------------------------------------
-- Table `MyTasks`.`Todo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyTasks`.`Todo` (
  `id` INT auto_increment,
  `user_id` INT NOT NULL,
  `title` VARCHAR(75) NOT NULL,
  `description` TINYTEXT NOT NULL,
  `active` TINYINT default(0),
  `completed` TINYINT default(0),
  `deleted` TINYINT default(0),
  `date_created` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_user_mytasks_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `MyTasks`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MyTasks`.`TodoItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyTasks`.`TodoItem` (
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
  INDEX `fk_todo_mytasks_idx` (`todo_id` ASC) VISIBLE,
  CONSTRAINT `fk_todo_item`
    FOREIGN KEY (`todo_id`)
    REFERENCES `MyTasks`.`Todo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `MyTasks`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyTasks`.`Users` (
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
