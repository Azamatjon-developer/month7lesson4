import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/Context'
import { BiSolidBasket } from 'react-icons/bi'

function Navbar() {
  const { savedProds, setSavedprods } = useContext(Context)

  return (
    <div>
      <div className="flex items-center justify-around mt-3">
        <h1 className="font-bold text-[30px] font-serif">React Shop </h1>
        <ul className="flex items-center justify-center gap-[15px]">
          <NavLink
            to={'/'}
            className="text-slate-500 text-[18px] font-semibold"
          >
            {' '}
            Home
          </NavLink>
          <NavLink
            to={'/'}
            className="text-slate-500 text-[18px] font-semibold"
          >
            Products
          </NavLink>
          <NavLink
            to={'/'}
            className="text-slate-500 text-[18px] font-semibold"
          >
            About
          </NavLink>
        </ul>
        <div className="flex items-center space-x-[10px]">
          <BiSolidBasket className="text-[28px]" />
          <p className="text-[20px] font-semibold">
            Saved Card ({savedProds.length}){' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
