import React from 'react';

function Resultados({ datos }) {
  return (
    <div> <div key={country.cca3}>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital ? country.capital[0] : 'No disponible'}</p>
    <p>Población: {country.population}</p>
    <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} width="100" />
  </div>

</div>
);
}
export default Resultados