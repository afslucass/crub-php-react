-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 18-Jun-2022 às 18:01
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
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=utf16 COLLATE=utf16_bin;

--
-- Extraindo dados da tabela `address`
--

INSERT INTO `address` (`cep`, `logradouro`, `complemento`, `bairro`, `localidade`, `id`, `clientId`) VALUES
('71691-083', 'Avenida Comercial', 'de 1901 a 2371 - lado Ã­mpar', 'Centro (SÃ£o SebastiÃ£o)', 'BrasÃ­lia', 35, 41),
('24422-290', 'Rua Alexandrino Cunha', 'Perto da casa do fulano', 'Galo Branco', 'SÃ£o GonÃ§alo', 36, 41),
('67030-025', 'Rua Leopoldo Teixeira', 'Perto da Escola Cardil', 'Centro', 'Ananindeua', 37, 45),
('78559-299', 'Rua JapÃ£o', 'de 201/202 ao fim', 'Vila ItÃ¡lia', 'Sinop', 38, 46),
('77413-815', 'Rua O', '(SETOR UNIÃƒO V)', 'Setor UniÃ£o V', 'Gurupi', 39, 46),
('49043-374', 'Travessa IndependÃªncia III', 'Perto da feira', 'SÃ£o Conrado', 'Aracaju', 40, 46),
('78559-299', 'Rua JapÃ£o', 'de 201/202 ao fim', 'Vila ItÃ¡lia', 'Sinop', 41, 47),
('77413-815', 'Rua O', '(SETOR UNIÃƒO V)', 'Setor UniÃ£o V', 'Gurupi', 42, 47),
('49043-374', 'Travessa IndependÃªncia III', 'Perto da feira', 'SÃ£o Conrado', 'Aracaju', 43, 47),
('78559-299', 'Rua JapÃ£o', 'de 201/202 ao fim', 'Vila ItÃ¡lia', 'Sinop', 44, 48),
('77413-815', 'Rua O', '(SETOR UNIÃƒO V)', 'Setor UniÃ£o V', 'Gurupi', 45, 48),
('77413-815', 'Rua O', '(SETOR UNIÃƒO V)', 'Setor UniÃ£o V', 'Gurupi', 46, 49),
('77413-815', 'Rua O', '(SETOR UNIÃƒO V)', 'Setor UniÃ£o V', 'Gurupi', 47, 50),
('86800-490', 'Rua AntÃ´nio JosÃ© de Oliveira', 'atÃ© 693/694', 'Barra Funda', 'Apucarana', 48, 50),
('79823-736', 'Avenida Pedro Ortiz', 'Bloco C', 'Santa FÃ©', 'Dourados', 49, 51),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 50, 51),
('79823-736', 'Avenida Pedro Ortiz', 'Bloco C', 'Santa FÃ©', 'Dourados', 51, 52),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 52, 52),
('79823-736', 'Avenida Pedro Ortiz', 'Bloco C', 'Santa FÃ©', 'Dourados', 53, 53),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 54, 53),
('79823-736', 'Avenida Pedro Ortiz', 'Bloco C', 'Santa FÃ©', 'Dourados', 55, 54),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 56, 54),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 57, 54),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 58, 55),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 59, 55),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 60, 56),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 61, 56),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 62, 57),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 63, 57),
('83415-220', 'Rua Comendador Orlando Ceccon', 'Perto da casa do JoÃ£o', 'RibeirÃ£o das OnÃ§as', 'Colombo', 64, 58),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 65, 58),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 66, 59),
('70684-255', 'SQNW 306 Bloco K', 'Casa 10', 'Setor Noroeste', 'BrasÃ­lia', 67, 60);

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
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf16 COLLATE=utf16_bin;

--
-- Extraindo dados da tabela `clients`
--

INSERT INTO `clients` (`name`, `bornAt`, `cellphone`, `rg`, `cpf`, `id`) VALUES
('FÃ¡bio Enrico Pedro Henrique Brito', '1998-01-22T02:00:00.000Z', '84543534534', '392863832', '02038775516', 58),
('NatÃ¡lia Amanda da Rosa', '1977-04-15T03:00:00.000Z', '21414124124', '143961007', '32798725453', 59),
('LuÃ­s Victor da ConceiÃ§Ã£o', '2002-03-03T03:00:00.000Z', '87878787878', '481649694', '49706046739', 56),
('Renan Daniel Eduardo Ribeiro', '2002-03-03T03:00:00.000Z', '53252342343', '210834894', '46307238623', 57),
('Leandro Severino da Luz', '1976-05-02T03:00:00.000Z', '12423523523', '382945487', '25408238660', 60),
('Marcos Vinicius Ricardo Raimundo Pinto', '1981-02-26T03:00:00.000Z', '15353432332', '222103711', '37891175950', 53),
('Tatiane Louise Tereza Ramos', '1975-01-11T03:00:00.000Z', '55141414141', '21311212', '03333086549', 54),
('Rosa Sophia Andrea da Mota', '1993-03-11T03:00:00.000Z', '15154364564', '282047785', '49942034749', 55),
('Rita Sophia AparÃ­cio', '1942-06-15T03:00:00.000Z', '34343434343', '137430267', '25699788336', 52),
('JosÃ© Renan AraÃºjo', '1995-03-20T03:00:00.000Z', '54645645645', '123123122', '74247573853', 51),
('KauÃª Kaique da Rosa', '1995-03-26T03:00:00.000Z', '12321312312', '356378688', '38123721005', 50),
('AntÃ´nia Maria Juliana Farias', '1995-03-14T03:00:00.000Z', '67576575675', '473772565', '43708340078', 49),
('Nicolas Bryan KauÃª da ConceiÃ§Ã£o', '1969-05-02T03:00:00.000Z', '12312312312', '492371775', '62492589064', 48),
('Elaine Nair Monteiro', '2022-06-14T17:48:38.939Z', '34188543521', '341885435', '33782136551', 47),
('Sarah Vera Rita AraÃºjo', '1956-04-16T03:00:00.000Z', '12321312331', '249549372', '89989028265', 45),
('Eduardo MÃ¡rcio Pinto', '2022-06-14T17:48:38.939Z', '12312312312', '161357453', '15134101302', 46),
('Gustavo Pedro Henrique Matheus AraÃºjo', '1998-01-20T02:00:00.000Z', '12312312312', '133885811', '66929401099', 43),
('Vitor Vinicius Peixoto', '1995-02-01T02:00:00.000Z', '61988711335', '407134608', '13638376567', 41),
('Raul Julio Alves', '1974-04-07T03:00:00.000Z', '69993501061', '456557301', '71945467525', 42);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
