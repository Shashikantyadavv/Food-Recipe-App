import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailData,
    setrecipeDetailData,
    addToFavourites,
    favourite,
    removeFromFavourites,
  } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      setrecipeDetailData(data.data.recipe);
    };
    fetchData();
  }, [id, setrecipeDetailData]);

  if (!recipeDetailData) return <div>Loading...</div>;

  const {
    title,
    publisher,
    ingredients,
    source_url,
    image_url,
    servings,
    cooking_time,
  } = recipeDetailData;

  const isFavourite = favourite.find((item) => item.id === recipeDetailData.id);

  return (
    <div className="flex flex-col max-w-lg mx-auto overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <img
        src={image_url}
        alt={title}
        className="w-full h-64 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
            {title}
          </h1>
          {!isFavourite ? (
            <button
              onClick={() => addToFavourites(recipeDetailData)}
              className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Add to Favorite
            </button>
          ) : (
            <button
              onClick={() => removeFromFavourites(recipeDetailData.id)}
              className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Remove From Favorite
            </button>
          )}
        </div>
        <p className="text-gray-600 italic mb-5">By {publisher}</p>
        <div className="flex justify-between text-gray-600 mb-5">
          <span>Servings: {servings}</span>
          <span>Cooking Time: {cooking_time} mins</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Ingredients
        </h2>
        <ul className="list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient.quantity} {ingredient.unit} {ingredient.description}
            </li>
          ))}
        </ul>
        <a
          href={source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block px-4 py-2 bg-blue-600 text-white text-center font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          View Full Recipe
        </a>
      </div>
    </div>
  );
};

export default Details;
