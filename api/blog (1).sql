-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 05 oct. 2022 à 15:44
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

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
(1, 'Lorem ipsum dolor sit amet.', 2020, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.', '1664874879364multiverse.jpg', '2022-10-01', 17, 'film', 17),
(4, 'Spiderman', 2021, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla consectetur fermentum. Pellentesque malesuada felis et lorem malesuada, ac vulputate sapien laoreet. Suspendisse blandit, est ac aliquet bibendum, nisl dolor ullamcorper lacus, vel molestie neque ipsum sed velit. Pellentesque risus quam, imperdiet quis felis et, hendrerit ullamcorper tortor. Duis eu quam vel dui feugiat consequat vel eget nisi. Donec at mattis orci. Donec tincidunt faucibus tempus.\r\n\r\nAliquam nec ex a magna rhoncus tempus. Sed in nisl convallis, rutrum elit vel, pellentesque urna. Aenean pulvinar porta tincidunt. Maecenas massa nisl, varius pharetra imperdiet in, facilisis non enim. Etiam lacinia neque felis, porta tincidunt neque porttitor eget. Cras tellus leo, semper id enim tempor, viverra semper est. Suspendisse sit amet velit facilisis, ullamcorper ipsum quis, vulputate nisi. Quisque aliquet pharetra tortor in ullamcorper. Donec risus ipsum, porttitor eget dapibus at, venenatis ac nibh. Maecenas mattis ultricies nulla vitae elementum. Donec euismod erat dolor, eget euismod magna iaculis quis. Integer lacinia leo porta velit luctus luctus. Donec dapibus lorem eu venenatis molestie.\r\n\r\nNullam dui metus, tempor a arcu a, porta gravida tortor. Proin ultrices, lectus vitae tempor egestas, nunc risus sagittis odio, eget ullamcorper leo augue ut purus. Quisque ut efficitur ligula. Nullam elementum suscipit mauris at tincidunt. Phasellus volutpat elementum ligula, eget blandit nunc dignissim sit amet. Aliquam at tempor metus, ac vehicula ex. Aenean sit amet risus ex. Vivamus a ipsum luctus leo pellentesque dapibus in eget magna. Suspendisse ac ullamcorper lacus. Duis tempor eros in lobortis tincidunt.\r\n\r\nNulla lectus ex, aliquet quis dictum quis, volutpat non purus. Aliquam sagittis est non ligula vehicula posuere. Praesent condimentum egestas ligula, convallis auctor ante rhoncus nec. Integer consectetur orci vitae leo sagittis pretium. Nulla auctor, leo non dapibus tincidunt,', '1664874879364multiverse.jpg', '2022-08-01', 20, 'film', 20),
(8, 'Avengers Engames', 2019, '<p>Quand un ennemi inattendu fait surface pour menacer la sécurité et l\'équilibre mondial, Nick Fury, directeur de l\'agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente. test test ,node</p>', '1664882722115Logo-Marvel.jpg', '2022-10-04', 18, 'serie', 18),
(9, 'React sur mon site', 2022, '<p>Ceci est <strong>mon article</strong></p><p>test</p><p>test</p>', '1664883533899black-widow.png', '2022-10-04', 18, 'film', 18),
(10, 'Avengers Engames', 2010, '<p>Lorem pour roland 2022 test</p>', '1664885556221marvel-universe.png', '2022-10-04', 18, 'film', 18),
(12, 'Iron man', 2010, '<p>Super film</p>', '1664886822004ironman.png', '2022-10-04', 18, 'personnage', 18),
(13, 'Avengers Engames', 2022, '<p>test</p>', '1664891887543fond2.jpg', '2022-10-04', 18, 'personnage', 18),
(14, 'test', 0, '<p>test</p>', '1664891541819thor.png', '2022-10-04', 18, 'personnage', 18),
(15, 'Film 3', 2023, '<p>Lorem </p>', '1664952353576Hulk__BLU_RAY_-15153024102014.jpg', '2022-10-05', 18, 'film', 18),
(16, 'test', 0, '<p>test</p>', '1664957222071blog2.jpg', '2022-10-05', 18, 'blog', 18),
(17, 'gfhfth', 0, '<p>ghgfch</p>', '1664957304270blog.jpg', '2022-10-05', 18, 'blog', 18),
(18, 'test', 0, '<p>test</p>', '1664957509227blog2.jpg', '2022-10-05', 18, 'film', 18);

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `textecom` varchar(2000) NOT NULL,
  `id_1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `titre`, `textecom`, `id_1`) VALUES
(1, 'Super commentaire', 'Est ce que ça marche bien', 18),
(2, 'venturino83@gmail.com', 'testteeztsf', 18),
(3, 'commentaire', 'ceci est le commentaire de marvin', 18),
(4, 'commentaire essai', 'ceci est le commentaire de marvin', 18),
(5, 'commentaire avec roland', 'Super ça marche', 18);

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
(17, 'marvin', 'marvin@gmail.com', '$2a$10$48T0qjPVrPVJtrTk39ONre/wOT8smhaOG.Sgk5GkdDAveTp5rpLkm', ''),
(18, 'eric', 'eric.venturino@orange.fr', '$2a$10$wtcbTy4jj4sQ72BwHUK8y.pyq8PgMzlrMpesdvHgdMAAPBow30UeS', 'https://mir-s3-cdn-cf.behance.net/projects/404/ec690764716283.Y3JvcCwxNDAzLDEwOTgsMCwxODM.jpg'),
(19, 't', 't', '$2a$10$T1HOyjYwzEgVwPtAwqPz3eYbH18fPGOjYIZco.mWN5L5QAlgHKtVK', NULL),
(20, 'gwen', 'gwen', '$2a$10$CJU6RS1aHpEnYa112d4zDep6RT5dqajktYf8AowP0NNqTxMPkhpr6', NULL),
(21, 'roland', 'roland@gmail.com', '$2a$10$qqUNR/icUdlcuNNG2kZxcOsnOz/.Rusk4IMA4BX7B1/E1YKm7N2pu', NULL);

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
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`id_1`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `commentaire_ibfk_1` FOREIGN KEY (`id_1`) REFERENCES `articles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
