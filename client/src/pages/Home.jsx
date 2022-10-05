import React , { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Fond from "../img/fond.jpg";

const Home = () => {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);  };

  return (
    <>
      <Navbar />
      <img className="fond-ecran" src={Fond} alt="fond ecran" />
      <div className="ordre">
        <h3>Date de sortie</h3>
        <input type="checkbox" id="toggle" className="checkbox" />
        <label  onClick={handleToggle} htmlFor="toggle" className="label"></label>
        <h3>Ordre histoire</h3>
      </div>
      <h1>MARVEL VOUS EN MET PLEIN LA VUE</h1>
  
      <div className={isActive ? "liste": "liste2"}> 
 {`L'Incroyable Hulk (2008 - film)
Iron Man (2008 - film)
Iron Man 2 (2010 - film)
Captain America : The First Avenger (2011 - film)
Thor (2011 - film)
The Avengers (2012 - film)
Thor : Le Monde des ténèbres (2013 - film)
Iron Man 3 (2013 - film)
Agents of S.H.I.E.L.D Season 1 (2013 - série)
Captain America : The Winter Soldier (2014 - film)
Agents of S.H.I.E.L.D Saison 2 (2014 - série)
Les Gardiens de la Galaxie (2014 - film)
Daredevil Saison 1 (2015 - série)
Jessica Jones Saison 1 (2015 - série TV)
Avengers : Age of Ultron (2015 - film)
Agents of S.H.I.E.L.D Saison 3 (2015 - série)
Agent Carter Saison 1 (2015 - série)
 Ant-Man (2015 - film)
Agent Carter Saison 2 (2016 - série)
Daredevil Saison 2 (2016 - série)
Captain America : Civil War (2016 - film)
Agents of S.H.I.E.L.D Saison 4 (2016 - série)
 Luke Cage Saison 1 (2016 - série)
Doctor Strange (2016 - film)
Spider-Man : Homecoming (2017 - film)
Iron Fist Saison 1 (2017 - série)
Les Gardiens de la Galaxie Vol. 2 (2017 - film)
Thor : Ragnarok (2017 - film)
The Defenders Saison 1 (2017 - série)
Agents of S.H.I.E.L.D Saison 5 (2017 - série)
Jessica Jones Saison 2 (2018 - série)
Luke Cage Saison 2 (2018 - série)
Cloak and Dagger Saison 1 (2018 - série)
Daredevil saison 3 (2018 - série)
Black Panther (2018 - film)
Iron Fist Saison 2 (2018 - série)
Ant-Man et la Guêpe (2018 - film)
Avengers Infinity War (2018 - film)
Captain Marvel (2019 - film)
Avengers : Endgame (2019 - film)
Spider-Man : Far From Home (2019 - film)
Agents of S.H.I.E.L.D Saison 6 (2019 - série)
Agents of S.H.I.E.L.D Season 7 (2020 - série)
WandaVision (2021 - série)
Loki (2021 - série)
Le Faucon et le Soldat de l Hiver (2021 - série)
Black Widow (2021 - film)
Shang-Chi et les dix anneaux (2021 - film)
ternals (2021 - film)
Hawkeye (2021 - série)
Moon Knight (2022 - série)
Spider-Man : No Way Home (2021 - film)
What if... ? (2022 - série)
Doctor Strange Multivers de la Folie (2022 - film)
Miss Marvel (2022 - série)
She Hulk (2022 - série)
            `}
        </div>
        <div className={isActive ? "liste2": "liste"}>
        {`              Captain America : The First Avenger (2011 - film)
            Marvel's Agent Carter Saison 1 (2015 - série)
            Marvel's Agent Carter Saison 2 (2016 - série)
            Captain Marvel (2019 - film)
            Iron Man (2008 - film)
            Iron Man 2 (2010 - film)
            L'Incroyable Hulk (2008 - film)
            Thor (2011 - film)
            The Avengers (2012 - film)
            Iron Man 3 (2013 - film)
            Thor : Le Monde des ténèbres (2013 - film)
            Captain America : The Winter Soldier (2014 - film)
            Agents of S.H.I.E.L.D Season 1 (2013 - série)
            Les Gardiens de la Galaxie (2014 - film)
            Les Gardiens de la Galaxie Vol. 2 (2017 - film)
            Daredevil Saison 1 (2015 - série)
            Avengers : Age of Ultron (2015 - film)
            Agents of S.H.I.E.L.D Saison 2 (2014 - série)
            Ant-Man (2015 - film)
            Jessica Jones Saison 1 (2015 - série TV)
            Daredevil Saison 2 (2016 - série télévisée)
            Captain America : Civil War (2016 - film)
            Agents of S.H.I.E.L.D Saison 3 (2015 - série)
            Luke Cage Saison 1 (2016 - série)
            Spider-Man : Homecoming (2017 - film)
            Doctor Strange (2016 - film)
            Black Panther (2018 - film)
            Iron Fist Saison 1 (2017 - série)
            Agents of S.H.I.E.L.D Saison 4 (2016 - série)
            The Defenders Saison 1 (2017 - série)
            Les Inhumains Saison 1 (2017 - série)
            Thor : Ragnarok (2017 - film)
            Jessica Jones Saison 2 (2018 - série)
            Luke Cage Saison 2 (2018 - série)
            Cloak and Dagger Saison 1 (2018 - série)
            Daredevil saison 3 (2018 - série)
            Agents of S.H.I.E.L.D Saison 5 (2017 - série)
            Iron Fist Saison 2 (2018 - série)
            Ant-Man et la Guêpe (2018 - film)
            Black Widow (2021 - film)
            Agents of S.H.I.E.L.D Saison 6 (2019 - série)
            Agents of S.H.I.E.L.D Season 7 (2020 - série)
            Avengers Infinity War (2018 - film)
            Avengers : Endgame (2019 - film)
            Loki (2021 - Disney+ TV show)
            What if... ? (2022 - série)
            WandaVision (2021 - série)
            Spider-Man : Far From Home (2019 - film)
            Le Faucon et le Soldat de l'Hiver (2021 - série)
            Shang-Chi et lles dix anneaux (2021 - film)
            Eternals (2021 - film)
            Spider-Man : No Way Home (2021 - film)
            Hawkeye (2021 - série)
            Moon Knight (2022 - série)
            Doctor Strange Multivers de la Folie (2022 - film)
            Miss Marvel (2022 - série)
            She Hulk (2022 - série) `}
        </div>
      <Footer />
    </>
  );
};

export default Home;
