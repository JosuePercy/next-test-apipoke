/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ListPokemon from "@/components/PokemonesCard";
import Sidebar from "@/components/Sidebar";
import useGetListPokemon from "@/hooks/useGetListPokemon";
import useGetTypePokemonId from "@/hooks/useGetTypePokemonId";
import { SmallPokemon } from "@/interfaces/pokemon-list";

import { ResponseType } from "@/interfaces/response-type";
import { useSearchParams } from "next/navigation";
import {  useState } from "react";


export type ResponseTypeId = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resultsApiId: any;
  loading: boolean;
  error: string;
};


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();

  // Parámetros de la URL
  
  const apiUrl = searchParams.get("url");
  const idUrl = apiUrl?.split("/").at(-2) || "";

  // Obtener datos de los Pokémon
  const { resultsApi }: ResponseType = useGetListPokemon();

  const { resultsApiId }: ResponseTypeId = useGetTypePokemonId(idUrl);

  // Estado para el término de búsqueda

  // Debug: Imprimir los resultados en consola
  console.log("resultsApi:", resultsApi);
  console.log("resultsApiId:", resultsApiId);

  // Validar y asignar los Pokémon a mostrar
  const allPokemons =
    resultsApiId?.pokemon?.map((p: any) => p.pokemon) ||
    resultsApi?.results ||
    []; // Fallback en caso de error

    
  // Filtrar los Pokémon según el término de búsqueda
  const filteredPokemons = allPokemons.filter((pokemon: SmallPokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mostrar mensaje de carga si no hay datos
  if (!resultsApi && !resultsApiId) {
    return <p>Cargando pokemones...</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <p className="text-center py-10 font-semibold">Buscador de Pokémon</p>

      <form
        className="max-w-md mx-auto"
        onSubmit={(e) => e.preventDefault()} // Evitar que la página se recargue
      >
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Buscar Pokémon
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border-collapse rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar pokemones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Buscar
          </button>
        </div>
      </form>

      <div className="flex gap-4 mt-10">
        <Sidebar />
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon: SmallPokemon) => (
              <ul
                className="border rounded bg-slate-50 shadow-lg transition transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 duration-300"
                key={pokemon.name}
              >
                <ListPokemon pokemon={pokemon} />
              </ul>
            ))
          ) : (
            <p>No se encontraron Pokémon con ese nombre.</p>
          )}
        </div>
      </div>
    </div>
  );
}
