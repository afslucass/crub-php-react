-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 15-Jun-2022 às 23:35
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `kabum`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `cep` varchar(10) COLLATE utf16_bin NOT NULL,
  `logradouro` varchar(50) COLLATE utf16_bin NOT NULL,
  `complemento` varchar(50) COLLATE utf16_bin NOT NULL,
  `bairro` varchar(50) COLLATE utf16_bin NOT NULL,
  `localidade` varchar(50) COLLATE utf16_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf16 COLLATE=utf16_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth`
--

DROP TABLE IF EXISTS `auth`;
CREATE TABLE IF NOT EXISTS `auth` (
  `login` varchar(20) COLLATE utf16_bin NOT NULL,
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `password` varchar(100) COLLATE utf16_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf16 COLLATE=utf16_bin;

--
-- Extraindo dados da tabela `auth`
--

INSERT INTO `auth` (`login`, `id`, `password`) VALUES
('root', 1, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `name` varchar(50) COLLATE utf16_bin NOT NULL,
  `bornAt` varchar(50) COLLATE utf16_bin NOT NULL,
  `cellphone` varchar(50) COLLATE utf16_bin NOT NULL,
  `rg` varchar(50) COLLATE utf16_bin NOT NULL,
  `cpf` varchar(50) COLLATE utf16_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf16 COLLATE=utf16_bin;