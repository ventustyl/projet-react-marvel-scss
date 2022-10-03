import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async e=>{
    e.preventDefault();
upload();
  }

  const [value, setValue] = useState('');
  const [titre, setTitre] = useState('');
  const [annee, setAnnee] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('')
  return (
    <div className='ajouter'>
      <div className='content'>
        <input type="text" placeholder='Titre' onChange={e=>setTitre(e.target.value)} />
      <select name="annee" onChange={e=>setAnnee(e.target.value)} >
      <option value="2008">2008</option>
      <option value="2009">2009</option>
      <option value="2010">2010</option>
      <option value="2011">2011</option>
      <option value="2012">2012</option>
      <option value="2013">2013</option>
      <option value="2014">2014</option>
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
      <option value="2028">2028</option>

 
      </select>
        <div className='editeur'>
          <ReactQuill className='quill' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className='menu'>
        <div className='item'>
          <h1>Publier</h1>
          <span>
            <b>Etat :</b> Brouillon
          </span>
          <span>
            <b>Visibilité :</b> Public
          </span>
          <input className='download' type="file" name="" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label className="telechargement" htmlFor="file">Upload Image</label>
          <div className='bouton'>
            <button>Brouillon</button>
            <button onClick={handleClick} >Publier</button>
          </div>
        </div>
        <div className='item'>
          <h1>Catégories</h1>
          <div className='cat'>
          <input type="radio" name="cat" value="film" id="film" onChange={e=>setCat(e.target.value)} />
          <label htmlFor='film'>Film</label>
          </div>
          <div className='cat'>
          <input type="radio" name="cat" value="serie" id="serie" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='serie'>Serie</label>
          </div>
          <div className='cat'>
          <input type="radio" name="cat" value="personnage" id="personnage" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='personnage'>Personnage</label>
          </div>
          <div className='cat'>
          <input type="radio" name="cat" value="blog" id="blog" onChange={e=>setCat(e.target.value)} />
          <label htmlFor='blog'>Blog</label>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Write
