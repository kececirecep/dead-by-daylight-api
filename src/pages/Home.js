import React from 'react'
import axios from 'axios';
import Characters from '../components/Characters';
import apiData from '../api/api.json';
import { useEffect, useState } from 'react'

const Home = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const charactersArray = Object.values(apiData);
    setCharacters(charactersArray);
  }, []);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/item.json');
          console.log(resp.data);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };
  sendGetRequest();
  }, []);

  return (
    <div>

      <div className='container mx-auto py-20 flex flex-wrap justify-center'>
        {characters.length > 0 ? (
          characters.map((character, index) => (
              <Characters
                key={index}
                no={character.id}
                name={character.name}
                role={character.role}
                gender={character.gender}
                height={character.height}
                bio={character.bio}
                story={character.story}
                img={character.image}
              />
          ))
        ) : (
          <p>No characters available.</p>
        )}
      </div>

    </div>
  )
}

export default Home