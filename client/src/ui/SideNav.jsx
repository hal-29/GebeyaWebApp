import { NavLink } from "react-router-dom"
import Button from "./Button"

function SideNav() {
  return (
    <aside className="fixed w-full h-screen max-w-xs bg-gray-100/80 backdrop-blur-lg z-[9999] -left-full top-0 pt-24">
      <span className="absolute top-4 right-4 px-2 rounded-full text-lg cursor-pointer bg-gray-200">
         <span className="fa-solid fa-xmark"></span>
      </span>
      <ul className="px-10 flex flex-col gap-4 text-lg font-semibold">
         <NavLink to='/' className="bg-gray-600/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-100">Home</NavLink>
         <NavLink to='/profile' className="bg-gray-600/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-100">Profile</NavLink>
         <NavLink to='/wishlist' className="bg-gray-600/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-100">Wishlist</NavLink>
         <Button label='Logout' />
      </ul>
    </aside>
  )
}
export default SideNav