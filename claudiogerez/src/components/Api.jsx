import React, { useEffect, useState } from 'react';
import './App.css';

function Api() {
  const [datos, setDatos] = useState(null);
  const [pais, setNompais] = useState('');
  const [capital, setCapital] = useState('');
  const [codigo, setCodigo] = useState('');
  const [error, setError] = useState(null);
  const [buscador, setBuscador] = useState(null); 

  useEffect(() => {
    if (buscador) {
      let url = '';
      if (buscador === 'pais' && pais) {
        url = `https://restcountries.com/v3.1/name/${pais}`;
      } else if (buscador === 'capital' && capital) {
        url = `https://restcountries.com/v3.1/capital/${capital}`;
      } else if (buscador === 'codigo' && codigo) {
        url = `https://restcountries.com/v3.1/alpha/${codigo}`;
      }

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('País no encontrado');
          }
          return response.json();
        })
        .then(data => {
          setDatos(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setDatos(null);
        });
    }
  }, [buscador, pais, capital, codigo]); 

  
  return (
    <div>
      <h1>Buscar País</h1>

      <form onSubmit={handlePais}>
        <input
          type="text"
          value={pais}
          onChange={(e) => setNompais(e.target.value)}
          placeholder="Ingresa el nombre del país"
        />
        <button type="submit">Buscar por País</button>
      </form>

      
      <form onSubmit={handleCapital}>
        <input
          type="text"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          placeholder="Ingresa la capital"
        />
        <button type="submit">Buscar por Capital</button>
      </form>

     
      <form onSubmit={handleCodigo}>
        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Ingresa el código del país"
        />
        <button type="submit">Buscar</button>
      </form>

     
    </div>
  );
}

export default Api;