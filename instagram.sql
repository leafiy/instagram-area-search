-- phpMyAdmin SQL Dump
-- version 4.2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2014-07-08 02:51:14
-- 服务器版本： 5.6.19
-- PHP Version: 5.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `instagram`
--

DELIMITER $$
--
-- 存储过程
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `alter`()
ALTER IGNORE TABLE instagram_test ADD UNIQUE (id(1536))$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `id`()
create table `new_table_name`  select * from `instagram_beijing`  group by `id`$$

DELIMITER ;

-- --------------------------------------------------------

--
-- 表的结构 `instagram_beijing_new`
--

CREATE TABLE IF NOT EXISTS `instagram_beijing_new` (
  `id_hash` binary(32) NOT NULL,
  `id` varchar(512) NOT NULL,
  `locationname` varchar(512) NOT NULL,
  `caption` varchar(512) NOT NULL,
  `tags` varchar(512) NOT NULL,
  `time` varchar(512) NOT NULL,
  `lat` varchar(512) NOT NULL,
  `lng` varchar(512) NOT NULL,
  `link` varchar(512) NOT NULL,
  `filter` varchar(512) NOT NULL,
  `likes` varchar(512) NOT NULL,
  `username` varchar(512) NOT NULL,
  `profile_picture` varchar(512) NOT NULL,
  `comments_count` varchar(512) NOT NULL,
  `insta_link` varchar(512) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `instagram_shanghai_new`
--

CREATE TABLE IF NOT EXISTS `instagram_shanghai_new` (
  `id_hash` binary(32) NOT NULL,
  `id` varchar(512) NOT NULL,
  `locationname` varchar(512) NOT NULL,
  `caption` varchar(512) NOT NULL,
  `tags` varchar(512) NOT NULL,
  `time` varchar(512) NOT NULL,
  `lat` varchar(512) NOT NULL,
  `lng` varchar(512) NOT NULL,
  `link` varchar(512) NOT NULL,
  `filter` varchar(512) NOT NULL,
  `likes` varchar(512) NOT NULL,
  `username` varchar(512) NOT NULL,
  `profile_picture` varchar(512) NOT NULL,
  `comments_count` varchar(512) NOT NULL,
  `insta_link` varchar(512) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `instagram_tokyo_new`
--

CREATE TABLE IF NOT EXISTS `instagram_tokyo_new` (
  `id_hash` binary(32) NOT NULL,
  `id` varchar(512) NOT NULL,
  `locationname` varchar(512) NOT NULL,
  `caption` varchar(512) NOT NULL,
  `tags` varchar(512) NOT NULL,
  `time` varchar(512) NOT NULL,
  `lat` varchar(512) NOT NULL,
  `lng` varchar(512) NOT NULL,
  `link` varchar(512) NOT NULL,
  `filter` varchar(512) NOT NULL,
  `likes` varchar(512) NOT NULL,
  `username` varchar(512) NOT NULL,
  `profile_picture` varchar(512) NOT NULL,
  `comments_count` varchar(512) NOT NULL,
  `insta_link` varchar(512) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `instagram_beijing_new`
--
ALTER TABLE `instagram_beijing_new`
 ADD UNIQUE KEY `id_hash` (`id_hash`);

--
-- Indexes for table `instagram_shanghai_new`
--
ALTER TABLE `instagram_shanghai_new`
 ADD UNIQUE KEY `id_hash` (`id_hash`);

--
-- Indexes for table `instagram_tokyo_new`
--
ALTER TABLE `instagram_tokyo_new`
 ADD UNIQUE KEY `id_hash` (`id_hash`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
