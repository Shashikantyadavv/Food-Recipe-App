import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';

const Favourites = () => {
  const { favourite, removeFromFavourites } = useContext(GlobalContext);

  if (favourite.length === 0) {
    return <div className="text-center text-gray-600 mt-10">No favourites added yet.</div>;
  }
 

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {favourite.map((recipe) => (
        <div
          key={recipe.id}
          className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded-lg overflow-hidden bg-white"
        >
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center" style={{ backgroundImage: `url(${recipe.image_url})` }}></div>
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <h3 className="text-gray-900 font-bold text-xl mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-base">{recipe.publisher}</p>
            </div>
            <div className="flex justify-between items-center">
              <a
                href={recipe.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Recipe
              </a>
              <button
                onClick={() => removeFromFavourites(recipe.id)}
                className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
              >
                Remove from Favourite
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
