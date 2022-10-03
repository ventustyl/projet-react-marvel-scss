-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 03 oct. 2022 à 07:25
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `annee` int(11) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `creation` date NOT NULL DEFAULT current_timestamp(),
  `uid` int(11) NOT NULL,
  `cat` varchar(50) NOT NULL,
  `id_1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `titre`, `annee`, `description`, `img`, `creation`, `uid`, `cat`, `id_1`) VALUES
(1, 'Lorem ipsum dolor sit amet.', 2020, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.', 'https://geeko-media.lesoir.be/wp-content/uploads/2019/05/avengers-4-endgame-teaser-super-bowl-vostfr-1068x580.jpg', '2022-10-01', 17, 'film', 17),
(2, 'Lorem ipsum', 2016, 'Marvin on est bon la....\r\nJe me kiffe de ouf ;)', 'https://static.hitek.fr/img/up_m/1876100889/mcularge.jpg', '2022-10-01', 17, 'film', 17),
(3, 'Avengers Engames', 2019, 'Le Titan Thanos, ayant réussi à s\'approprier les six Pierres d\'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l\'Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s\'échapper de la dimension subatomique où il était coincé. Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, dont leurs alliés et coéquipiers : récupérer les Pierres d\'Infinité dans le passé.', 'https://www.cine-feuilles.ch/storage/app/uploads/public/5cc/aca/29c/5ccaca29c9d94137251484.jpg', '2022-10-02', 18, 'film', 18);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `pseudo`, `email`, `password`, `img`) VALUES
(12, 'test', 'test@gmail.com', '$2a$10$G.uBK/rWeDq1hlFM25vENONqK8927so3En302YnQIVu/VmqehhygW', NULL),
(14, 'test2', 'test2@gmail.com', '$2a$10$s05xrAZPvhW53KbsfP701uSOmODiy8o9ygqjXd6BEAGwckalDjotG', NULL),
(15, 'hnjj', '', '$2a$10$s/KLypt2/3TYYDrFQ/qhLONFz3f/6tEYbEEWMLGPHzcBMWCPBx3Ji', NULL),
(16, 'test3', 'test3@gmail.com', '$2a$10$HmCraeWtnqkYz4PG2EZ0tesRDUqILkk4tYrPv8R2YUF9.CdMeoo0K', NULL),
(17, 'marvin', 'marvin@gmail.com', '$2a$10$48T0qjPVrPVJtrTk39ONre/wOT8smhaOG.Sgk5GkdDAveTp5rpLkm', NULL),
(18, 'eric', 'eric.venturino@orange.fr', '$2a$10$wtcbTy4jj4sQ72BwHUK8y.pyq8PgMzlrMpesdvHgdMAAPBow30UeS', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_1` (`id_1`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`id_1`) REFERENCES `utilisateurs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
