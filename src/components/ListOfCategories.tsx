import Link from "next/link";


const typeColors: { [key: string]: string } = {
  fire: "border-red-500",
  water: "border-blue-500",
  grass: "border-green-500",
  electric: "border-yellow-500",
  psychic: "border-pink-500",
  ice: "border-cyan-500",
  dragon: "border-indigo-500",
  dark: "border-gray-700",
  fairy: "border-pink-300",
  normal: "border-gray-400",
  fighting: "border-red-700",
  flying: "border-blue-300",
  poison: "border-purple-500",
  ground: "border-yellow-700",
  rock: "border-yellow-800",
  bug: "border-green-700",
  ghost: "border-purple-700",
  steel: "border-gray-500",
};

interface TypePokemon {
  name: string;
  url: string;
  /* handleSelect: () => void; */
}


export const PokemonType = ({ name, url }: TypePokemon) => {

  const bgColor = typeColors[name] || "bg-gray-500";


  const apiUrl = `${process.env.NEXT_PUBLIC_LOCAL_HOST}?name=${name}&url=${url}`

  /* "undefined/tipo?name=normal&amp;url=https://pokeapi.co/api/v2/type/1/" */

  return (
    <li className={`w-full p-2 font-semibold rounded-md border-2 ${bgColor} transition duration-300 hover:border-4 hover:${bgColor} hover:scale-105`}>
      <Link className="w-full" href={apiUrl}>{name}</Link>
    </li>
  );
};