-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema thesisrbk
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema thesisrbk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `thesisrbk` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `thesisrbk` ;

-- -----------------------------------------------------
-- Table `thesisrbk`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `userEmail` VARCHAR(45) NULL,
  `userPassword` VARCHAR(255) NULL,
  `userImage` LONGTEXT NULL,
  `userBlocked` TINYINT NULL,
  `userLatitude` VARCHAR(45) NULL,
  `userLongitude` VARCHAR(45) NULL,
  `userConfirmPass` VARCHAR(255) NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `adminName` VARCHAR(45) NULL,
  `adminEmail` VARCHAR(45) NULL,
  `adminPassword` LONGTEXT NULL,
  `adminImage` LONGTEXT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`categorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`categorie` (
  `idcategorie` INT NOT NULL AUTO_INCREMENT,
  `categorieName` VARCHAR(45) NULL,
  `categorieImage` LONGTEXT NULL,
  `categorieDescription` LONGTEXT NULL,
  `categorieType` VARCHAR(45) NULL,
  PRIMARY KEY (`idcategorie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`offer` (
  `idoffer` INT NOT NULL AUTO_INCREMENT,
  `offerTitle` LONGTEXT NULL,
  `offerDescription` LONGTEXT NULL,
  `offerImages` JSON NULL,
  `offerPrice` INT NULL,
  `offerType` VARCHAR(45) NULL,
  `offerStatus` TINYINT NULL,
  `qrCode` LONGTEXT NULL,
  `renterOrNot` TINYINT NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `user_iduser` INT NOT NULL,
  `categorie_idcategorie` INT NOT NULL,
  PRIMARY KEY (`idoffer`),
  INDEX `fk_offer_user1_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_offer_categorie1_idx` (`categorie_idcategorie` ASC) VISIBLE,
  CONSTRAINT `fk_offer_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_offer_categorie1`
    FOREIGN KEY (`categorie_idcategorie`)
    REFERENCES `thesisrbk`.`categorie` (`idcategorie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`BID`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`BID` (
  `idBID` INT NOT NULL AUTO_INCREMENT,
  `BIDprice` INT NULL,
  `BIDstartDate` DATE NULL,
  `BIDendDate` DATE NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idBID`),
  INDEX `fk_BID_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_BID_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`reservation` (
  `idreservation` INT NOT NULL AUTO_INCREMENT,
  `reservationStatus` VARCHAR(45) NULL,
  `reservationStartDate` DATE NULL,
  `reservationEndDate` DATE NULL,
  `offer_idoffer` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idreservation`),
  INDEX `fk_reservation_offer1_idx` (`offer_idoffer` ASC) VISIBLE,
  INDEX `fk_reservation_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_offer1`
    FOREIGN KEY (`offer_idoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservation_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`satisfaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`satisfaction` (
  `idsatisfaction` INT NOT NULL AUTO_INCREMENT,
  `satisfactionDegree` VARCHAR(45) NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idsatisfaction`),
  INDEX `fk_satisfaction_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_satisfaction_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`notification` (
  `idnotification` INT NOT NULL AUTO_INCREMENT,
  `notificationBody` VARCHAR(255) NULL,
  `notificationDate` DATE NULL,
  `notificationSeen` TINYINT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idnotification`),
  INDEX `fk_notification_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_notification_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`inBox`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`inBox` (
  `idinBox` INT NOT NULL AUTO_INCREMENT,
  `inBoxObject` VARCHAR(45) NULL,
  `inBoxBody` VARCHAR(255) NULL,
  `inBoxDate` DATE NULL,
  `inBoxStatus` VARCHAR(45) NULL,
  `admin_idadmin` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idinBox`),
  INDEX `fk_inBox_admin_idx` (`admin_idadmin` ASC) VISIBLE,
  INDEX `fk_inBox_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_inBox_admin`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `thesisrbk`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inBox_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`reviews` (
  `idreviews` INT NOT NULL AUTO_INCREMENT,
  `reviewsBody` VARCHAR(255) NULL,
  `offer_idoffer` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idreviews`),
  INDEX `fk_reviews_offer1_idx` (`offer_idoffer` ASC) VISIBLE,
  INDEX `fk_reviews_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_offer1`
    FOREIGN KEY (`offer_idoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reviews_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thesisrbk`.`wishlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`wishlist` (
  `idwishlist` INT NOT NULL AUTO_INCREMENT,
  `user_iduser` INT NOT NULL,
  `offer_idoffer` INT NOT NULL,
  PRIMARY KEY (`idwishlist`),
  INDEX `fk_wishlist_user1_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_wishlist_offer1_idx` (`offer_idoffer` ASC) VISIBLE,
  CONSTRAINT `fk_wishlist_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_wishlist_offer1`
    FOREIGN KEY (`offer_idoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
