import React from 'react';
import { useParams } from 'react-router-dom';
import apiData from '../api/api.json';

function CharacterDetails() {

  let { id } = useParams();
  const detail = Object.values(apiData);
  const deneme = detail.filter(item => item.id == id)
  console.log(deneme)

  return (
    <div classNameName='container mx-auto'>
      <div className="flex items-center justify-center my-24">
        <div className="w-full rounded-xl p-12 shadow-2xl shadow-blue-200 md:w-8/12 lg:w-6/12 bg-white">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="grid-cols-1 lg:col-span-3">
              <img src={deneme[0].image} />
            </div>
            <div className="col-span-1 lg:col-span-9">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-zinc-700">{deneme[0].name}</h2>
                <p className="mt-2 font-semibold bg-pink-500 rounded p-1 text-white inline-block">{deneme[0].role}</p>


                <h2 className='font-bold mt-2'>Bio</h2>
                <p className="mt-2 text-zinc-500">{deneme[0].bio}</p>
                <h2 className='font-bold mt-2'>Story</h2>
                <p className='mt-2 text-zinc-500'>{deneme[0].story}</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default CharacterDetails;