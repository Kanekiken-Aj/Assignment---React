// PokemonComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokemon Details - Axios</h2>
      {pokemonData && (
        <div>
          <h3>Name: {pokemonData.name}</h3>
          <h4>Abilities:</h4>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index} >
                <p>Name: {ability.ability.name}</p>
                <p>URL: {ability.ability.url}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
