import React, { useState } from 'react';

function Buscador({  }) {
  const [pais, setNompais] = useState('');
  const [capital, setCapital] = useState('');
  const [codigo, setCodigo] = useState('');

  const handlePais = (e) => {
    e.preventDefault();
    onSearch('pais', pais);
  };

  const handleCapital = (e) => {
    e.preventDefault();
    onSearch('capital', capital);
  };

  const handleCodigo = (e) => {
    e.preventDefault();
    onSearch('codigo', codigo);
  };

  return (
    <div>
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
          placeholder="Ingresa el código del país (CCA3)"
        />
        <button type="submit">Buscar por Código</button>
      </form>
    </div>
  );
}

export default Buscador;