import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import RecipeItem from "../components/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-centre gap-10">
      {loading && <div>Loading.....</div>}
      {!loading &&
        recipeList.length > 0 &&
        recipeList.map((item, index) => (
          <div key={index}>
            <RecipeItem item={item} />
          </div>
        ))}
      {!loading && recipeList.length <= 0 && (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show.....
        </div>
      )}
    </div>
  );
};

export default Home;
