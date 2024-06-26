import React from 'react'
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 roundec-2xl border-white">
      <div className="h-40 flex justify-centre overflow-hidden items-center rounded-xl">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="text-sm text-cyan-700 font-medium">
        <span className='text-sm text-cyan-700 font-medium'>{item.publisher}</span>
        <h3 className='font-bold text-2xl truncate text-black'>{item.title}</h3>
        <Link to={`/recipe-item/${item.id}`} className='text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'>Recipe Detail</Link>
      </div>
    </div>
  )
}

export default RecipeItem
