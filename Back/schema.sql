-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema thesisrbk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `thesisrbk` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

-- -----------------------------------------------------
-- Table `thesisrbk`.`categorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`categorie` (
  `idcategorie` INT NOT NULL AUTO_INCREMENT,
  `categorieName` VARCHAR(45) NULL DEFAULT NULL,
  `categorieImage` LONGTEXT NULL DEFAULT NULL,
  `categorieDescription` LONGTEXT NULL DEFAULT NULL,
  `categorieType` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idcategorie`))
ENGINE = InnoDB
AUTO_INCREMENT = 33
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL DEFAULT NULL,
  `userEmail` VARCHAR(45) NULL DEFAULT NULL,
  `userPassword` VARCHAR(255) NULL DEFAULT NULL,
  `userImage` LONGTEXT NULL DEFAULT NULL,
  `userBlocked` TINYINT NULL DEFAULT NULL,
  `userLatitude` VARCHAR(45) NULL DEFAULT NULL,
  `userLongitude` VARCHAR(45) NULL DEFAULT NULL,
  `userConfirmPass` VARCHAR(255) NULL DEFAULT NULL,
  `adress` VARCHAR(45) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `state` VARCHAR(45) NULL DEFAULT NULL,
  `contactNumber` INT NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 36
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`offer` (
  `idoffer` INT NOT NULL AUTO_INCREMENT,
  `offerTitle` LONGTEXT NULL DEFAULT NULL,
  `offerDescription` LONGTEXT NULL DEFAULT NULL,
  `offerImages` JSON NULL DEFAULT NULL,
  `offerPrice` INT NULL DEFAULT NULL,
  `offerType` VARCHAR(45) NULL DEFAULT NULL,
  `offerStatus` TINYINT NULL DEFAULT NULL,
  `qrCode` LONGTEXT NULL DEFAULT NULL,
  `renterOrNot` TINYINT NULL DEFAULT NULL,
  `latitude` VARCHAR(45) NULL DEFAULT NULL,
  `longitude` VARCHAR(45) NULL DEFAULT NULL,
  `userIduser` INT NOT NULL,
  `idcategory` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idoffer`),
  INDEX `fk_offer_user1_idx` (`userIduser` ASC) VISIBLE,
  CONSTRAINT `fk_offer_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`feature` (
  `idfeature` INT NOT NULL AUTO_INCREMENT,
  `categorieIdcategorie` INT NOT NULL,
  `offerIdoffer` INT NOT NULL,
  PRIMARY KEY (`idfeature`),
  INDEX `fk_feature_categorie_idx` (`categorieIdcategorie` ASC) VISIBLE,
  INDEX `fk_feature_offer1_idx` (`offerIdoffer` ASC) VISIBLE,
  CONSTRAINT `fk_feature_categorie`
    FOREIGN KEY (`categorieIdcategorie`)
    REFERENCES `thesisrbk`.`categorie` (`idcategorie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feature_offer1`
    FOREIGN KEY (`offerIdoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `thesisrbk` ;

-- -----------------------------------------------------
-- Table `thesisrbk`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `adminName` VARCHAR(45) NULL DEFAULT NULL,
  `adminEmail` VARCHAR(45) NULL DEFAULT NULL,
  `adminPassword` LONGTEXT NULL DEFAULT NULL,
  `adminImage` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`bid`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`bid` (
  `idBID` INT NOT NULL AUTO_INCREMENT,
  `BIDprice` INT NULL DEFAULT NULL,
  `BIDstartDate` DATE NULL DEFAULT NULL,
  `BIDendDate` DATE NULL DEFAULT NULL,
  `userIduser` INT NOT NULL,
  `offerIdoffer` INT NOT NULL,
  PRIMARY KEY (`idBID`),
  INDEX `fk_BID_user1_idx` (`userIduser` ASC) VISIBLE,
  INDEX `fk_bid_offer1_idx` (`offerIdoffer` ASC) VISIBLE,
  CONSTRAINT `fk_bid_offer1`
    FOREIGN KEY (`offerIdoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`),
  CONSTRAINT `fk_BID_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`chat` (
  `idchat` INT NULL DEFAULT NULL,
  `content` VARCHAR(45) NULL DEFAULT NULL,
  `userIduser` INT NULL DEFAULT NULL,
  `adminIdadmin` INT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`inbox`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`inbox` (
  `idinBox` INT NOT NULL AUTO_INCREMENT,
  `inBoxObject` VARCHAR(45) NOT NULL,
  `inBoxBody` VARCHAR(255) NOT NULL,
  `inBoxDate` DATE NULL DEFAULT NULL,
  `inBoxStatus` VARCHAR(45) NULL DEFAULT NULL,
  `adminIdadmin` INT NOT NULL,
  `userIduser` INT NOT NULL,
  PRIMARY KEY (`idinBox`),
  INDEX `fk_inBox_admin_idx` (`adminIdadmin` ASC) VISIBLE,
  INDEX `fk_inBox_user1_idx` (`userIduser` ASC) VISIBLE,
  CONSTRAINT `fk_inBox_admin`
    FOREIGN KEY (`adminIdadmin`)
    REFERENCES `thesisrbk`.`admin` (`idadmin`),
  CONSTRAINT `fk_inBox_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`notification` (
  `idnotification` INT NOT NULL AUTO_INCREMENT,
  `notificationBody` VARCHAR(255) NULL DEFAULT NULL,
  `notificationDate` DATE NULL DEFAULT NULL,
  `notificationSeen` TINYINT NULL DEFAULT NULL,
  `userIduser` INT NOT NULL,
  PRIMARY KEY (`idnotification`),
  INDEX `fk_notification_user1_idx` (`userIduser` ASC) VISIBLE,
  CONSTRAINT `fk_notification_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 135
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`offerhascategorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`offerhascategorie` (
  `offerIdoffer` INT NOT NULL,
  `categorieIdcategorie` INT NOT NULL,
  PRIMARY KEY (`offerIdoffer`, `categorieIdcategorie`),
  INDEX `fk_offer_has_categorie_categorie1_idx` (`categorieIdcategorie` ASC) VISIBLE,
  INDEX `fk_offer_has_categorie_offer1_idx` (`offerIdoffer` ASC) VISIBLE,
  CONSTRAINT `fk_offer_has_categorie_categorie1`
    FOREIGN KEY (`categorieIdcategorie`)
    REFERENCES `thesisrbk`.`categorie` (`idcategorie`),
  CONSTRAINT `fk_offer_has_categorie_offer1`
    FOREIGN KEY (`offerIdoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`reservation` (
  `idreservation` INT NOT NULL AUTO_INCREMENT,
  `reservationStatus` VARCHAR(45) NULL DEFAULT NULL,
  `reservationStartDate` DATE NULL DEFAULT NULL,
  `reservationEndDate` DATE NULL DEFAULT NULL,
  `offerIdoffer` INT NOT NULL,
  `userIduser` INT NOT NULL,
  PRIMARY KEY (`idreservation`),
  INDEX `fk_reservation_offer1_idx` (`offerIdoffer` ASC) VISIBLE,
  INDEX `fk_reservation_user1_idx` (`userIduser` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_offer1`
    FOREIGN KEY (`offerIdoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`),
  CONSTRAINT `fk_reservation_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`reviews` (
  `idreviews` INT NOT NULL AUTO_INCREMENT,
  `reviewsBody` VARCHAR(255) NULL DEFAULT NULL,
  `offerIdoffer` INT NOT NULL,
  `userIduser` INT NOT NULL,
  PRIMARY KEY (`idreviews`),
  INDEX `fk_reviews_offer1_idx` (`offerIdoffer` ASC) VISIBLE,
  INDEX `fk_reviews_user1_idx` (`userIduser` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_offer1`
    FOREIGN KEY (`offerIdoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`),
  CONSTRAINT `fk_reviews_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`satisfaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`satisfaction` (
  `idsatisfaction` INT NOT NULL AUTO_INCREMENT,
  `satisfactionDegree` VARCHAR(45) NULL DEFAULT NULL,
  `userIduser` INT NOT NULL,
  PRIMARY KEY (`idsatisfaction`),
  INDEX `fk_satisfaction_user1_idx` (`userIduser` ASC) VISIBLE,
  CONSTRAINT `fk_satisfaction_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `thesisrbk`.`wishlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thesisrbk`.`wishlist` (
  `idwishlist` INT NOT NULL AUTO_INCREMENT,
  `userIduser` INT NOT NULL,
  `offerIdoffer` INT NOT NULL,
  PRIMARY KEY (`idwishlist`),
  INDEX `fk_wishlist_user1_idx` (`userIduser` ASC) VISIBLE,
  INDEX `fk_wishlist_offer1_idx` (`offerIdoffer` ASC) VISIBLE,
  CONSTRAINT `fk_wishlist_offer1`
    FOREIGN KEY (`offerIdoffer`)
    REFERENCES `thesisrbk`.`offer` (`idoffer`),
  CONSTRAINT `fk_wishlist_user1`
    FOREIGN KEY (`userIduser`)
    REFERENCES `thesisrbk`.`user` (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


/*Inbox queries */
INSERT INTO `Inbox` (`inboxObject`,`inboxBody`, `inboxStatus` ,`adminIdadmin`,`userIduser`,`inboxDate`) VALUES ('Request' ,'Hello how can i join you by phone please....','Reciever',2,9,'2024-01-17');
INSERT INTO `Inbox` (`inboxObject`,`inboxBody`, `inboxStatus` ,`adminIdadmin`,`userIduser`,`inboxDate`) VALUES ('Thank you' ,'Hello Thank you so much it was a great service....','Reciever',2,9,'2024-09-17');
INSERT INTO `Inbox` (`inboxObject`,`inboxBody`, `inboxStatus` ,`adminIdadmin`,`userIduser`,`inboxDate`) VALUES ('Hello' ,'Hello it was a great service....','Reciever',2,10,'2024-09-17');
INSERT INTO `Inbox` (`inboxObject`,`inboxBody`, `inboxStatus` ,`adminIdadmin`,`userIduser`,`inboxDate`) VALUES ('Response' ,'Hello Thank you we will be present for you.. ','Sender',2,9,'2024-01-17');
INSERT INTO `Inbox` (`inboxObject`,`inboxBody`, `inboxStatus` ,`adminIdadmin`,`userIduser`,`inboxDate`) VALUES ('Ok we will see' ,'','Sender',2,9,'2024-09-17');
