"use client"



/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */


import useGetImagePokemon from '@/hooks/useGetImagePokemon'
import { SmallPokemon } from '@/interfaces/pokemon-list'
import { ResponseType } from '@/interfaces/response-type'
import React from 'react'


export const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  psychic: "bg-pink-500",
  ice: "bg-cyan-500",
  dragon: "bg-indigo-500",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  fighting: "bg-red-700",
  flying: "bg-blue-300",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  rock: "bg-yellow-800",
  bug: "bg-green-700",
  ghost: "bg-purple-700",
  steel: "bg-gray-500",
};



const ListPokemon = ({ pokemon }: { pokemon: SmallPokemon }) => {

  const url = pokemon.url
  
  const id = url.split("/").at(-2) || ""
  
  const { resultsApi }: ResponseType = useGetImagePokemon(id)
  
  /* localStorage.setItem('typePoke', JSON.stringify(resultsApi)) */
  
  const img = resultsApi?.sprites.other.home.front_default  
  
  const power = resultsApi?.types[0].type.name
  
  const bgColor = typeColors[power] || "bg-gray-500";
 

  return (
        <li className='items-start text-center '>
            {/* <a href=""></a> */}
            <img className='w-[240px] items-center m-auto object-cover' src={img} alt="sas" />
            <div className='flex justify-between p-5'>
              <p className='font-semibold'># {pokemon.name}</p>
              <p className={`p-1 font-semibold rounded-md ${bgColor}`}>{power}</p>
            </div>
        </li>  

  )
}

export default ListPokemon
