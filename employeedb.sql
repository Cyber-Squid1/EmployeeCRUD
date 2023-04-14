-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2023 at 07:30 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `Empid` int(11) NOT NULL,
  `EmpName` varchar(255) NOT NULL,
  `JobTitle` varchar(255) NOT NULL,
  `PhoneNumber` bigint(20) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `PrimaryEmergencyContact` varchar(255) NOT NULL,
  `PECPhoneNumber` bigint(20) NOT NULL,
  `PECRelationship` varchar(255) NOT NULL,
  `SecondaryEmergencyContact` varchar(255) NOT NULL,
  `SECPhoneNumber` bigint(20) NOT NULL,
  `SECRelationship` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`Empid`, `EmpName`, `JobTitle`, `PhoneNumber`, `Email`, `Address`, `City`, `State`, `PrimaryEmergencyContact`, `PECPhoneNumber`, `PECRelationship`, `SecondaryEmergencyContact`, `SECPhoneNumber`, `SECRelationship`, `createdAt`, `updatedAt`) VALUES
(1, 'Om', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:28:56', '2023-04-14 17:28:56'),
(2, 'Pathik', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:04', '2023-04-14 17:29:04'),
(3, 'Jemin', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:10', '2023-04-14 17:29:10'),
(4, 'Dev', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:16', '2023-04-14 17:29:16'),
(5, 'Kunj', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:26', '2023-04-14 17:29:26'),
(6, 'Aavart', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:34', '2023-04-14 17:29:34'),
(7, 'Shaumik', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:41', '2023-04-14 17:29:41'),
(8, 'Shrey', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:48', '2023-04-14 17:29:48'),
(9, 'ABC', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:29:55', '2023-04-14 17:29:55'),
(10, 'XYZ', 'CEO', 7016104220, 'om@om.com', 'abc', 'def', 'ghi', 'Dad', 7016104330, 'Father', 'Mom', 7016104440, 'Mother', '2023-04-14 17:30:01', '2023-04-14 17:30:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`Empid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
