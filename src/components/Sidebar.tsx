/* eslint-disable @typescript-eslint/no-explicit-any */
/* import useGetImagePokemon from "@/hooks/useGetImagePokemon"; */
import useGetListPokemonType from "@/hooks/useGetListPokemonType";
import { ResponseType } from "@/interfaces/response-type";
import Link from "next/link";
import { PokemonType } from "./ListOfCategories";

/* import { useRouter } from "next/router"; */



// Define el tipo de la propiedad que recibirá PokemonType
interface TypePokemon {
  name: string;
  url: string;
  /* handleSelect: () => void; */
}

// Asegúrate de recibir 'name' y 'url' como propiedades


const Sidebar = () => {
  const { resultsApi }: ResponseType = useGetListPokemonType();


  return (
    <aside className="w-1/3 bg-gray-100 p-4 rounded-lg white:bg-gray-800 border h-[700px]">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>
      {/* Agrega tus componentes de filtros aquí */}
      <div>
        <p className="block text-gray-900 dark:text-slate-900">Tipo</p>
        <ul>
          <Link className="w-full p-2 font-semibold rounded-md border-2  transition duration-300 hover:border-4  hover:scale-105" href={`${process.env.NEXT_PUBLIC_LOCAL_HOST}`}>All</Link>
          {/* Mapea los resultados y pasa las propiedades correctamente */}
          {resultsApi?.results?.map((typePokemon: TypePokemon, index: any) => (
            <PokemonType key={index} 
              name={typePokemon.name}
              url={typePokemon.url}
              />
          ))}
        </ul>
      </div>
      {/* Otros filtros */}
    </aside>
  );
};

export default Sidebar;
