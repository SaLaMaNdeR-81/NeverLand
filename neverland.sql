-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Nov 14, 2023 at 11:11 PM
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
  `UID` text NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `last_login` bigint(20) DEFAULT NULL,
  `register_date` bigint(20) DEFAULT NULL,
  `register_ip` varchar(255) DEFAULT NULL,
  `isLogged` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `UID`, `username`, `password`, `ip`, `last_login`, `register_date`, `register_ip`, `isLogged`) VALUES
(1, '16971161673494', 'momahi', '$SHA$mOcJr5gVUABdYT0Gpzd/Xe$7f954f52a81be776e4d3814cd27bd1d2d24fdd7d94db3c9c144ef76fd2bb8e2c', '127.0.0.1', NULL, 1697116167, '127.0.0.1', 0),
(5, '1699113421322807', 'admin', '$SHA$u8bQAXBZqjDhSa/Ok4DHre$36d97d3f6c2d461b0595f61e6176a1d4bd80e505c5111747593d581f11dd6fe8', NULL, NULL, 1699113421, '::1', NULL),
(6, '169911346917356881', 'mahdi', '$SHA$zeSoKpNSIq3urTB5WKfsd.$96d8c1ad7b84accec7699b925b1502c62a69b5dc1c16e2d5c08f66340069d50c', NULL, NULL, 1699113469, '::1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
CREATE TABLE IF NOT EXISTS `profile` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `UID` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `Avatar_Url` varchar(80) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `lastname` varchar(40) DEFAULT NULL,
  `nickname` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `UID`, `email`, `Avatar_Url`, `name`, `lastname`, `nickname`) VALUES
(1, '16971161673494', 'a.mahdimahdi1381@gmail.com', NULL, 'Mohammad Mahdi', 'Einollahi', 'Salamander');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
