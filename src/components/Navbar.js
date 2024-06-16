import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/Context'

const Navbar = () => {

    const{searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

   

  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg: gap-0'>
      <h2 className='text-2xl font-semibold'>
      <NavLink to={'/'} className= 'text-blac hover:text-gray-700 duration-300'>Food Recipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Items...'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className='border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500'
        />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md'>
          Search
        </button>
      </form>
      <ul className='flex gap-5'>
        <li>
            <NavLink to={'/'} className= 'text-blac hover:text-gray-700 duration-300'>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/favourites'} className= 'text-blac hover:text-gray-700 duration-300'>Favourites</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
