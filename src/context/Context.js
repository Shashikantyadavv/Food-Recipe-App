import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setrecipeDetailData] = useState(null);
  const [favourite, setFavourite] = useState([]);
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      setRecipeList(data.data.recipes);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setSearchParam("");
    }
    // navigate("/");
  };
  const addToFavourites = (recipe) => {
    console.log(recipe);
    setFavourite((prevFavourites) => {
      if (!prevFavourites.some((item) => item.id === recipe.id)) {
        return [...prevFavourites, recipe];
      }
      return prevFavourites;
    });
  };

  const removeFromFavourites = (id) => {
    setFavourite((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== id)
    );
  };
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailData,
        setrecipeDetailData,
        favourite,
        setFavourite,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
