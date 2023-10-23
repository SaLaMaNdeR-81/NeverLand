-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Oct 23, 2023 at 10:27 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `neverland`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
CREATE TABLE IF NOT EXISTS `auth` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `last_login` bigint(20) DEFAULT NULL,
  `register_date` bigint(20) DEFAULT NULL,
  `register_ip` varchar(255) DEFAULT NULL,
  `isLogged` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `username`, `password`, `ip`, `last_login`, `register_date`, `register_ip`, `isLogged`) VALUES
(1, 'momahi', '$SHA$mOcJr5gVUABdYT0Gpzd/Xe$7f954f52a81be776e4d3814cd27bd1d2d24fdd7d94db3c9c144ef76fd2bb8e2c', '127.0.0.1', NULL, 1697116167, '127.0.0.1', 0),
(3, 'admin', '$SHA$NhwF.nQ7ovYuHIPYZDIaSu$07ea6efbdf65bce6d3f3fd1868e7cdb989956e13627915203e679b5127b47a20', '127.0.0.1', 1697758200, 1697758200, '127.0.0.1', NULL),
(4, 'mahdi', '$SHA$CVoqKNt0oOVNThevTQyQie$b0dcf1bfe09447346875344abd3d132799820419fd62ff547a6195a56fa9f0c8', NULL, NULL, 1697760524, '::1', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
